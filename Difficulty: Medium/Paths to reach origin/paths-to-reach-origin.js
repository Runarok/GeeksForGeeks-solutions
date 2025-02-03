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
    let [n, m] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.ways(n, m);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

class Solution {
  /**
   * Function to find the number of ways to reach from (0, 0) to (x, y) on a grid,
   * moving only right or down at each step.
   * 
   * @param {number} x - The target row
   * @param {number} y - The target column
   * @returns {number} - The number of ways to reach (x, y)
   */
  ways(x, y) {
    // Validate input
    if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0) {
      return 0; // Return 0 if invalid input
    }

    // Create a 2D array for dynamic programming
    const dp = [];

    // Initialize the dp array
    for (let i = 0; i <= x; i++) {
      dp.push([]);
      for (let j = 0; j <= y; j++) {
        // If we're at the first row or first column, there's only one way (going right or down)
        if (i === 0 || j === 0) {
          dp[i].push(1);
        } else {
          // The number of ways to reach dp[i][j] is the sum of the ways to reach the cell above and the cell to the left
          dp[i].push((dp[i - 1][j] + dp[i][j - 1]) % 1000000007);
        }
      }
    }

    // Return the number of ways to reach the bottom-right corner (x, y)
    return dp[x][y];
  }
}
