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
        if (obj.isHeap(root)) {
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
    isHeap(root) {
        // Helper function to check if the tree is a heap
        const check = (node, max) => {
            if (node === null) {
                return true;  // Base case: if node is null, it's considered valid
            }

            // If right child exists but left does not, it's not a valid heap
            if (node.right !== null && node.left === null) {
                return false;
            }

            // Check recursively for left and right subtrees, ensuring heap property is maintained
            const l = check(node.left, node.data);
            const r = check(node.right, node.data);

            // Ensure current node's data is smaller than the max value so far
            if (l && r && node.data <= max) {
                return true;
            }
            return false;  // Return false if any condition fails
        }

        // Start the check with the root and the largest possible number for max
        return check(root, Number.MAX_SAFE_INTEGER);
    }
}
