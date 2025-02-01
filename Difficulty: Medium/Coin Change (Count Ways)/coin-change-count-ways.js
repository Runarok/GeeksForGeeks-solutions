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

        let coins = readLine().trim().split(" ").map((x) => parseInt(x));
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.count(coins, sum);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to count the number of ways to make a sum using given coins.
     * @param {number[]} coins - Array representing the denominations of coins.
     * @param {number} sum - The target sum we need to achieve using the coins.
     * @returns {number} - The number of ways to make the target sum.
     */
    count(coins, sum) {
        // Initialize the dp array to store the number of ways to make each sum
        const dp = [];

        // Create a 2D dp array with (coins.length+1) rows and (sum+1) columns
        // dp[i][j] will store the number of ways to make sum j using the first i coins
        for (let i = 0; i < coins.length + 1; i++) {
            let row = [];
            for (let j = 0; j < sum + 1; j++) {
                row.push(-1); // Initialize the dp table with -1
            }
            dp.push(row);
        }

        /**
         * Helper function to calculate the number of ways to make a target sum.
         * @param {number} index - The current coin being considered.
         * @param {number} target - The current target sum we're trying to make.
         * @returns {number} - The number of ways to make the target sum using the coins.
         */
        function ans(index, target) {
            // Base case: If the target sum is divisible by the first coin, set dp[0][target] to 1
            // This means there is one way to make the sum if only the first coin is available
            for (let i = 0; i < target + 1; i++) {
                if (i % coins[0] === 0) {
                    dp[0][i] = 1; // If the target sum is a multiple of the first coin, one way is to use only that coin
                } else {
                    dp[0][i] = 0; // Otherwise, no way to make that sum with only the first coin
                }
            }

            // Iterate over the remaining coins
            for (let i = 1; i < coins.length; i++) {
                for (let j = 0; j < target + 1; j++) {
                    // Calculate the number of ways to make the sum without taking the current coin
                    const ntTake = dp[i - 1][j];
                    
                    // Calculate the number of ways to make the sum by taking the current coin (if possible)
                    let take = 0;
                    if (coins[i] <= j) {
                        take = dp[i][j - coins[i]]; // Take the current coin and reduce the target by its value
                    }

                    // Store the total number of ways to make the current sum
                    dp[i][j] = take + ntTake;
                }
            }

            return dp[index][target]; // Return the number of ways to make the target sum using all coins
        }

        return ans(coins.length - 1, sum); // Start the process from the last coin and the target sum
    }
}
