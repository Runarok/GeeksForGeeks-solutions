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
    let S = readLine().trim();
    let obj = new Solution();
    let res = obj.LargestEven(S);
    console.log(res);
  }
}
// } Driver Code Ends

class Solution {
  LargestEven(S) {
    // Initialize an array to count digits
    const arr = Array(10).fill(0);
    
    // Count frequency of each digit
    for (const x of S) arr[parseInt(x)]++;
    
    // Find the largest even digit to place at the end
    let last = "";
    for (let i = 0; i < 9; i += 2) {
      if (arr[i] > 0) {
        last = i;
        arr[i]--;
        break;
      }
    }
    
    // Build the result by adding the digits in descending order
    let res = "";
    for (let i = 9; i >= 0; i--) {
      res += i.toString().repeat(arr[i]);
    }
    
    // Add the last even digit and return the result
    return res + last;
  }
}
