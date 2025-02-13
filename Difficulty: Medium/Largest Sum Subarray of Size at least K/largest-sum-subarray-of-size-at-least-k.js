//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar[i];
        let k = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.maxSumWithK(a, n, k));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {number[]} a - The input array
 * @param {number} n - Length of the array
 * @param {number} k - Maximum number of elements that can be removed
 * @returns {number} - Maximum sum of subarray after removing at most k elements
 */

class Solution {
    // Function to find the maximum sum subarray by removing at most k elements.
    maxSumWithK(a, n, k) {
        // Array to store the maximum sum ending at each index
        const maxSum = new Array(n).fill(0);
        maxSum[0] = a[0];

        // Compute max sum ending at each index using Kadane's algorithm
        for (let i = 1; i < n; i++) {
            maxSum[i] = Math.max(maxSum[i - 1] + a[i], a[i]);
        }

        // Compute initial window sum of the first 'k' elements
        let windowSum = 0;
        for (let i = 0; i < k; i++) {
            windowSum += a[i];
        }

        // Initialize result with the initial window sum
        let maxResult = windowSum;

        // Slide the window across the array and update maxResult
        for (let i = k; i < n; i++) {
            // Slide the window forward by removing the first element and adding the next one
            windowSum = windowSum + a[i] - a[i - k];

            // Update result: Either keep the window sum or combine it with maxSum[i-k]
            maxResult = Math.max(maxResult, Math.max(windowSum, windowSum + maxSum[i - k]));
        }

        return maxResult;
    }
}
