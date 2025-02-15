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
    let n = parseInt(readLine());
    let obj = new Solution();
    let res = obj.sumOfTheSeries(n);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    // Function to calculate the sum of the series 1^2 + 2^2 + ... + n^2
    sumOfTheSeries(n) {
        return (n * (n + 1) * (2 * n + 1)) / 6; // Using the mathematical formula for sum of squares
    }
}
