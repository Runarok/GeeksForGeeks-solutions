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
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        console.log(obj.maxProfit(arr)); // Use the array directly

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    /**
    * @param number[] price
    * @returns number
    */
    maxProfit(price) {
        // Initialize the variables:
        // min_price will store the minimum price seen so far
        // max_price will store the maximum price seen from the end of the array
        // max_pro will store the maximum profit found
        var min_price = price[0], max_price = price[price.length - 1], max_pro = 0, dp = [], n = price.length;
        
        // Initialize dp array where dp[i] will store the maximum profit up to day i
        dp.push(0);
        
        // dp1 will store the maximum profit that can be made from day i to the end
        var dp1 = new Array(price.length).fill(0);
        
        // Calculate dp array: Maximum profit for a transaction ending at day i
        for (var i = 1; i < price.length; i++) {
            if (price[i] < min_price) {
                min_price = price[i]; // Update the minimum price if we find a new lower price
            }
            dp[i] = Math.max(dp[i - 1], price[i] - min_price); // Maximum profit at i-th day
        }

        // Calculate dp1 array: Maximum profit for a transaction starting at day i
        for (var i = n - 2; i >= 0; i--) {
            if (price[i] > max_price) {
                max_price = price[i]; // Update the maximum price if we find a new higher price
            }
            dp1[i] = Math.max(dp1[i + 1], max_price - price[i]); // Maximum profit starting at i-th day
        }
        
        // Calculate the maximum profit by considering the sum of profits from two transactions
        for (var i = 0; i < n; i++) {
            max_pro = Math.max(max_pro, dp[i] + dp1[i]); // Update max profit by adding profit from both transactions
        }

        return max_pro; // Return the maximum profit found
    }
}
