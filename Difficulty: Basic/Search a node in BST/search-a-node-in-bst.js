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
        let N = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let root = null;
        for (let i = 0; i < N; i++) {
            root = newNode(root, input_ar1[i]);
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        if (obj.search(root, x)) {
            console.log("1");
        } else {
            console.log("0");
        }
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Node} root
 * @param {number} x
 * @returns {boolean}
 */

class Solution {
    // Function to search a node in BST.
    search(root, x) {
        // If the tree is empty, return false
        if (root === null) return false;
        
        // Traverse the tree starting from the root
        while (root !== null) {
            // If the current node's data matches x, return true
            if (root.data === x) {
                return true;
            }
            
            // If the value of x is less than the current node, move left
            if (root.data > x) {
                root = root.left;
            } 
            // If the value of x is greater than the current node, move right
            else {
                root = root.right;
            }
        }
        
        // If we reach here, x is not in the tree, return false
        return false;
    }
}
