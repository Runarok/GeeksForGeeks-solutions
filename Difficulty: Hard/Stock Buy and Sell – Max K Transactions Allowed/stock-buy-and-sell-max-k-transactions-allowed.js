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
        let arr = readLine().split(" ");
        for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.maxProfit(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    maxProfit(arr, k) {
        const n = arr.length;
        
        // If there are no days or no transactions, profit is 0
        if (n === 0 || k === 0) {
            return 0;
        }

        // If the number of transactions is more than half the number of days, 
        // we can just buy and sell on every peak and valley.
        if (k >= n / 2) {
            let profit = 0;
            for (let i = 1; i < n; i++) {
                if (arr[i] > arr[i - 1]) {
                    profit += arr[i] - arr[i - 1];
                }
            }
            return profit;
        }

        // DP table for storing maximum profit with at most t transactions on day i
        let dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));

        // Loop through each transaction count
        for (let t = 1; t <= k; t++) {
            let maxDiff = -arr[0]; // To store the max difference for profit calculation
            for (let i = 1; i < n; i++) {
                // dp[t][i] = max of (not doing a transaction today, or selling today after buying at some previous day)
                dp[t][i] = Math.max(dp[t][i - 1], arr[i] + maxDiff);
                // Update maxDiff considering previous days and transactions
                maxDiff = Math.max(maxDiff, dp[t - 1][i] - arr[i]);
            }
        }

        // Return the result for the maximum profit with at most k transactions by the last day
        return dp[k][n - 1];
    }
}
