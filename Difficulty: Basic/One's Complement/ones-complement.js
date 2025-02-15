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
    let obj = new Solution();
    let res = obj.onesComplement(N);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to compute the one's complement of an integer.
    onesComplement(N) {
        // Store the input number in a variable
        let inputNumber = N;
        
        // Initialize a variable to represent zero (for XOR operation)
        let referenceNumber = 0;
        
        // Determine the number of bits required to represent the input number
        let numberOfBits = Math.floor(Math.log2(Math.max(inputNumber, referenceNumber)));

        // Create a bit mask with all bits set to 1 up to the required number of bits
        let bitMask = (1 << numberOfBits) - 1;

        // Compute the one's complement by performing bitwise XNOR (inverted XOR)
        let onesComplementResult = ~(inputNumber ^ referenceNumber);
        
        // Apply the bit mask to ensure the result is within the expected bit length
        return onesComplementResult & bitMask;
    }
}
