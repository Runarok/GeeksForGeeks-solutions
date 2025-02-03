//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < n; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let obj = new Solution();
        let ans = obj.findMinOperation(matrix);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} n
 * @returns {number}
 */

// User function template for JavaScript
/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of operations required 
    // to make all elements of the matrix equal.
    findMinOperation(mat) {
        let n = mat.length;
        let operations = 0;
        let maxSum = 0;

        // Determine the maximum sum across all rows
        for (let row = 0; row < n; row++) {
            let rowSum = 0;
            for (let col = 0; col < n; col++) {
                rowSum += mat[row][col];
            }
            maxSum = Math.max(rowSum, maxSum);
        }

        // Determine the maximum sum across all columns
        for (let col = 0; col < n; col++) {
            let colSum = 0;
            for (let row = 0; row < n; row++) {
                colSum += mat[row][col];
            }
            maxSum = Math.max(colSum, maxSum);
        }

        // Calculate the total number of operations required
        for (let row = 0; row < n; row++) {
            let rowSum = 0;
            for (let col = 0; col < n; col++) {
                rowSum += mat[row][col];
            }
            operations += (maxSum - rowSum);
        }

        return operations;
    }
}
