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
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.findSpiral(root);
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
    // Function to find the spiral order traversal of the binary tree.
    findSpiral(root) {
        if (!root) return [];

        let stack1 = [root];
        let stack2 = [];
        let res = [];

        while (stack1.length || stack2.length) {
            // Traverse nodes from stack1 (left to right)
            while (stack1.length) {
                let node = stack1.pop();
                res.push(node.data);

                // Push right and left children to stack2
                if (node.right) stack2.push(node.right);
                if (node.left) stack2.push(node.left);
            }

            // Traverse nodes from stack2 (right to left)
            while (stack2.length) {
                let node = stack2.pop();
                res.push(node.data);

                // Push left and right children to stack1
                if (node.left) stack1.push(node.left);
                if (node.right) stack1.push(node.right);
            }
        }

        return res;
    }
}
