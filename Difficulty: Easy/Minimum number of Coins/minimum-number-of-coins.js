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
function printArray(arr) {
  let s = "";
  for (let i of arr) {
    s = s + i + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let obj = new Solution();
    let res = obj.minPartition(n);
    printArray(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number[]}
 */

class Solution {
    minPartition(N) {
        // Denominations in decreasing order
        const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        
        // Result array to store the denominations used
        let result = [];
        
        // Traverse through all denominations
        for (let i = 0; i < denominations.length; i++) {
            // Find how many notes/coins of current denomination can fit in N
            while (N >= denominations[i]) {
                result.push(denominations[i]);
                N -= denominations[i];  // Subtract the denomination from N
            }
        }
        
        return result;  // Return the result array containing the denominations used
    }
}
