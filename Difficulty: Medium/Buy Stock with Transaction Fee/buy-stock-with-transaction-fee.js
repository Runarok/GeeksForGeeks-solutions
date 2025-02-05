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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.maximumProfit(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} prices
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the maximum profit which can be obtained by buying and selling stocks with a transaction fee.
    maximumProfit(arr, k) {
        // If there are no prices, return 0 as no profit can be made.
        if (arr.length === 0) return 0;

        // Initialize variables for holding stock and having cash.
        // 'hold' represents the maximum profit if we are holding a stock.
        // 'cash' represents the maximum profit if we are not holding a stock.
        let hold = -arr[0];  // The initial profit when we buy the stock on day 0.
        let cash = 0;        // The initial profit when we don't hold any stock on day 0.

        // Iterate through the prices array starting from the second day.
        for (let i = 1; i < arr.length; i++) {
            // Update the maximum profit for holding a stock.
            // Either we continue holding the stock from previous day or buy it on the current day.
            hold = Math.max(hold, cash - arr[i]);
            
            // Update the maximum profit for having cash (i.e., not holding any stock).
            // Either we continue without selling or we sell the stock we were holding.
            cash = Math.max(cash, hold + arr[i] - k);
        }

        // Return the maximum profit when not holding any stock (i.e., cash).
        return cash;
    }
}
