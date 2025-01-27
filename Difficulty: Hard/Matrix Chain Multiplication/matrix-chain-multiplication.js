//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));

        // let n = input_ar1[0]; // The first element is n (size of the full
        // permutation)
        let arr = input_ar1; // The remaining elements are the array of n-1 numbers

        let obj = new Solution();
        console.log(obj.matrixMultiplication(arr));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {

    matrixMultiplication(arr) {
        let n = arr.length;
        let dp = Array(n).fill().map(() => Array(n).fill(0));

        // dp[i][i] = 0 for all i because no multiplication is needed for a single matrix
        for (let len = 2; len < n; len++) {  // len is the chain length
            for (let i = 1; i < n - len + 1; i++) {
                let j = i + len - 1;
                dp[i][j] = Infinity;  // Set the current cell to a large value
                // Try every possible split position k
                for (let k = i; k < j; k++) {
                    let q = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    dp[i][j] = Math.min(dp[i][j], q);
                }
            }
        }
        return dp[1][n - 1];
    }
}
