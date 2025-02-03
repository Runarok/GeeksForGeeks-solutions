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
    let target = parseInt(readLine());
    let obj = new Solution();
    let res = obj.findMirror(root, target);
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
 * @param {number} target
 * @return {number}
 */

class Solution {
    // Function to find the target's binary code representation
    findTar(root, k, dir) {
        if (!root) {
            return "";
        }
        
        // If we find the target, return the direction (binary path)
        if (root.data === k) {
            return dir;
        }
        
        // Search in the left subtree (append "0" to the path)
        let left = this.findTar(root.left, k, dir + "0");
        if (left !== "") {
            return left;
        }
        
        // Otherwise, search in the right subtree (append "1" to the path)
        return this.findTar(root.right, k, dir + "1");
    }
    
    // Function to follow the binary path and return the corresponding data
    find(root, d, i) {
        if (!root) {
            return -1;
        }
        
        // If we reach the end of the direction string, return the node data
        if (i === d.length) {
            return root.data;
        }
        
        // Follow the binary path, going to the left or right based on the direction
        if (d[i] === '0') {
            return this.find(root.right, d, i + 1);
        } else {
            return this.find(root.left, d, i + 1);
        }
    }

    // Function to find the mirror of a target node
    findMirror(root, target) {
        // Get the binary path of the target node
        let direction = this.findTar(root, target, "");

        // Use the path to find the mirror node's value
        return this.find(root, direction, 0);
    }
}
