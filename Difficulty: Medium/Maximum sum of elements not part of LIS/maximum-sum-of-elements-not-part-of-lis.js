//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map(
        (string) => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let n = parseInt(readLine());
        let Arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.maxSumLis(Arr, n);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    maxSumLis(nums, n) {
        // Initialize dp array to store the length of LIS up to each element
        let dp = new Array(n).fill(1);
        
        // Initialize sum1 array to store the sum of LIS up to each element
        let sum1 = new Array(n).fill(Infinity);
        sum1[0] = nums[0];  // First element is the base case
        
        // Loop through each element to calculate the LIS and sum
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    // Update dp and sum1 if a longer subsequence is found
                    if (dp[i] < dp[j] + 1) {
                        dp[i] = dp[j] + 1;
                        sum1[i] = nums[i] + sum1[j];
                    } else if (dp[i] === dp[j] + 1) {
                        // If same length, take the minimum sum
                        sum1[i] = Math.min(sum1[i], nums[i] + sum1[j]);
                    }
                }
            }
            
            // If sum1[i] is still infinity, it means no LIS is found, so set it to the element itself
            if (sum1[i] === Infinity) {
                sum1[i] = nums[i];
            }
        }

        // Find the maximum length of LIS
        let lis = Math.max(...dp);
        
        // Find the minimum sum of LIS with the maximum length
        let ans = Infinity;
        for (let i = 0; i < n; i++) {
            if (dp[i] === lis) {
                ans = Math.min(ans, sum1[i]);
            }
        }

        // Return the total sum minus the minimum LIS sum
        return nums.reduce((acc, curr) => acc + curr, 0) - ans;
    }
}
