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
    let n = parseInt(readLine());
    let inputAr = readLine().split(" ").map((x) => parseInt(x));

    let stack = new SpecialStack(n);
    while(!stack.isEmpty()){
      stack.pop();
    }
    let i = 0;
    while(!stack.isFull()){
      stack.push(inputAr[i]);
      i++;
    }

    let res = stack.getMin();
    console.log(res);

  }
}
// } Driver Code Ends

// User function Template for JavaScript

class SpecialStack {
  constructor(n) {
    this.size = n; // Maximum size of the stack
    this.stack = []; // Main stack to store elements
    this.minStack = []; // Auxiliary stack to track minimum values
  }

  /** 
   * Push an element onto the stack.
   * If the stack is full, return -1.
   * Maintain a separate stack to track the minimum value.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.isFull()) return -1; // Check if the stack is full
    this.stack.push(x); // Push the element onto the main stack

    // If minStack is empty or x is the new minimum, push onto minStack
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  /**
   * Pop an element from the stack.
   * If the stack is empty, return -1.
   * Ensure that the minimum stack is also updated correctly.
   * @return {number}
   */
  pop() {
    if (this.isEmpty()) return -1; // Check if the stack is empty
    let temp = this.stack.pop(); // Remove the top element

    // If the popped element is the current minimum, remove it from minStack
    if (temp === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return temp;
  }

  /**
   * Check if the stack is full.
   * @return {boolean}
   */
  isFull() {
    return this.stack.length === this.size;
  }

  /**
   * Check if the stack is empty.
   * @return {boolean}
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Retrieve the minimum element in the stack.
   * This function runs in O(1) time.
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1]; // Return the top element of minStack
  }
}
