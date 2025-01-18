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

function printArray(res, n) {
    for (let i = 0; i < n; i++) {
        console.log(res[i]);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let A = readLine().trim();
        let B = readLine().trim();
        let C = readLine().trim();

        let obj = new Solution();
        let res = obj.isInterleave(A, B, C);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @returns {boolean}
 */

class Solution {
    isInterleave(s1, s2, s3) {
        // If the length of s3 is not equal to the combined length of s1 and s2, return false
        if (s1.length + s2.length !== s3.length) {
            return false;
        }

        // Initialize a 2D DP table with dimensions (s1.length + 1) x (s2.length + 1)
        let dp = Array(s1.length + 1).fill(false).map(() => Array(s2.length + 1).fill(false));

        // Base case: empty s1 and empty s2 can form empty s3
        dp[0][0] = true;

        // Fill the DP table
        for (let i = 0; i <= s1.length; i++) {
            for (let j = 0; j <= s2.length; j++) {
                if (i > 0 && s1[i - 1] === s3[i + j - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
                if (j > 0 && s2[j - 1] === s3[i + j - 1]) {
                    dp[i][j] = dp[i][j] || dp[i][j - 1];
                }
            }
        }

        // The answer will be in dp[s1.length][s2.length]
        return dp[s1.length][s2.length];
    }
}
