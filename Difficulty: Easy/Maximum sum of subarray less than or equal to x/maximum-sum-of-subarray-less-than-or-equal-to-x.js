//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map((string) => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(" ").map((x) => parseInt(x));
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findMaxSubarraySum(arr, sum);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} sum
 * @return {number}
 */

class Solution {
    findMaxSubarraySum(arr, x) {
        // Initialize variables for left pointer, sum, and max_sum
        let l = 0;
        let sum = 0;
        let maxSum = 0;

        // Iterate through the array using the right pointer
        for (let r = 0; r < arr.length; r++) {
            sum += arr[r];

            // Shrink the window from the left if the sum exceeds x
            while (sum > x) {
                sum -= arr[l];
                l++;
            }

            // Update maxSum with the largest sum found
            maxSum = Math.max(maxSum, sum);
        }

        return maxSum;
    }
}

