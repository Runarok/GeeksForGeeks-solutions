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
    let res = obj.isSame(s);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */
class Solution {
  isSame(s) {
    // Helper function to convert a character to its digit value if it's a digit, otherwise return null
    let digitValue = (s, i) => {
      let ch = s[i];
      if (ch >= "0" && ch <= "9") {
        return s.charCodeAt(i) - "0".charCodeAt(0); // Convert char to number
      } else {
        return null; // Return null for non-digit characters
      }
    };
    
    var num = 0;
    var pow = 1;
    var lastNonDigitIndex = s.length - 1;
    
    // Loop through the string from the end to the beginning
    while (lastNonDigitIndex >= 0) {
      let digit = digitValue(s, lastNonDigitIndex);
      if (digit !== null) {
        num = digit * pow + num; // Build the number from the digits
        pow *= 10; // Increase the power of 10 for the next digit
      } else {
        break; // Stop if a non-digit character is encountered
      }
      lastNonDigitIndex--; // Move to the previous character
    }

    // Check if the substring up to the last non-digit index equals the number formed from the digits
    return lastNonDigitIndex + 1 === num ? 1 : 0;
  }
}
