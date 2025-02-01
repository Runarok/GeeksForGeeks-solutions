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
    if(arr[i] == -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input = readLine().split(" ").map((x)=>parseInt(x));
    for(let j = 0;j<n;j++) arr[j] = input[j];
    let obj = new Solution();
    let res = obj.minxorpair(arr,n);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    minxorpair(arr, n) {
        // If there are fewer than two elements, return -1 as no pair can be formed
        if (n < 2) return -1;
        
        // Sort the array to minimize the XOR between adjacent elements
        arr.sort((a, b) => a - b);
        
        let minXor = Infinity;  // Start with the highest possible value
        
        // Iterate through the array and calculate XOR for adjacent elements
        for (let i = 0; i < n - 1; i++) {
            const xorValue = arr[i] ^ arr[i + 1];  // XOR of adjacent elements
            if (xorValue < minXor) minXor = xorValue;  // Update if a smaller XOR is found
        }
        
        return minXor;  // Return the smallest XOR value found
    }
}
