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
    let res = obj.removeCharacters(s);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

class Solution {
  /**
   * Function to remove non-numeric characters from the input string
   * 
   * @param {string} s - The input string
   * @return {string} - A new string containing only the numeric characters
   */
  removeCharacters(s) {
    // Initialize an empty string to store the numeric characters
    let ans = "";

    // Loop through each character in the input string
    for (let i = 0; i < s.length; i++) {
      // Check if the current character is a digit
      if (s[i] >= '0' && s[i] <= '9') {
        // If it is, append it to the result string
        ans += s[i];
      }   
    }

    // Return the result string containing only numeric characters
    return ans;
  }
}
