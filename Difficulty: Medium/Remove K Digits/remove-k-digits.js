//{ Driver Code Starts
// your code goes here
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
        let s = readLine();
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.removeKdigits(s, k);
        console.log(res);
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */

class Solution {
    removeKdigits(s, k) {
        // Initialize an empty stack to store digits
        let myStack = [];
        
        // Iterate over each digit in the string
        for (let i = 0; i < s.length; i++) {
            let current = s[i];
            
            // While the current digit is smaller than the top of the stack
            // and we still have digits to remove (k > 0)
            while (k > 0 && myStack.length && myStack[myStack.length - 1] > current) {
                myStack.pop();  // Remove the larger digit from the stack
                k--;  // Decrease k (one digit is removed)
            }

            // Push the current digit onto the stack
            myStack.push(current);
        }

        // If we still have digits to remove, pop the remaining digits from the stack
        for (let j = k; j > 0; j--) {
            myStack.pop();
        }

        // Join the stack and remove leading zeros, if any
        // If the result is empty, return "0"
        return myStack.join('').replace(/^0+/, "") || "0";
    }
}
