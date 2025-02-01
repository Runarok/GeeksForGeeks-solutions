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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let m = input_ar1[0];
        let n = input_ar1[1];
        let obj = new Solution();
        let res = obj.numberOfPaths(m, n);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number} m - Number of rows in the grid
 * @param {number} n - Number of columns in the grid
 * @returns {number} - Number of unique paths from the top-left to the bottom-right corner
 */
class Solution {
    numberOfPaths(m, n) {
        const mod = 1e9 + 7; // Large prime number for modulo to prevent overflow

        // Create a 2D DP table initialized with 1s
        const dp = Array(m).fill(0).map(() => Array(n).fill(1));

        // Fill the DP table using bottom-up approach
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                // Number of ways to reach (i, j) is the sum of paths from (i-1, j) and (i, j-1)
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % mod;
            }
        }

        // Return the result at the bottom-right corner
        return dp[m - 1][n - 1];
    }
}
