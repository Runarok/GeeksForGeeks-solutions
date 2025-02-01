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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);

        // Read l and h from two separate lines
        let l = parseInt(readLine());
        let h = parseInt(readLine());

        let obj = new Solution();
        let res = obj.LCA(root, l, h);
        console.log(res.data);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root - The root node of the binary search tree (BST)
 * @param {number} n1 - The first node value
 * @param {number} n2 - The second node value
 * @returns {Node} - The lowest common ancestor (LCA) node of n1 and n2
 */

class Solution {
    // Function to find the Lowest Common Ancestor (LCA) of two nodes in a BST
    LCA(root, n1, n2) {
        // Base case: if root is null, there is no LCA
        if (root === null) return null;

        // If both n1 and n2 are smaller than the root, the LCA lies in the left subtree
        if (root.data > n1 && root.data > n2) {
            return this.LCA(root.left, n1, n2);
        }

        // If both n1 and n2 are greater than the root, the LCA lies in the right subtree
        if (root.data < n1 && root.data < n2) {
            return this.LCA(root.right, n1, n2);
        }

        // If n1 and n2 are on opposite sides (or one of them is equal to root), the root is the LCA
        return root;
    }
}
