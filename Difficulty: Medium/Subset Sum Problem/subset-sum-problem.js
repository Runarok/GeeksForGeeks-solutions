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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let inputArr = readLine().split(" ").map((x) => parseInt(x));
        let n = inputArr.length;
        let arr = new Array(n);
        for (let j = 0; j < n; j++) arr[j] = inputArr[j];
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isSubsetSum(arr, sum);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The array of numbers
 * @param {number} target - The target sum to check
 * @return {boolean}
 */

class Solution {

    /**
     * Helper function to determine if a subset sum exists
     * @param {number[]} arr - The array of numbers
     * @param {number} target - The remaining target sum
     * @param {number} index - Current index in the array
     * @param {number[][]} memo - Memoization table
     * @return {boolean}
     */
    subsetSumHelper(arr, target, index, memo) {
        // Base case: if target becomes negative, return false
        if (target < 0) {
            return false;
        }
        
        // If target is exactly 0, we found a valid subset
        if (target === 0) {
            return true;
        }
        
        // If we reach the end of the array without meeting the target, return false
        if (index >= arr.length) {
            return false;
        }

        // Return precomputed result if available
        if (memo[index][target] !== -1) {
            return memo[index][target];
        }

        // Choice: Include the current element in the subset or exclude it
        if (target - arr[index] >= 0) {
            memo[index][target] = this.subsetSumHelper(arr, target - arr[index], index + 1, memo) ||
                                  this.subsetSumHelper(arr, target, index + 1, memo);
            return memo[index][target];
        }

        // If including is not possible, move to the next element
        memo[index][target] = this.subsetSumHelper(arr, target, index + 1, memo);
        return memo[index][target];
    }

    /**
     * Determines whether there exists a subset in `arr` whose sum equals `target`
     * @param {number[]} arr - The array of numbers
     * @param {number} target - The target sum to check
     * @return {boolean}
     */
    isSubsetSum(arr, target) {
        // Initialize memoization table with -1 (indicating uncomputed states)
        let memo = Array(arr.length + 1).fill().map(() => Array(target + 1).fill(-1));

        // Call the recursive helper function
        return this.subsetSumHelper(arr, target, 0, memo);
    }
}
