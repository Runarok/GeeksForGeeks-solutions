//{ Driver Code Starts
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
        let s1 = readLine(); // First string as input
        let s2 = readLine(); // Second string as input

        let obj = new Solution();
        let ans = obj.lcs(s1, s2);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
class Solution {
    // Function to find the length of longest common subsequence in two strings.
    lcs(s1, s2) {
        let n = s1.length;
        let m = s2.length;
        
        // Initialize dp array with zeroes (Base case is already 0 when i or j is 0)
        let dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
        
        // Fill the dp table using bottom-up DP approach
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1]; // If characters match
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // If characters don't match
                }
            }
        }
        
        // The value in dp[n][m] will hold the length of the LCS
        return dp[n][m];
    }
}
