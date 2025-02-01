//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let [R, C] = readLine().trim().split(" ").map((x) => parseInt(x));
        let M = [];
        for (let j = 0; j < R; j++) {
            let inputLine = readLine().trim().split(" ").map((x) => parseInt(x));
            M.push(inputLine);
        }
        let obj = new Solution();
        let res = obj.maximumSumRectangle(M);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} R
 * @param {number} C
 * @param {number[]} M
 * @return {number}
 */

class Solution {
    /**
     * Helper function: Kadane's Algorithm to find the maximum sum subarray
     * @param {number[]} arr - The input array for which the maximum sum subarray is calculated.
     * @returns {number} - The maximum sum of the subarray.
     */
    kadane(arr) {
        let maxEnd = arr[0], maxFar = arr[0];
        
        // Iterate through the array to find the maximum sum subarray using Kadane's Algorithm
        for (let i = 1; i < arr.length; i++) {
            maxEnd = Math.max(arr[i], maxEnd + arr[i]); // Update maxEnd to either current element or add it to previous sum
            maxFar = Math.max(maxFar, maxEnd); // Keep track of the overall maximum sum found
        }
        return maxFar; // Return the maximum subarray sum
    }

    /**
     * Function to find the maximum sum rectangle in a 2D matrix.
     * @param {number[][]} mat - The 2D matrix to find the maximum sum rectangle.
     * @returns {number} - The maximum sum of the rectangle.
     */
    maximumSumRectangle(mat) {
        const rows = mat.length, cols = mat[0].length; // Get the number of rows and columns in the matrix
        let maxSum = -Infinity; // Initialize the maximum sum to the smallest possible value
        
        // Loop over all possible top and bottom row combinations to create subarrays
        for (let top = 0; top < rows; top++) {
            let temp = new Array(cols).fill(0); // Temporary array to store column-wise sums for the current subarray
            for (let bottom = top; bottom < rows; bottom++) {
                // Update the temporary array with the current row's values
                for (let col = 0; col < cols; col++) temp[col] += mat[bottom][col];
                
                // Use Kadane's algorithm to find the maximum sum of the 1D subarray formed by the column sums
                let currMax = this.kadane(temp);
                
                // Update the overall maximum sum if a larger sum is found
                maxSum = Math.max(maxSum, currMax);
            }
        }
        return maxSum; // Return the maximum sum rectangle
    }
}
