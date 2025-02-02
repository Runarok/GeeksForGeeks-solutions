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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let x = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.findCeil(root, x));
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @param {number} input
 * @returns {number}
*/

class Solution {
    // Function to return the ceil of the given number in BST.
    findCeil(root, input) {
        let ceil = -1;

        // Traverse the BST
        while (root !== null) {
            // If the current node's value is equal to input, return the value
            if (root.data === input) {
                return root.data;
            }
            
            // If the current node's value is greater than the input,
            // this could be the ceil, but we continue searching in the left subtree
            if (root.data > input) {
                ceil = root.data; // update ceil to the current node's value
                root = root.left; // move to the left subtree
            } else {
                // If the current node's value is less than input,
                // the ceil must be in the right subtree
                root = root.right;
            }
        }

        // If we exit the loop without finding a ceil, return -1
        return ceil;
    }
}
