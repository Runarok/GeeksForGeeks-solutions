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
        let obj = new Solution();
        // Print "true" or "false" based on the result
        console.log(obj.isBalanced(root) ? "true" : "false");
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @returns {boolean}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to check whether a binary tree is balanced or not.
    isBalanced(root) {
        // Helper function to calculate height and check balance
        function checkHeight(node) {
            // If the node is null, it's balanced with height 0
            if (!node) return 0;

            // Recursively check the height of the left subtree
            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // If left subtree is unbalanced, propagate -1

            // Recursively check the height of the right subtree
            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // If right subtree is unbalanced, propagate -1

            // If the current node is unbalanced, return -1
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            // Return the height of the current node
            return Math.max(leftHeight, rightHeight) + 1;
        }

        // The result of checkHeight will be -1 if the tree is unbalanced
        return checkHeight(root) !== -1;
    }
}
