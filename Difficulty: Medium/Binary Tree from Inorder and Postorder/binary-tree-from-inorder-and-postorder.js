//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

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

function preOrder(root, res) {
    if (root === null) return;
    res.push(root.data);
    preOrder(root.left, res);
    preOrder(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length
        let ino = [];
        let post = [];
        for (let i = 0; i < n; i++) {
            ino.push(input_ar1[i]);
            post.push(input_ar2[i]);
        }
        let obj = new Solution();
        let root = obj.buildTree(ino, post);
        let res = [];
        preOrder(root, res);
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
 * @param {number[]} in_order - The inorder traversal of the tree.
 * @param {number[]} post_order - The postorder traversal of the tree.
 * @returns {TreeNode} - The root node of the reconstructed tree.
 */

class Solution {
    /**
     * Constructs a binary tree using inorder and postorder traversals.
     * @param {number[]} in_order - The inorder traversal of the tree.
     * @param {number[]} post_order - The postorder traversal of the tree.
     * @returns {TreeNode} - The root of the reconstructed binary tree.
     */
    buildTree(in_order, post_order) {
        // Base case: if either traversal array is empty, return null
        if (!in_order.length || !post_order.length) {
            return null;
        }
        
        // The last element in postorder traversal is always the root of the tree
        const rootValue = post_order[post_order.length - 1];
        const rootIndex = in_order.indexOf(rootValue); // Find root's position in inorder traversal
        
        // Create the root node
        const root = new Node(rootValue);
        
        // Divide inorder array into left and right subtrees
        const leftInorder = in_order.slice(0, rootIndex);
        const rightInorder = in_order.slice(rootIndex + 1);
        
        // Divide postorder array into left and right subtrees
        const leftPostorder = post_order.slice(0, leftInorder.length);
        const rightPostorder = post_order.slice(leftInorder.length, post_order.length - 1);
        
        // Recursively build the left and right subtrees
        root.left = this.buildTree(leftInorder, leftPostorder);
        root.right = this.buildTree(rightInorder, rightPostorder);
        
        return root; // Return the constructed tree
    }
}
