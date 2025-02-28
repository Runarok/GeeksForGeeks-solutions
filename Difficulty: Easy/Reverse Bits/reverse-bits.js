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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input1 = readLine().split(" ").map((x)=>parseInt(x));
    let N = input1[0];
    let obj = new Solution();
    let res = obj.reverseBits(N);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */

class Solution {
    reverseBits(N) {
        // Convert the number to a binary string
        let binary = N.toString(2);
        
        // Reverse the binary string
        let reverse = binary.split('').reverse().join('');
        
        // Convert the reversed binary string back to a decimal number
        let deci = parseInt(reverse, 2);
        
        // Return the decimal value of the reversed binary
        return deci;
    }
}
