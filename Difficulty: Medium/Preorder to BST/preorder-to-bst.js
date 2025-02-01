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

function postorderUtil(root, res) {
    if (root === null) return;
    postorderUtil(root.left, res);
    postorderUtil(root.right, res);
    res.push(root.data);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(input_ar1[i]);
        }
        let obj = new Solution();
        let root = obj.Bst(arr, n);
        let res = [];
        postorderUtil(root, res);
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
 * @param {number[]} preorder
 * @param {number} length
 * @returns {Node}
 */

class Solution {
    construct(preorder, lowerBound, upperBound, indexRef) {
        // Base case: if index exceeds array length
        if (indexRef.idx >= preorder.length) return null;

        // Current value of the node
        let value = preorder[indexRef.idx];

        // Check if the current value is within bounds
        if (value < lowerBound || value > upperBound) return null;

        // Create the current node and increment the index
        let node = new Node(value);
        indexRef.idx++;

        // Recursively construct the left and right subtrees
        node.left = this.construct(preorder, lowerBound, value, indexRef);
        node.right = this.construct(preorder, value, upperBound, indexRef);

        return node;
    }

    Bst(preorder, length) {
        let indexRef = { idx: 0 }; // Encapsulate index in an object to pass by reference
        return this.construct(preorder, -Infinity, Infinity, indexRef);
    }
}
