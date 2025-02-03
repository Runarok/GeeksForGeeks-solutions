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
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.leftSmaller(arr, n);
    printArray(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
class Solution {
  leftSmaller(arr, n) {
    // code here
    let result = [];  // Array to store the nearest smaller element for each index
    let stack = [];  // Stack to keep track of elements in the array while processing

    // Traverse the array
    for (let i = 0; i < n; i++) {
        // Pop elements from stack until we find one smaller than the current element
        while (stack.length && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }

        // If the stack is empty, no smaller element found, so assign -1
        if (!stack.length) result[i] = -1;
        else result[i] = stack[stack.length - 1];  // The top of the stack is the nearest smaller element

        stack.push(arr[i]);  // Push the current element onto the stack for future comparison
    }

    return result;  // Return the result array
  }
}
