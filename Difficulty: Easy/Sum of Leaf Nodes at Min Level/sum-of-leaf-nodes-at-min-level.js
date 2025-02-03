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
    let res = obj.minLeafSum(root);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

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
  minLeafSum(root) {
    if (!root) return 0; // if the tree is empty, return 0

    let queue = [];
    queue.push(root);
    let leafSum = 0;
    let foundLeafLevel = false;

    // Perform BFS
    while (queue.length > 0) {
      let levelSize = queue.length;
      let levelLeafSum = 0;
      let isLeafAtThisLevel = false;

      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();

        // Check if it's a leaf node
        if (!node.left && !node.right) {
          isLeafAtThisLevel = true;
          levelLeafSum += node.data;
        }

        // Add children to the queue
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      // If we found leaf nodes at this level, we record the sum
      if (isLeafAtThisLevel) {
        if (!foundLeafLevel) {
          // The first time we encounter leaf nodes, initialize the sum
          leafSum = levelLeafSum;
          foundLeafLevel = true;
        }
      }

      // Stop if we've already found the first leaf level and we have summed the leaves
      if (foundLeafLevel) break;
    }

    return leafSum;
  }
}
