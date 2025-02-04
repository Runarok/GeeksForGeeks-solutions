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
        let str1 = readLine();
        let str2 = readLine();
        let obj = new Solution();
        let res = obj.minOperations(str1, str2);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    minOperations(s1, s2) {
        let n = s1.length;
        let m = s2.length;

        // Create a DP table
        let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0));

        // Fill the DP table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // The length of the longest common subsequence
        let lcs = dp[n][m];

        // The result is the sum of deletions and insertions
        return (n - lcs) + (m - lcs);
    }
}
