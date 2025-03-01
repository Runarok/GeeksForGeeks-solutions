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
    let obj = new Solution();
    let res = obj.maxStairHeight(N);
    console.log(res);
  
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
  maxStairHeight(N) {
    // The formula to find the maximum stair height is derived from the triangular number series.
    // The equation used here is derived from solving the quadratic equation for the sum of first k natural numbers.
    // We calculate the maximum height using the formula: floor((sqrt(1 + 8*N) - 1) / 2)
    
    return Math.floor((Math.sqrt(1 + 8 * N) - 1) / 2);
  }
}
