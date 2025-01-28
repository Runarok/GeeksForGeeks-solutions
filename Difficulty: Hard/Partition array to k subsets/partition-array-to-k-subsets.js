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
        let a = [];
        let input_line = readLine().split(" ");
        let n = input_line.length;
        for (let j = 0; j < n; j++) a.push(parseInt(input_line[j]));
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isKPartitionPossible(a, k);
        if (res)
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    isKPartitionPossible(arr, k) {
        // Helper function for backtracking
        const canPartition = (startIndex, currentSum, count, targetSum, visited) => {
            // If we have formed k - 1 subsets, the remaining elements must form the last subset
            if (count === k - 1) {
                return true;
            }
            // If the current subset matches the target sum, move to the next subset
            if (currentSum === targetSum) {
                return canPartition(0, 0, count + 1, targetSum, visited);
            }
            // Try adding each unused element to the current subset
            for (let i = startIndex; i < arr.length; i++) {
                if (!visited[i] && currentSum + arr[i] <= targetSum) {
                    visited[i] = true;
                    if (canPartition(i + 1, currentSum + arr[i], count, targetSum, visited)) {
                        return true;
                    }
                    visited[i] = false; // Backtrack
                }
            }
            return false;
        };

        // Total sum of the array
        const totalSum = arr.reduce((sum, num) => sum + num, 0);
        // If totalSum is not divisible by k, we cannot partition the array
        if (totalSum % k !== 0) {
            return false;
        }
        const targetSum = totalSum / k;
        // Visited array to keep track of used elements
        const visited = new Array(arr.length).fill(false);
        // Start backtracking
        return canPartition(0, 0, 0, targetSum, visited);
    }
}
