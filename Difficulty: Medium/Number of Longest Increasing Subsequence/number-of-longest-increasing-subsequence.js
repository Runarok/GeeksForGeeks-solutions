//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => { inputString += inputStdin; });

process.stdin.on('end', (_) => {
    inputString =
        inputString.trim().split('\n').map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/*** Ignore above this line ***/

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(' ').map((x) => parseInt(x));
        let obj = new Solution();
        console.log(obj.numberofLIS(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the number of strictly increasing subarrays.
    numberofLIS(arr) {
        // Initialize the length of the array
        let n = arr.length;
        
        // Initialize dp and count arrays.
        // dp[i] will store the length of the longest increasing subsequence ending at index i.
        // count[i] will store the number of such subsequences ending at index i.
        let dp = new Array(n).fill(1), count = new Array(n).fill(1), maxi = 1;
        
        // Loop through the array to calculate dp and count for each element
        for (let i = 1; i < n; i++) {
            for (let prev = 0; prev < i; prev++) {
                // If the current element arr[i] can extend the subsequence ending at arr[prev]
                if (arr[prev] < arr[i] && 1 + dp[prev] > dp[i]) {
                    dp[i] = 1 + dp[prev];  // Update the length of the LIS ending at i
                    count[i] = count[prev];  // Reset the count for this subsequence
                }
                // If the current element arr[i] can extend subsequences of the same length
                else if (arr[prev] < arr[i] && 1 + dp[prev] == dp[i]) {
                    count[i] += count[prev];  // Add the count from the previous subsequence
                }
                // Keep track of the maximum length of the LIS
                maxi = Math.max(maxi, dp[i]);
            }
        }
        
        // Count the number of subsequences of the longest length
        let ans = 0;
        for (let i = 0; i < n; i++) {
            if (dp[i] == maxi) {
                ans += count[i];  // Add to the answer the count of subsequences of length maxi
            }
        }
        
        // Return the total number of strictly increasing subsequences of maximum length
        return ans;
    }
}
