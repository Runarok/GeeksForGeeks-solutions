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

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
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
        let root1 = buildTree(input_ar1);

        let input_ar2 = readLine().split(' ');
        let root2 = buildTree(input_ar2);

        let obj = new Solution();
        let res = obj.findCommon(root1, root2);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Node} root1
 * @param {Node} root2
 * @returns {number[]}
 */

class Solution {
    constructor(){
        this.result = []; // Array to store the common nodes
        this.stack1 = []; // Stack for the first tree
        this.stack2 = []; // Stack for the second tree
    }
    
    findCommonByOptimized(r1, r2) {
        while(true){
            if (r1 !== null) {
                this.stack1.push(r1); // Push node to stack1 and move to left child
                r1 = r1.left;
            }
            else if (r2 !== null) {
                this.stack2.push(r2); // Push node to stack2 and move to left child
                r2 = r2.left;
            }
            else if (this.stack1.length && this.stack2.length) {
                // Main logic lies here: Pop nodes from stacks and compare their values
                r1 = this.stack1[this.stack1.length - 1];
                r2 = this.stack2[this.stack2.length - 1];
                
                if (r1.data === r2.data) {
                    this.result.push(r1.data); // If values match, add to result
                    this.stack1.pop(); // Pop from stack1
                    this.stack2.pop(); // Pop from stack2
                    r1 = r1.right; // Move to right child
                    r2 = r2.right; // Move to right child
                }
                else if (r1.data < r2.data) {
                    this.stack1.pop(); // Pop from stack1 and move r1 to the right
                    r1 = r1.right;
                    r2 = null; // Set r2 to null to continue processing stack2
                }
                else if (r1.data > r2.data) {
                    this.stack2.pop(); // Pop from stack2 and move r2 to the right
                    r2 = r2.right;
                    r1 = null; // Set r1 to null to continue processing stack1
                }
            }
            else {
                break; // Break the loop if one of the stacks is empty
            }
        }
    }
    
    // Function to find the nodes that are common in both BSTs.
    findCommon(r1, r2) {
        this.findCommonByOptimized(r1, r2); // Call the helper function
        return this.result; // Return the common nodes
    }
}
