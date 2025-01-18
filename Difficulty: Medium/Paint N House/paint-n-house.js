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
    let r = readLine()
      .split(" ")
      .map((r) => parseInt(r));
    let g = readLine()
      .split(" ")
      .map((g) => parseInt(g));
    let b = readLine()
      .split(" ")
      .map((b) => parseInt(b));
    let obj = new Solution();
    let res = obj.distinctColoring(n, r, g, b);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number}
*/

class Solution {
    // Function to find the minimum cost to paint all N houses
    distinctColoring(N, r, g, b) {
        // Arrays to store the minimum cost up to each house with respective color
        let dpRed = new Array(N);
        let dpGreen = new Array(N);
        let dpBlue = new Array(N);

        // Initialize the first house
        dpRed[0] = r[0];
        dpGreen[0] = g[0];
        dpBlue[0] = b[0];

        // Fill the DP arrays for subsequent houses
        for (let i = 1; i < N; i++) {
            dpRed[i] = Math.min(dpGreen[i-1], dpBlue[i-1]) + r[i];
            dpGreen[i] = Math.min(dpRed[i-1], dpBlue[i-1]) + g[i];
            dpBlue[i] = Math.min(dpRed[i-1], dpGreen[i-1]) + b[i];
        }

        // The result will be the minimum cost to paint all houses
        return Math.min(dpRed[N-1], dpGreen[N-1], dpBlue[N-1]);
    }
}
