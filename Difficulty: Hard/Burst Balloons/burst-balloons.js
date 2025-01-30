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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxCoins(arr));

        console.log("~");
    }
}
// } Driver Code Ends

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxCoins(arr) {
        let m = arr.length; // Get the length of the input array (number of balloons)

        // Initialize a 2D dp array with 0 values. dp[i][j] will store the max coins obtainable from bursting all the balloons between index i and j
        let dp = new Array(m).fill(0).map(() => new Array(m).fill(0));

        // Outer loop for the gap (distance between i and j)
        for (let gap = 0; gap < dp.length; gap++) {
            // Inner loop to set the range from i to j (gap is the difference between j and i)
            for (let i = 0, j = gap; j < m; i++, j++) {
                let max = -Infinity; // Variable to keep track of the maximum coins we can get from the range (i, j)
                
                // Loop to check each possible balloon (k) to burst last in the range [i, j]
                for (let k = i; k <= j; k++) {
                    // Calculate the coins we get by bursting the k-th balloon last in the range
                    let left = k == i ? 0 : dp[i][k - 1]; // Coins from the left subarray (balloons before k)
                    let right = k == j ? 0 : dp[k + 1][j]; // Coins from the right subarray (balloons after k)
                    
                    // Value for bursting the k-th balloon (left * k * right) 
                    // Using the values of the neighboring balloons (arr[i-1] and arr[j+1] if they exist, else 1)
                    let val = (i == 0 ? 1 : arr[i - 1]) * arr[k] * (j == m - 1 ? 1 : arr[j + 1]);

                    // Total coins we can get by bursting k-th balloon last and adding left and right parts
                    let total = left + right + val;
                    
                    // Update the max variable with the best possible coins for this range
                    if (total > max) {
                        max = total;
                    }
                }
                // Store the max coins in the dp table for range [i, j]
                dp[i][j] = max;
            }
        }

        // The answer will be the maximum coins we can get for the entire range, i.e., from 0 to m-1
        return dp[0][m - 1];
    }
}
