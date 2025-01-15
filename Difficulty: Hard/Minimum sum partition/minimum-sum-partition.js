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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        // let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.minDifference(arr);

        console.log(res); // Print the array as a space-separated string
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find minimum difference between any pair of elements in an array.
    minDifference(arr) {
        const n = arr.length;
        const total_sum = arr.reduce((acc, val) => acc + val, 0);

        // Initialize a DP array of size (total_sum / 2) + 1
        const dp = new Array(Math.floor(total_sum / 2) + 1).fill(false);
        dp[0] = true; // Zero sum is always possible (empty set)

        // Populate the DP array
        for (let i = 0; i < n; i++) {
            for (let j = Math.floor(total_sum / 2); j >= arr[i]; j--) {
                dp[j] = dp[j] || dp[j - arr[i]];
            }
        }

        // Find the largest possible sum that is less than or equal to total_sum / 2
        let subset_sum = 0;
        for (let i = Math.floor(total_sum / 2); i >= 0; i--) {
            if (dp[i]) {
                subset_sum = i;
                break;
            }
        }

        // Calculate the minimum difference
        return Math.abs(total_sum - 2 * subset_sum);
    }
}
