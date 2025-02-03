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

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(str) {
  // Corner Case
  if (str.length === 0 || str[0] === "N") return null;

  // Create the root of the tree
  let root = new Node(parseInt(str[0]));

  // Push the root to the queue
  let queue = [];
  let start = 0;
  queue.push(root);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < str.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the string
    let currVal = str[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.left);
    }

    // For the right child
    i++;
    if (i >= str.length) break;
    currVal = str[i];

    // If the right child is not null
    if (currVal !== "N") {
      // Create the right child for the current node
      currNode.right = new Node(parseInt(currVal));

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return root;
}

let s = "";
function inorder(root) {
  if (root === null) return;
  inorder(root.left);
  s = s + root.data + " ";
  inorder(root.right);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s_tree = readLine().trim().split(" ");
    let root = buildTree(s_tree);
    let obj = new Solution();
    let mx = obj.findMax(root);
    let mn = obj.findMin(root);
    console.log(mx + " " + mn);
  
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */

class Solution {
  // Function to find the maximum value in the tree
  findMax(root) {
    // Call the helper function to find the maximum value
    return this.findTreeMax(root, root.data);
  }
  
  // Function to find the minimum value in the tree
  findMin(root) {
    // Call the helper function to find the minimum value
    return this.findTreeMin(root, root.data);
  }
  
  // Helper function to find the maximum value in the tree
  findTreeMax(node, max) {
      if (node === null) {
          return max;  // Return the maximum found so far
      }
      if (node.data > max) {
          max = node.data;  // Update max if the current node's data is greater
      }
      // Recur for left and right children
      max = this.findTreeMax(node.left, max);
      max = this.findTreeMax(node.right, max);
      return max;  // Return the maximum value found
  }
  
  // Helper function to find the minimum value in the tree
  findTreeMin(node, min) {
      if (node === null) {
          return min;  // Return the minimum found so far
      }
      if (node.data < min) {
          min = node.data;  // Update min if the current node's data is smaller
      }
      // Recur for left and right children
      min = this.findTreeMin(node.left, min);
      min = this.findTreeMin(node.right, min);
      return min;  // Return the minimum value found
  }
}
