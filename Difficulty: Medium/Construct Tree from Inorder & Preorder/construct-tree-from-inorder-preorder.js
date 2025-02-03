//{ Driver Code Starts
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
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

let s = "";

function postOrder(root) {
    if (!root) return;

    postOrder(root.left);
    postOrder(root.right);
    s = s + root.key + " ";
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        // Read inorder and preorder arrays
        let inorder = readLine().split(" ").map((x) => parseInt(x));
        let preorder = readLine().split(" ").map((x) => parseInt(x));

        // Create an instance of Solution
        let obj = new Solution();
        // Build the tree
        let root = obj.buildTree(inorder, preorder);

        // Output post-order traversal
        s = "";
        postOrder(root);
        console.log(s.trim());
    }
}

// } Driver Code Ends


// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {Node}
 */

class Solution {
    // Function to build the binary tree from inorder and preorder traversals
    buildTree(inorder, preorder) {
        // Return null if either of the traversals is empty
        if (inorder.length === 0 || preorder.length === 0) {
            return null;
        }

        // The first element in preorder is the root node
        const root = new Node(preorder[0]);

        // Find the root node in inorder to split left and right subtrees
        const mid = inorder.indexOf(preorder[0]);

        // Recursively build the left and right subtrees
        root.left = this.buildTree(inorder.slice(0, mid), preorder.slice(1, mid + 1));
        root.right = this.buildTree(inorder.slice(mid + 1), preorder.slice(mid + 1));

        return root;
    }

    // Function to return postorder traversal of the tree
    postorder(root) {
        if (root === null) {
            return [];
        }
        // Traverse left subtree, right subtree, then root node
        return [...this.postorder(root.left), ...this.postorder(root.right), root.data];
    }
}
