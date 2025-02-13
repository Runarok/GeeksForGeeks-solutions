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
        let target = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findTarget(root, target);
        if (res === false)
            console.log(0);
        else
            console.log(1);
        console.log("~");
    }
}
// } Driver Code Ends



/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} target
 * @return {boolean}
 */

class Solution {
    /**
     * Function to find if there exists a pair with sum equal to the target in a binary tree.
     * @param {Node} root - The root node of the binary tree
     * @param {number} target - The target sum to find in the tree
     * @return {boolean} - Returns true if such a pair is found, otherwise false
     */
    findTarget(root, target) {
        const visited = new Set();  // Set to keep track of previously visited node values
        
        /**
         * Helper function for DFS traversal to find the pair with the target sum.
         * @param {Node} node - The current node in the traversal
         * @return {boolean} - Returns true if a pair is found, otherwise false
         */
        const dfs = (node) => {
            if (!node) return false;  // If the current node is null, return false
            
            // Check if the complement of current node's data (target - node.data) exists in the set
            if (visited.has(target - node.data)) return true;
            
            visited.add(node.data);  // Add current node's data to the set
            
            // Recursively check left and right subtrees
            if (dfs(node.left)) return true;
            if (dfs(node.right)) return true;
            
            return false;  // No pair found in either subtree, return false
        };
        
        return dfs(root);  // Start the DFS traversal from the root node
    }
}
