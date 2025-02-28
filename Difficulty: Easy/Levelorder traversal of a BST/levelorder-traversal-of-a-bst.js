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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let sizeOfArray = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let root = null;
        for (let i = 0; i < sizeOfArray; i++) {
            root = newNode(root, input_ar1[i]);
        }
        let obj = new Solution();
        let res = obj.levelOrder(root);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @returns {number[]}
*/

class Solution {
    /**
     * Function to return the level order traversal of a Binary Search Tree (BST)
     * @param {Node} root - The root node of the BST
     * @returns {number[]} - An array of node values in level order
     */
    levelOrder(root) {
        if (!root) return []; // If the tree is empty, return an empty array

        let result = []; // Array to store the level order traversal
        let queue = [root]; // Queue to manage nodes for level order traversal

        while (queue.length > 0) {
            let node = queue.shift(); // Dequeue the first node
            result.push(node.data); // Add node value to result

            // If left child exists, enqueue it
            if (node.left) {
                queue.push(node.left);
            }

            // If right child exists, enqueue it
            if (node.right) {
                queue.push(node.right);
            }
        }

        return result; // Return the level order traversal
    }
}
