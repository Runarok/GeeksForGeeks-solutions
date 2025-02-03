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
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.getCount(root, k);
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
 * @param {number} k
 * @return {number}
 */

class Solution {
  getCount(root, k) {
    // Initialize a queue for level-order traversal
    let nodeQueue = [root];
    
    // Variables to keep track of count, total cost, and current level
    let leafNodeCount = 0, totalCost = 0, currentLevel = 1;
    
    // Outer loop to traverse the tree level by level
    traversalLoop: while (nodeQueue.length) {
        let levelSize = nodeQueue.length; // Number of nodes at the current level
        
        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let currentNode = nodeQueue.shift(); // Dequeue the front node
            
            // If it's a leaf node, calculate cost and check budget
            if (currentNode.left === null && currentNode.right === null) {
                totalCost += currentLevel;
                if (totalCost <= k) {
                    leafNodeCount++; // Increment count if within budget
                } else {
                    break traversalLoop; // Stop if budget exceeded
                }
            }
            
            // Enqueue left and right children if they exist
            if (currentNode.left) {
                nodeQueue.push(currentNode.left);
            }
            if (currentNode.right) {
                nodeQueue.push(currentNode.right);
            }
        }
        
        // Move to the next level
        currentLevel++;
    }
    
    return leafNodeCount;
  }
}
