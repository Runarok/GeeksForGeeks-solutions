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
    let res = obj.countSubstringWithEqualEnds(s);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

class Solution {
  /**
   * Function to count the number of substrings with equal start and end characters.
   * @param {string} s the input string.
   * @return {number} the count of substrings with equal start and end characters.
   */
  countSubstringWithEqualEnds(s) {
    let count = 0;
    // Initialize an array to store frequency of each character.
    let freq = new Array(26).fill(0);
    
    // Count the frequency of each character in the string.
    for (let i = 0; i < s.length; i++) {
        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // For each character, calculate the number of substrings that can be formed.
    for (let i = 0; i < 26; i++) {
        count += (freq[i] * (freq[i] + 1)) / 2; // This formula is derived from combinations logic.
    }

    return count;
  }
}
