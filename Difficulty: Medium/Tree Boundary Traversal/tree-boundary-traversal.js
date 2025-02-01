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
    constructor(data = null) {
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s_tree = readLine().trim().split(" ");
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.boundaryTraversal(root);
        let s = "";
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
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
 * @returns {number[]}
 */

class Solution {
    boundaryTraversal(root) {
        // Helper function to check if a node is a leaf
        const isLeaf = (node) => node.left === null && node.right === null;
        
        // If the root is null, return an empty array
        if (!root) {
            return [];
        }
        
        const res = [];
        
        // If root is not a leaf, add it to the result
        if (!isLeaf(root)) {
            res.push(root.data);
        }
        
        // 1. Left Boundary Traversal (excluding leaf nodes)
        const dfsLeft = (node) => {
            if (!node || isLeaf(node)) {
                return;
            }
            res.push(node.data);
            if (node.left) {
                dfsLeft(node.left);
            } else {
                dfsLeft(node.right);
            }
        };
        
        // Traverse the left boundary
        if (root.left) {
            dfsLeft(root.left);
        }
        
        // 2. Leaf Node Traversal
        const dfsLeaf = (node) => {
            if (!node) {
                return;
            }
            if (isLeaf(node)) {
                res.push(node.data);
            }
            dfsLeaf(node.left);
            dfsLeaf(node.right);
        };
        
        // Traverse all leaf nodes
        dfsLeaf(root);
        
        // 3. Right Boundary Traversal (excluding leaf nodes)
        const dfsRight = (node) => {
            if (!node || isLeaf(node)) {
                return;
            }
            if (node.right) {
                dfsRight(node.right);
            } else {
                dfsRight(node.left);
            }
            res.push(node.data);
        };
        
        // Traverse the right boundary
        if (root.right) {
            dfsRight(root.right);
        }
        
        return res;
    }
}
