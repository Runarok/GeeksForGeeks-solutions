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
        // Read n and k from separate lines
        let n = parseInt(readLine());
        let k = parseInt(readLine());

        let obj = new Solution();
        let ans = obj.eggDrop(n, k);

        if (ans == -0) ans = 0; // Handling any potential -0 cases
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of attempts needed in
    // order to find the critical floor.
    eggDrop(n, k) {
        // Create a table to store results of subproblems
        let dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));
        
        // Base case initialization:
        // If we have 1 egg, we need to drop it from each floor
        for (let i = 1; i <= k; i++) {
            dp[1][i] = i; // With 1 egg, drop it floor by floor.
        }

        // Fill the rest of the entries for n eggs and k floors
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= k; j++) {
                dp[i][j] = Number.MAX_VALUE;
                // We try dropping an egg from each floor and take the minimum of the worst case
                for (let x = 1; x <= j; x++) {
                    let res = 1 + Math.max(dp[i-1][x-1], dp[i][j-x]);
                    dp[i][j] = Math.min(dp[i][j], res);
                }
            }
        }

        // The result is the minimum number of moves needed for n eggs and k floors
        return dp[n][k];
    }
}
