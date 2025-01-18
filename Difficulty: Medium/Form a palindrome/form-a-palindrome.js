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
        let S = readLine();
        let obj = new Solution();
        console.log(obj.findMinInsertions(S));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    findMinInsertions(s) {
        const n = s.length;

        // Create a DP table to store the minimum insertions needed
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        // Fill the table
        for (let gap = 1; gap < n; gap++) {
            for (let i = 0, j = gap; j < n; i++, j++) {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1]; // No insertion needed
                } else {
                    dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1; // Choose the minimum from two possibilities
                }
            }
        }

        // The result is in dp[0][n-1], which represents the minimum insertions for the whole string
        return dp[0][n - 1];
    }
}
