//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine()); // Number of test cases
    for (let _ = 0; _ < t; _++) {
        let n = parseInt(readLine()); // Number of rows
        let m = parseInt(readLine()); // Number of columns
        let mat = [];

        for (let i = 0; i < n; i++) {
            mat.push(readLine().split(' ').map(Number));
        }

        let solution = new Solution();
        let ans = solution.rowSum(mat);

        console.log(ans.join(" "));
        console.log("~");
    }
}
// } Driver Code Ends


/**
 * Function to return the sum of elements in each row of the matrix
 * @param {number[][]} mat - The matrix for which row sums are to be calculated
 * @return {number[]} - Array of row sums
 */
class Solution {
    rowSum(mat) {
        const rows = mat.length;
        const cols = mat[0].length;
        let result = new Array(rows).fill(0);

        // Calculate the sum of elements in each row
        for (let i = 0; i < rows; i++) {
            let sum = 0;
            for (let j = 0; j < cols; j++) {
                sum += mat[i][j];
            }
            result[i] = sum;  // Store the sum in the result array
        }

        return result;  // Return the array of row sums
    }
}
