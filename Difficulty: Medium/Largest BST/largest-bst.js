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
        this.key = x;
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
        let obj = new Solution();

        let res = obj.largestBst(root);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */
class Solution {
    // Helper function to recursively solve the problem and return details about the subtree.
    solve(root) {
        // Base case: if the node is null, return a valid BST with count 1, no nodes, and extreme values for key
        if (root == null) {
            return [1, 0, Infinity, -Infinity]; // [isBst, count, minValue, maxValue]
        }

        // If the node is a leaf node, return as a valid BST with count 1 and the key as min and max
        if (root.left == null && root.right == null) {
            return [1, 1, root.key, root.key]; // [isBst, count, minValue, maxValue]
        }

        // Recursively solve for the left and right subtrees
        let leftSubtree = this.solve(root.left);
        let rightSubtree = this.solve(root.right);

        // If both left and right subtrees are valid BSTs
        if (leftSubtree[0] && rightSubtree[0]) {
            // Ensure root's key is greater than max of left and less than min of right
            if (leftSubtree[3] < root.key && rightSubtree[2] > root.key) {
                // Compute the min and max values in the current subtree
                let min = leftSubtree[2] === Infinity ? root.key : leftSubtree[2];
                let max = rightSubtree[3] === -Infinity ? root.key : rightSubtree[3];

                // Return the count of nodes in the BST, with the min and max values of the BST
                return [1, leftSubtree[1] + rightSubtree[1] + 1, min, max];
            }
        }

        // If either subtree is not a BST, return 0 for BST validity and the larger count of valid BSTs from either side
        return [0, Math.max(leftSubtree[1], rightSubtree[1]), 0, 0];
    }

    // Main function to return the size of the largest BST in the binary tree
    largestBst(root) {
        // Call the helper function and return the size of the largest BST found
        let result = this.solve(root);
        return result[1]; // The size of the largest BST in the tree
    }
}
