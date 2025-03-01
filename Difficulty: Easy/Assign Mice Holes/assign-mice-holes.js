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
    let M = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let H = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.assignMiceHoles(N, M, H);
    console.log(res);
  }
}
// } Driver Code Ends

//User function Template for JavaScript

/**
 * @param {number} N - Number of mice and holes (both are equal).
 * @param {number[]} M - Array representing the positions of the mice.
 * @param {number[]} H - Array representing the positions of the holes.
 * @return {number} - Minimum time required for all mice to occupy holes.
 */
class Solution {
  assignMiceHoles(N, micePositions, holePositions) {
    // Sort both arrays to pair the nearest mouse to the nearest hole.
    let sortedMice = micePositions.sort((mouseA, mouseB) => mouseA - mouseB);
    let sortedHoles = holePositions.sort((holeA, holeB) => holeA - holeB);

    // Initialize maximum time required.
    let maxTimeRequired = 0;

    // Compare each mouse position with the corresponding hole position.
    for (let index = 0; index < N; index++) {
      // Calculate time taken for this mouse to reach its assigned hole.
      let timeToHole = Math.abs(sortedMice[index] - sortedHoles[index]);
      // Update maximum time if needed.
      maxTimeRequired = Math.max(maxTimeRequired, timeToHole);
    }

    // Return the maximum time any mouse requires to reach its hole.
    return maxTimeRequired;
  }
}
