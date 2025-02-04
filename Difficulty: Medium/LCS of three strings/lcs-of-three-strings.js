//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let s1 = readLine();
        let s2 = readLine();
        let s3 = readLine();
        let obj = new Solution();
        let res = obj.LCSof3(s1, s2, s3);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */

class Solution {
    // Function to find the length of the longest common subsequence among three strings
    LCSof3(s1, s2, s3) {
        // Initialize a 3D DP array with dimensions [s1.length][s2.length][s3.length] and fill it with -1
        let dp = new Array(s1.length).fill(-1).map(() => new Array(s2.length).fill(-1).map(() => new Array(s3.length).fill(-1)));
        
        // Call the helper function to solve the problem using memoization
        return this.LCSSolveMem(s1, s2, s3, 0, 0, 0, dp);
    }

    // Helper function to recursively calculate LCS of 3 strings with memoization
    LCSSolveMem(s1, s2, s3, i, j, k, dp) {
        // Base case: If any string index is out of bounds, return 0
        if (i === s1.length || j === s2.length || k === s3.length)
            return 0;
    
        // If the result for this subproblem is already computed, return it from the DP table
        if (dp[i][j][k] !== -1)
            return dp[i][j][k];
    
        // If characters from all three strings match, we include this character in the subsequence
        if (s1[i] === s2[j] && s2[j] === s3[k])
            return dp[i][j][k] = 1 + this.LCSSolveMem(s1, s2, s3, i + 1, j + 1, k + 1, dp);
        else
            // Otherwise, compute the maximum LCS possible by moving ahead in any of the three strings
            return dp[i][j][k] = Math.max(
                this.LCSSolveMem(s1, s2, s3, i + 1, j, k, dp),    // Skip character in s1
                this.LCSSolveMem(s1, s2, s3, i, j + 1, k, dp),    // Skip character in s2
                this.LCSSolveMem(s1, s2, s3, i, j, k + 1, dp)     // Skip character in s3
            );
    }
}
