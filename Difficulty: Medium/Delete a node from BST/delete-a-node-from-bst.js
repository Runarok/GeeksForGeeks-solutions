//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

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

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
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

function inorderUtil(root, res) {
    if (root === null) return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let k = parseInt(readLine());
        let obj = new Solution();
        root = obj.deleteNode(root, k);
        let res = [];
        if(root)
            inorderUtil(root, res);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Node} root
 * @param {number} x
 * @returns {Node}
 */

class Solution {
    // Function to delete a node from BST.
    deleteNode(root, x) {
        // Base case: if root is null, return null
        if (!root) {
            return null;
        }

        // If the value to delete is smaller than the root's data, it lies in the left subtree
        if (root.data > x) {
            root.left = this.deleteNode(root.left, x);
        }
        // If the value to delete is larger, it lies in the right subtree
        else if (root.data < x) {
            root.right = this.deleteNode(root.right, x);
        }
        // If the value is equal to the root's data, this is the node to delete
        else {
            // If the node has only one child or no child
            if (!root.left) {
                return root.right;  // Return the right child
            } else if (!root.right) {
                return root.left;   // Return the left child
            }
            // If the node has two children, get the inorder successor (smallest in the right subtree)
            let temp = this.findrightnode(root.right);
            root.data = temp.data;  // Replace root's data with the inorder successor's data
            root.right = this.deleteNode(root.right, temp.data);  // Delete the inorder successor
        }

        return root;  // Return the modified tree
    }

    // Function to find the leftmost (smallest) node in a given subtree
    findrightnode(node) {
        let curr = node;
        // Traverse to the leftmost node
        while (curr.left) {
            curr = curr.left;
        }
        return curr;  // Return the leftmost node
    }
}
