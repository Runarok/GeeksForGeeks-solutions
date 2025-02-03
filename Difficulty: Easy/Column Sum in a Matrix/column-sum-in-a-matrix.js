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
        let ans = solution.colSum(mat);

        console.log(ans.join(" "));
        console.log("~");
    }
}
// } Driver Code Ends

/**
 * Function to calculate the column sum of a matrix
 * @param {number[][]} mat - The matrix for which column sums are calculated
 * @return {number[]} - An array with the column sums
 */
class Solution {
    colSum(mat) {
        const rows = mat.length;
        const cols = mat[0].length;
        let result = new Array(cols).fill(0);
        
        // Loop through each column
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            
            // Loop through each row and add the current element to the sum for this column
            for (let i = 0; i < rows; i++) {
                sum += mat[i][j];
            }
            
            // Store the sum in the result array
            result[j] = sum;
        }
        
        return result;  // Return the column sum array
    }
}
