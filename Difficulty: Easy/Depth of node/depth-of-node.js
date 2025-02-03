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
    let res = obj.depthOfOddLeaf(root);
    console.log(res);
  
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

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
    depthOfOddLeaf(root) {
        // Initialize an object to store the maximum depth of odd leaf nodes
        let ans = { maxDepth: 0 };
        
        // Perform DFS starting from root node at depth 1
        this.dfs(root, 1, ans);
        
        // Return the maximum depth of odd leaf nodes found
        return ans.maxDepth;
    }

    // Helper function to perform DFS traversal
    dfs(node, depth, ans) {
        if (!node) return;  // Base case: if node is null, return
        
        // If it's a leaf node (both left and right are null)
        if (!node.left && !node.right) {
            // If the depth is odd, update the maximum depth
            if (depth % 2 === 1) {
                ans.maxDepth = Math.max(ans.maxDepth, depth);
            }
        }
        
        // Recur for left and right children
        this.dfs(node.left, depth + 1, ans);
        this.dfs(node.right, depth + 1, ans);
    }
}
