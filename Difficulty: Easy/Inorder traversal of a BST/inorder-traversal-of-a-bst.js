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
        let res = obj.inOrder(root);
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
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
    // Function to return a list containing the inorder traversal of the BST.
    inOrder(root, res = []) {
        // Check if the root is not null
        if (root !== null) {
            // Recursively call for the left subtree
            this.inOrder(root.left, res);
            
            // Add the root's data to the result list
            res.push(root.data);
            
            // Recursively call for the right subtree
            this.inOrder(root.right, res);
        }
        
        // Return the result list containing the inorder traversal
        return res;
    }
}
