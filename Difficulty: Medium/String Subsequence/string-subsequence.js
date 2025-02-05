//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s1 = readLine();
        let s2 = readLine();
        let obj = new Solution();
        let res = obj.countWays(s1, s2);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    countWays(s1, s2) {
        const MOD = 1e9 + 7; // Modulo value for large numbers
        const n = s1.length;  // Length of first string
        const m = s2.length;  // Length of second string

        // Initialize a 2D DP table with 0's. dp[i][j] represents the number of ways to
        // match the first i characters of s1 with the first j characters of s2
        let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        // Base case: If s2 is empty, there's 1 way to match s1 (by considering an empty subsequence)
        for (let i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        // Fill the DP table using the recurrence relation
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    // If the characters match, we can either include or exclude the current character
                    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
                } else {
                    // If they don't match, we only exclude the current character of s1
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // The result is stored in dp[n][m], which represents the number of ways to match the full strings
        return dp[n][m];
    }
}
