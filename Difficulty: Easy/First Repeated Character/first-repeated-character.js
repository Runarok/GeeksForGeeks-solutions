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
    let s = readLine();
    let obj = new Solution();
    let res = obj.firstRepChar(s);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  firstRepChar(s) {
    // Create a set to track characters that have been seen
    let seen = new Set();
    
    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
      // If the character has already been seen, return it
      if (seen.has(s[i])) {
        return s[i];
      }
      // Otherwise, add the character to the set
      seen.add(s[i]);
    }
    
    // If no repeated character is found, return "-1"
    return "-1";
  }
}
