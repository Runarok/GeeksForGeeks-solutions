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
        let res = obj.levelOrder(root);
        res = res.map(level => level.join(" "));
        console.log(res.join(" "));

        console.log("~");
    }
}
// } Driver Code Ends



// User function Template for JavaScript

/**
 * @param {Node} root
 * @returns {number[][]}
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
    // Function to return the level order traversal of a tree.
    levelOrder(root) {
        if (!root) return [];  // If the root is null, return an empty array
        
        const queue = [];  // Initialize a queue for level-order traversal
        queue.push(root);  // Start with the root node
        const result = [];  // This will hold the result of the traversal
        
        while (queue.length > 0) {
            const numNodesInRow = queue.length;  // Number of nodes at the current level
            const currentLevel = [];  // Array to store nodes at the current level
            
            for (let i = 0; i < numNodesInRow; i++) {
                const node = queue.shift();  // Dequeue the front element
                
                // Enqueue left and right children if they exist
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                
                // Add the current node's data to the current level result
                currentLevel.push(node.data);
            }
            
            // Add the current level's nodes to the final result
            result.push(currentLevel);
        }
        
        return result;  // Return the final level-order traversal result
    }
}