//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.is1winner(N,arr);
    console.log(Number(res));
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - Number of elements in the array
 * @param {number[]} arr - Array of numbers
 * @return {boolean} - Returns 1 if player 1 can win, otherwise 0
 */

class Solution {
  is1winner(N, arr) {
    // Initialize a 2D DP array with -1 to mark uncomputed states
    let dp = new Array(N + 1).fill().map(() => new Array(N + 1).fill(-1));

    // Calculate the maximum score player 1 can achieve using optimal moves
    let player1Score = this.solve(0, N - 1, arr, dp);

    // Compute the total sum of the array
    let totalSum = arr.reduce((sum, num) => sum + num, 0);

    // Calculate the remaining score for player 2
    let player2Score = totalSum - player1Score;

    // Player 1 wins if their score is at least as much as Player 2's
    return player1Score >= player2Score ? 1 : 0;
  }

  solve(start, end, arr, dp) {
    // If the start index exceeds the end index, return 0 (invalid state)
    if (start > end) {
      return 0;
    }

    // If the value is already computed, return it from the DP table
    if (dp[start][end] !== -1) {
      return dp[start][end];
    }

    // Case 1: Pick the leftmost element and force the opponent into the worst situation
    let pickLeft =
      arr[start] +
      Math.min(
        this.solve(start + 2, end, arr, dp), // Opponent picks start+1
        this.solve(start + 1, end - 1, arr, dp) // Opponent picks end
      );

    // Case 2: Pick the rightmost element and force the opponent into the worst situation
    let pickRight =
      arr[end] +
      Math.min(
        this.solve(start, end - 2, arr, dp), // Opponent picks end-1
        this.solve(start + 1, end - 1, arr, dp) // Opponent picks start
      );

    // Store and return the maximum score player 1 can achieve from this range
    dp[start][end] = Math.max(pickLeft, pickRight);
    return dp[start][end];
  }
}
