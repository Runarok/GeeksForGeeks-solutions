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
    let [x1, y1, x2, y2] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.distance(x1, y1, x2, y2);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} x1 - X-coordinate of the first point
 * @param {number} y1 - Y-coordinate of the first point
 * @param {number} x2 - X-coordinate of the second point
 * @param {number} y2 - Y-coordinate of the second point
 * @return {number} - Rounded distance between the two points
 */
class Solution {
  distance(x1, y1, x2, y2) {
    // Calculate the squared differences
    let dx = x2 - x1;
    let dy = y2 - y1;

    // Compute the Euclidean distance and round to the nearest integer
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
}
