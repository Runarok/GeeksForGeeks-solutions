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
        // let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        let res = obj.maximumProfit(arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    /**
    * @param {number[]} prices
    * @returns {number}
    */

    // Recursive approach (Brute force)
    helper(arr, ind, buy) {
        if (ind == arr.length) return 0;

        let profit = 0;
        if (buy == 1) {
            // Either buy stock or skip
            profit = Math.max(-arr[ind] + this.helper(arr, ind + 1, 0),
                              this.helper(arr, ind + 1, 1));
        } else {
            // Either sell stock or skip
            profit = Math.max(arr[ind] + this.helper(arr, ind + 1, 1),
                              this.helper(arr, ind + 1, 0));
        }
        return profit;
    }

    // Memoization approach (Top-down DP)
    helper1(arr, ind, buy, dp) {
        if (ind == arr.length) return 0;
        if (dp[ind][buy] !== -1) return dp[ind][buy];

        let profit = 0;
        if (buy == 1) {
            profit = Math.max(-arr[ind] + this.helper1(arr, ind + 1, 0, dp),
                              this.helper1(arr, ind + 1, 1, dp));
        } else {
            profit = Math.max(arr[ind] + this.helper1(arr, ind + 1, 1, dp),
                              this.helper1(arr, ind + 1, 0, dp));
        }
        return dp[ind][buy] = profit;
    }

    // Tabulation approach (Bottom-up DP)
    helper2(arr, Ind, Buy, dp) {
        let n = arr.length;

        // Iterating from last index to 0
        for (let ind = n - 1; ind >= 0; ind--) {
            for (let buy = 0; buy <= 1; buy++) {
                let profit = 0;
                if (buy == 1) {
                    profit = Math.max(-arr[ind] + dp[ind + 1][0],
                                       dp[ind + 1][1]);
                } else {
                    profit = Math.max(arr[ind] + dp[ind + 1][1],
                                       dp[ind + 1][0]);
                }
                dp[ind][buy] = profit;
            }
        }
        return dp[Ind][Buy];
    }

    // Space Optimized Tabulation (Using two 1D arrays)
    helper3(arr, Ind, Buy) {
        let n = arr.length;
        let after = new Array(2).fill(0),
            temp = new Array(2).fill(0);

        for (let ind = n - 1; ind >= 0; ind--) {
            for (let buy = 0; buy <= 1; buy++) {
                let profit = 0;
                if (buy == 1) {
                    profit = Math.max(-arr[ind] + after[0], after[1]);
                } else {
                    profit = Math.max(arr[ind] + after[1], after[0]);
                }
                temp[buy] = profit;
            }
            after = [...temp]; // Update the after array
        }
        return after[Buy];
    }

    // Another optimized solution (Iterative approach with single 2D array)
    helper4(arr, Ind, Buy, dp) {
        let n = arr.length;

        for (let ind = n - 1; ind >= 0; ind--) {
            dp[ind][1] = Math.max(-arr[ind] + dp[ind + 1][0], dp[ind + 1][1]);
            dp[ind][0] = Math.max(arr[ind] + dp[ind + 1][1], dp[ind + 1][0]);
        }
        return dp[Ind][Buy];
    }

    // Fully optimized solution (Using only two 1D arrays)
    helper5(arr, Ind, Buy) {
        let n = arr.length;
        let after = new Array(2).fill(0),
            temp = new Array(2).fill(0);

        for (let ind = n - 1; ind >= 0; ind--) {
            temp[1] = Math.max(-arr[ind] + after[0], after[1]);
            temp[0] = Math.max(arr[ind] + after[1], after[0]);

            after = [...temp]; // Update the after array
        }
        return after[Buy];
    }

    maximumProfit(prices) {
        let n = prices.length;

        // Uncomment one of the methods below to use the respective approach:

        // return this.helper(prices, 0, 1); // Recursive brute force
        // let dp = new Array(n).fill().map(() => new Array(2).fill(-1));
        // return this.helper1(prices, 0, 1, dp); // Memoization approach

        let dp = new Array(n + 1).fill().map(() => new Array(2).fill(0));
        // return this.helper2(prices, 0, 1, dp); // Tabulation approach
        // return this.helper3(prices, 0, 1); // Space optimized tabulation
        // return this.helper4(prices, 0, 1, dp); // Optimized iterative approach
        return this.helper5(prices, 0, 1); // Most optimized space approach
    }
}
