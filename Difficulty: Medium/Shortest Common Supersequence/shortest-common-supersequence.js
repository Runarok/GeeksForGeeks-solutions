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
    for (let i = 0; i < t; i++) {
        let s1 = readLine();
        let s2 = readLine();

        let obj = new Solution();
        let ans = obj.shortestCommonSupersequence(s1, s2);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */

class Solution {
    // Function to find length of shortest common supersequence of two strings.
    shortestCommonSupersequence(s1, s2) {
        // Get the lengths of the two strings
        let n = s1.length;
        let t = s2.length;
        
        // If any of the strings is empty, return 0 as no supersequence can be formed
        if (!n || !t) return 0;
        
        // Create a 2D DP array to store the lengths of common subsequences
        const dp = Array.from({ length: n + 1 }, () => Array(t + 1).fill(0));
        
        // Fill the DP table using bottom-up approach
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= t; j++) {
                // If characters match, increment the count for this common subsequence
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    // If characters don't match, take the maximum count from the previous row or column
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // The length of the Longest Common Subsequence (LCS)
        let lcs = dp[n][t];
        
        // The length of the Shortest Common Supersequence is the sum of lengths of both strings minus LCS
        return n + t - lcs;
    }
}
