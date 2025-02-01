//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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
        console.log(obj.getMaxWidth(root));
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} root
 * @returns {number}
*/

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to get the maximum width of a binary tree.
    getMaxWidth(root) {
        if (!root) return 0; // Edge case: if the tree is empty

        const nodeQueue = new Queue(); // Initialize a queue to perform level-order traversal
        nodeQueue.enqueue(root);
        
        let maxSpan = 0; // Variable to store the maximum width of the tree

        while (nodeQueue.length) {
            let levelNodes = nodeQueue.length; // Number of nodes at the current level
            maxSpan = Math.max(maxSpan, levelNodes); // Update max width if current level is wider
            
            // Process all nodes at the current level
            while (levelNodes--) {
                const currNode = nodeQueue.dequeue(); // Remove the front node from the queue

                // If the node has a left child, add it to the queue
                if (currNode.left) {
                    nodeQueue.enqueue(currNode.left);
                }
                
                // If the node has a right child, add it to the queue
                if (currNode.right) {
                    nodeQueue.enqueue(currNode.right);
                }
            }
        }
        
        return maxSpan; // Return the maximum width found
    }
}

// Class representing a node in the queue
class QueueNode {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

// Class representing a queue (FIFO structure) for level-order traversal
class Queue {
    _storage = []; // Internal storage (not used explicitly)
    _front = null; // Points to the front of the queue
    _rear = null; // Points to the rear of the queue
    length = 0; // Tracks the number of elements in the queue

    // Function to add a node to the queue
    enqueue(node) {
        this.length++;
        const newNode = new QueueNode(node);
        
        if (!this._front) { // If queue is empty, set front and rear to the new node
            this._front = this._rear = newNode;
            return;
        }

        this._rear.next = newNode; // Add the new node to the end of the queue
        this._rear = newNode; // Update the rear pointer
    }

    // Function to remove a node from the queue
    dequeue() {
        if (!this._front) {
            throw new Error("Queue is empty"); // Handle underflow condition
        }

        this.length--;
        const removedNode = this._front; // Get the front node
        this._front = removedNode.next; // Move the front pointer to the next node

        if (!this._front) {
            this._rear = null; // If the queue becomes empty, reset rear
        }

        return removedNode.value; // Return the removed node's value
    }
}
