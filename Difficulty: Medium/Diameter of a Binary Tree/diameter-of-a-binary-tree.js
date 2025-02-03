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
        console.log(obj.diameter(root));

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
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
        if (!root) {
            return 0;  // If the tree is empty, the diameter is 0
        }
        
        let diameter = [0];  // Using an array to store the max diameter (mutable in recursion)
        
        // Helper function to calculate height and update diameter
        function dfs(node) {
            if (!node) {
                return 0;  // The height of an empty subtree is 0
            }
            
            // Recursively calculate the height of the left and right subtrees
            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);
            
            // Update the diameter (max of current diameter and the sum of left and right subtree heights)
            diameter[0] = Math.max(diameter[0], leftHeight + rightHeight);
            
            // Return the height of the current node (1 + max of left and right subtree heights)
            return 1 + Math.max(leftHeight, rightHeight);
        }
        
        // Perform DFS starting from the root of the tree
        dfs(root);
        
        // Return the final diameter
        return diameter[0];
    }
}
