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

        let res = obj.tiltTree(root);
        console.log(res);

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
  tiltTree(root) {
    // Define a variable to store the total tilt of the tree
    let totalTilt = 0;
    
    // Define a recursive function to calculate the tilt at each node and update the total tilt
    const calculateTilt = (node) => {
      if (!node) return 0; // Return 0 for null nodes (base case)
      
      // Recursively calculate the sum of the left and right subtrees
      const leftSum = calculateTilt(node.left);
      const rightSum = calculateTilt(node.right);
      
      // Calculate the tilt at the current node as the absolute difference between left and right subtree sums
      const tilt = Math.abs(leftSum - rightSum);
      
      // Add the current node's tilt to the total tilt
      totalTilt += tilt;
      
      // Return the sum of the current node's data plus the left and right subtree sums
      return node.data + leftSum + rightSum;
    };
    
    // Start the recursive tilt calculation from the root node
    calculateTilt(root);
    
    // Return the total tilt of the tree
    return totalTilt;
  }
}
