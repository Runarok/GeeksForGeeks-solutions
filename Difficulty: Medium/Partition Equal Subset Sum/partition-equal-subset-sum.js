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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let ok = obj.equalPartition(arr);
        if (ok)
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    equalPartition(arr) {
        // Calculate the sum of all elements in the array
        const sum = arr.reduce((prev, curr) => prev + curr, 0);
        
        // If the sum is odd, it's impossible to divide the array into two equal partitions
        if (sum % 2 !== 0) return false;

        // Target sum for one partition (half of the total sum)
        const target = sum / 2;
        
        // DP array to check if a subset sum of 'i' is possible
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;  // 0 sum is always possible (empty subset)

        // Loop through the array
        for (let i = 0; i < arr.length; i++) {
            // Traverse the dp array from target down to arr[i] to prevent overwriting values
            for (let j = target; j >= arr[i]; j--) {
                dp[j] = dp[j] || dp[j - arr[i]];
            }
        }

        // If dp[target] is true, then a partition is possible
        return dp[target];
    }
}
