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

    let res = obj.isPerfect(root);
    console.log(res ? "YES" : "NO");
  
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
 * @return {boolean}
 */

class Solution {
  isPerfect(root) {
    // If the root is null, it's considered a perfect tree (empty tree).
    if (root === null) {
        return true;
    }
    // Find the depth of the tree from the leftmost node
    let depth = this.findDepth(root);
    // Check if the tree is perfect recursively
    return this.isPerfectRec(root, depth, 0);
  }

  isPerfectRec(node, depth, level) {
    // If node is null, it's considered perfect at that level
    if (node === null) {
        return true;
    }

    // If it's a leaf node, check if it's at the correct level
    if (node.left === null && node.right === null) {
        return (depth === level + 1);
    }

    // If only one child exists, it's not perfect
    if (node.left === null || node.right === null) {
        return false;
    }

    // Recursively check both subtrees
    return this.isPerfectRec(node.left, depth, level + 1) &&
           this.isPerfectRec(node.right, depth, level + 1);
  }

  findDepth(node) {
    let depth = 0;
    // Traverse down the leftmost path to calculate the depth
    while (node !== null) {
        depth++;
        node = node.left;
    }
    return depth;
  }
}
