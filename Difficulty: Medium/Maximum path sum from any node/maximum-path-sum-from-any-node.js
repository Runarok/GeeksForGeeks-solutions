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
        console.log(obj.findMaxSum(root));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @returns {number}
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
    // Function to return maximum path sum from any node in a tree.
    findMaxSum(root) {
        // Helper function to perform post-order traversal and calculate max path sum.
        let maxSum = -Infinity;  // To store the global maximum path sum
        
        // Helper recursive function
        function helper(node) {
            if (!node) return 0;  // Base case: if the node is null, the sum is 0
            
            // Recursively calculate the max sum of left and right subtrees
            let leftSum = Math.max(helper(node.left), 0);  // Max sum of left subtree (0 if negative)
            let rightSum = Math.max(helper(node.right), 0);  // Max sum of right subtree (0 if negative)
            
            // The current node's maximum path sum could be the node's value + the best from left and right children
            let currentMax = node.data + leftSum + rightSum;
            
            // Update the global maxSum if we have found a larger path sum
            maxSum = Math.max(maxSum, currentMax);
            
            // Return the maximum sum of the path going through this node and extending to its parent
            return node.data + Math.max(leftSum, rightSum);
        }
        
        // Start the recursion from the root node
        helper(root);
        
        // Return the global maximum path sum
        return maxSum;
    }
}
