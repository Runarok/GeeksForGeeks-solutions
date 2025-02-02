//{ Driver Code Starts
// Initial Template for javascript

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
        if (obj.isComplete(root)) {
            console.log("true");
        } else {
            console.log("false");
        }
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

    // Function to check whether a binary tree is complete or not.
    isComplete(root) {
        // Get the height of the tree
        const height = this.getHeight(root);
        const queue = [root];
        let level = 1;
        let nextNodesNull = false;  // Flag to indicate if any null node is encountered
        
        while(queue.length > 0 && level <= height) {
            const length = queue.length;
            for (let i = 0; i < length; i++) {
                const node = queue.shift();
                
                if (node === null) {
                    if (level !== height) {
                        return false;  // If a null node is encountered before the last level
                    } else {
                        nextNodesNull = true;  // Set flag if null node is encountered at last level
                    }
                } else {
                    if (nextNodesNull) {
                        return false;  // If a non-null node is found after a null node
                    }
                    queue.push(node.left);  // Push left child to the queue
                    queue.push(node.right);  // Push right child to the queue
                }
            }
            level++;
        }
        return true;  // If the tree is complete
    }
    
    // Function to calculate the height of the tree
    getHeight(root) {
        if (root === null) {
            return 0;  // Height of an empty tree is 0
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));  // Recursively calculate height
    }
}
