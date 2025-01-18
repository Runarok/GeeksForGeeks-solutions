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
        this.nextRight = null;
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

function printSpecial(root, res) {
    if (root === null) return;

    let next_root = null;

    while (root !== null) {
        res.push(root.data);

        if (root.left && (!next_root))
            next_root = root.left;
        else if (root.right && (!next_root))
            next_root = root.right;

        root = root.nextRight;
    }

    printSpecial(next_root, res);
}

function inorderUtil(root, res) {
    if (root === null) return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        obj.connect(root);
        let res = [];
        printSpecial(root, res);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
        res = [];
        inorderUtil(root, res);
        s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} p
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.nextRight = null;
    }
}
*/

class Solution {
    // Function to connect nodes at the same level.
    connect(root) {
        if (root === null) {
            return;
        }
        
        // Initialize a queue for level order traversal.
        let queue = [];
        queue.push(root);
        
        // Process nodes level by level.
        while (queue.length > 0) {
            let size = queue.length;  // Number of nodes at the current level
            
            // Traverse nodes at the current level.
            for (let i = 0; i < size; i++) {
                let node = queue.shift(); // Get the front node of the queue
                
                // Set the nextRight of the node to the next node in the queue
                if (i < size - 1) {
                    node.nextRight = queue[0];  // The next node in the queue
                } else {
                    node.nextRight = null;  // The last node of the level points to null
                }
                
                // Add children of the current node to the queue for the next level
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
    }
}
