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
    let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
    let a = input_ar0[0];
    let b = input_ar0[1];
    let x = input_ar0[2];
    let obj = new Solution();
    let ans = obj.canReach(a,b,x);
    console.log(ans);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Number} a - x-coordinate of the target point
 * @param {Number} b - y-coordinate of the target point
 * @param {Number} x - maximum number of allowed moves
 * @returns {Number} - 1 if the point (a, b) is reachable within x moves, otherwise 0
 */

class Solution {
    canReach(a, b, x) {
        // Calculate the minimum number of steps required to reach (a, b)
        let s = Math.abs(a) + Math.abs(b);
        
        // Check if the number of required steps and x have the same parity (both even or both odd)
        // and if x is at least as large as s
        if ((s % 2 === 0 && x % 2 === 0 && x >= s) || (s % 2 === 1 && x % 2 === 1 && x >= s)) {
            return 1; // Reachable
        } else {
            return 0; // Not reachable
        }
    }
}

