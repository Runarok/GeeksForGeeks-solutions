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
        let str = readLine();
        let obj = new Solution();
        let res = obj.countPS(str);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


class Solution {
    /**
     * @param {string} s
     * @returns {number}
     */

    countPS(s) {
        // Initialize the length of the string
        const n = s.length;

        // Create a DP table to store the number of palindromic subsequences
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        // Every single character is a palindrome of length 1, so initialize diagonal entries
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }

        // Build the DP table for subsequences of length 2 to n
        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;

                // If characters at i and j are the same, count them as part of a palindrome
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j] + dp[i][j - 1] + 1;
                } else {
                    // Otherwise, take the sum of subsequences excluding i and j, and subtract the overlapping part
                    dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1];
                }
            }
        }

        // The answer is the number of palindromic subsequences for the entire string
        return dp[0][n - 1];
    }
}
