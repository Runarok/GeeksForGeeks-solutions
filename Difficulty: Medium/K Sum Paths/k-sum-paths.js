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
        let K = parseInt(readLine());
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.sumK(root, K);
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
 * @param {number} K
 * @return {number}
 */

class Solution {
    solve(root, K, count, path) {
        if (root == null) {
            return;
        }
        
        // Add the current node's data to the path
        path.push(root.data);
        
        // Explore left and right subtrees
        this.solve(root.left, K, count, path);
        this.solve(root.right, K, count, path);
        
        // Check if any subpath from this node to the root sums to K
        let sum = 0;
        for (let i = path.length - 1; i >= 0; i--) {
            sum += path[i];
            if (K == sum) {
                count[0]++; // Increment the count if sum equals K
            }
        }
        
        // Backtrack by removing the current node from the path
        path.pop();
    }

    sumK(root, K) {
        let count = [0];  // Array to keep track of the count
        let path = [];     // Array to store the current path
        this.solve(root, K, count, path);
        return count[0];   // Return the count of valid paths
    }
}
