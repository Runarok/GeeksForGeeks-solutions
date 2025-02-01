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
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] == 'N') return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();

    let ip_str = str.split(" ");

    for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== 0 && i < ip.length) {

        // Get and remove the front of the queue
        let currNode = queue[0];
        queue.shift();

        // Get the current node's value from the string
        let currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= ip.length) break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

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
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let k = parseInt(readLine());
        let obj = new Solution();

        let res = obj.kthLargest(root, k);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/*
class Node {
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root - The root node of the BST
 * @param {number} k - The position of the largest element to find
 * @return {number} - The Kth largest element in the BST
 */
class Solution {
    // Constructor to initialize the answer and index variables
    constructor() {
        this.ans = -1;  // Stores the Kth largest element
        this.i = 0;     // Index to track the count of nodes visited
    }

    // Helper function to perform reverse inorder traversal
    solve(root, k) {
        // If the root is null, stop the recursion
        if (root != null) {    
            // Traverse the right subtree first to get larger elements
            this.solve(root.right, k);

            // Increment the count of nodes visited
            this.i += 1;

            // If the current node is the Kth largest, store the result
            if (this.i == k) {
                this.ans = root.data;
                return;
            }

            // Traverse the left subtree
            this.solve(root.left, k);
        }
    }

    // Function to return the Kth largest element in the BST
    kthLargest(root, k) {
        // Start the recursion to find the Kth largest element
        this.solve(root, k);
        return this.ans;  // Return the Kth largest element
    }
}
