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
        let s_tree = readLine().trim().split(" ");
        let x = parseInt(readLine());
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.findMaxFork(root, x);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
    findMaxFork(root, k) {
        // Array to store the nodes that satisfy the condition
        let res = [];

        // Recursive function to traverse the tree and find valid nodes
        function greatest(node, k) {
            if (node === null)
                return null;
            if (node.data <= k) {
                res.push(node.data);  // Store node if it is <= k
            }
            greatest(node.left, k);  // Traverse left subtree
            greatest(node.right, k);  // Traverse right subtree
        }

        // Start the recursive traversal
        greatest(root, k);

        // If there are valid nodes, return the maximum value found
        if (res.length > 0) {
            res.sort((a, b) => a - b);  // Sort the array in ascending order
            return res[res.length - 1];  // Return the largest value
        }

        return -1;  // Return -1 if no valid node is found
    }
}
