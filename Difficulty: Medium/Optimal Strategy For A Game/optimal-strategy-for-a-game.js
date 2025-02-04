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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        input_line = readLine().split(' ');
        let arr = new Array(n);
        for (let i = 0; i < n; i++) arr[i] = parseInt(input_line[i]);

        let obj = new Solution();
        let ans = obj.maximumAmount(arr);
        if (ans == -0n) ans = 0n;
        console.log(ans.toString());

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Helper function to solve the problem recursively with memoization
    solve(arr, i, j, dp) {
        // Base case: only one coin to pick
        if (i === j) {
            return arr[i];
        }
        
        // Base case: two coins, pick the maximum
        if (i + 1 === j) {
            return Math.max(arr[i], arr[j]);
        }

        // If already computed, return the stored result
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        // Choose the ith coin and minimize opponent's choice
        const chooseI = arr[i] + Math.min(
            this.solve(arr, i + 2, j, dp), // Opponent picks i+1 next
            this.solve(arr, i + 1, j - 1, dp) // Opponent picks j next
        );

        // Choose the jth coin and minimize opponent's choice
        const chooseJ = arr[j] + Math.min(
            this.solve(arr, i, j - 2, dp), // Opponent picks j-1 next
            this.solve(arr, i + 1, j - 1, dp) // Opponent picks i next
        );

        // Store the result in dp table and return the maximum value
        dp[i][j] = Math.max(chooseI, chooseJ);
        return dp[i][j];
    }

    // Main function to initiate the recursive solution
    maximumAmount(arr) {
        const n = arr.length;

        // Initialize dp array to store intermediate results
        const dp = Array.from({ length: n }, () => Array(n).fill(-1));

        // Start solving from the full array
        return this.solve(arr, 0, n - 1, dp);
    }
}
