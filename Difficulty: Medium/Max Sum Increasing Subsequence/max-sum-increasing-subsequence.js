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
        // let n = parseInt(readLine());
        let input1 = readLine().split(" ").map((x) => parseInt(x));
        let n = input1.length;
        let arr = new Array(n);
        for (let j = 0; j < n; j++) arr[j] = input1[j];
        let obj = new Solution();
        let res = obj.maxSumIS(arr);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    recursive(indx, prevIndx, arr, dp) {
        // Base case: If we've processed all elements
        if(indx === arr.length) return 0;

        // If the solution is already computed, return it
        if(dp[indx][prevIndx + 1] !== -1) return dp[indx][prevIndx + 1];

        let maxSum = 0;

        // Option 1: Include arr[indx] in the subsequence if it's greater than arr[prevIndx]
        if(prevIndx === -1 || arr[indx] > arr[prevIndx]) {
            maxSum = arr[indx] + this.recursive(indx + 1, indx, arr, dp);
        }

        // Option 2: Exclude arr[indx] and move forward
        maxSum = Math.max(maxSum, this.recursive(indx + 1, prevIndx, arr, dp));

        // Store the result in dp and return it
        return dp[indx][prevIndx + 1] = maxSum;
    }

    maxSumIS(arr) {
        const n = arr.length;
        // DP array where dp[i][j] represents the maximum sum increasing subsequence
        // with the first i elements and the last element included at index j.
        let dp = new Array(n).fill(0).map(() => new Array(n + 1).fill(-1));

        // Call the recursive function with the initial index and previous index (-1).
        return this.recursive(0, -1, arr, dp);
    }
}
