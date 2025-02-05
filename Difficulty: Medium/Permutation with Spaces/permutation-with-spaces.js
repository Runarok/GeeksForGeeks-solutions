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
    let s = readLine().trim();
    let obj = new Solution();
    let res = obj.permutation(s);
    let op = "";
    for (let str of res) {
      op += `(${str})`;
    }
    console.log(op);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @return {string[]}
 */

class Solution {
  // Function to generate all permutations of the string with or without spaces between characters
  permutation(s) {
    let results = [];  // Array to store the final results of all permutations

    // Helper function to generate permutations recursively
    function solve(index, output = "") {
      // Base case: if index reaches the length of the string, add the output to results
      if (index === s.length) {
        results.push(output.trim()); // Ensure no leading or trailing spaces in the result
        return;
      }

      // Recursive case 1: Include current character with a space before it
      solve(index + 1, output + " " + s[index]);

      // Recursive case 2: Include current character without a space before it
      solve(index + 1, output + s[index]);
    }
    
    // Start the recursion with the first character of the string
    solve(1, s[0]); // The first character is already included in the initial output

    return results; // Return the list of all permutations
  }
}
