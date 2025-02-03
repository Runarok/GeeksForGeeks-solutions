//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

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

        obj.pairwiseSwap(root);
        s = "";
        inorder(root);
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

// Back-end complete function Template for javascript

class Solution {
  constructor() {
    this.count = 0;  // Initialize the count for tracking leaf nodes
  }

  // Function to initiate pairwise swap of leaf nodes in binary tree
  pairwiseSwap(root) {
    let a = new Node(0);  // Temporary node a to hold a leaf node
    let b = new Node(0);  // Temporary node b to hold another leaf node
    this.el(root, a, b);  // Start the recursive traversal
  }

  // Recursive function to traverse the tree and perform the pairwise swap on leaf nodes
  el(node, a, b) {
    if (node === null) return;  // Base case: if node is null, return

    // If it's a leaf node (both left and right are null)
    if (node.left === null && node.right === null) {
      this.count++;  // Increment the count for leaf nodes

      if (this.count % 2 === 0) {
        b.node = node;  // Set the second leaf node to b
        
        // Swap the data of the nodes a and b
        let temp = a.node.data;
        a.node.data = b.node.data;
        b.node.data = temp;
      } else {
        a.node = node;  // Set the first leaf node to a
      }
      return;
    }

    // Recursively process the left and right subtrees
    if (node.left !== null) this.el(node.left, a, b);
    if (node.right !== null) this.el(node.right, a, b);
  }
}
