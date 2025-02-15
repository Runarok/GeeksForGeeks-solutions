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
    if (arr[i] == -0) arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let s = "";
    let arr = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let ob = new Solution();
    let queue = ob._push(arr, n);
    ob._pop(queue);
  
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
  /**
   * @param {number[]} arr
   * @param {number} n
   * @return {number[]}
   */
  _push(arr, n) {
    // Initialize an empty queue (array)
    let queue = [];
    
    // Insert all elements of arr into the queue
    for (let i = 0; i < n; i++) {
      queue.push(arr[i]);
    }

    // Return the filled queue
    return queue;
  }

  /**
   * @param {number[]} queue
   */
  _pop(queue) {
    // Initialize an array to store dequeued elements
    let dequeuedElements = [];

    // Dequeue elements one by one and store them
    while (queue.length > 0) {
      dequeuedElements.push(queue.shift());
    }

    // Print the dequeued elements space-separated
    console.log(dequeuedElements.join(" "));
  }
}
