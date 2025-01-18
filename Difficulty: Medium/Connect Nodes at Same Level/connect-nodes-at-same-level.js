//{ Driver Code Starts
'use strict';

const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputString = '';
let currentLine = 0;

rl.on('line', (line) => { inputString += line + '\n'; });

rl.on('close', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
        this.nextRight = null;
    }
}

function buildTree(str) {
    if (str.length === 0 || str[0] === 'N') return null;

    const ip = str.split(" ");
    const root = new Node(parseInt(ip[0]));

    const queue = [];
    queue.push(root);

    let i = 1;
    while (queue.length !== 0 && i < ip.length) {
        const currNode = queue.shift();

        let currVal = ip[i];
        if (currVal !== "N") {
            currNode.left = new Node(parseInt(currVal));
            queue.push(currNode.left);
        }

        i++;
        if (i >= ip.length) break;

        currVal = ip[i];
        if (currVal !== "N") {
            currNode.right = new Node(parseInt(currVal));
            queue.push(currNode.right);
        }

        i++;
    }

    return root;
}

function printSpecial(root) {
    if (!root) return;

    let nextRoot = null;

    while (root !== null) {
        // Print only if root.data is not undefined or null
        if (!isNaN(root.data) && root.data !== undefined && root.data !== null) {
            process.stdout.write(root.data + " ");
        }

        if (root.left && !nextRoot)
            nextRoot = root.left;
        else if (root.right && !nextRoot)
            nextRoot = root.right;

        root = root.nextRight;
    }

    // console.log(); // Print a newline for proper formatting
    printSpecial(nextRoot);
}

function inorder(root) {
    if (!root) return;

    inorder(root.left);
    // Print only if root.data is not undefined or null
    if (!isNaN(root.data) && root.data !== undefined && root.data !== null) {
        process.stdout.write(root.data + " ");
    }
    inorder(root.right);
}

// Position this line where user code will be pasted.

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const s = readLine();
        const root = buildTree(s);
        // readLine(); // Consume the extra string input as in the C++ version
        const obj = new Solution();
        obj.connect(root);
        printSpecial(root);
        console.log();
        inorder(root);
        console.log(); // Print a new line after inorder traversal
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

class Solution {
    connect(root) {
        // If the tree is empty, return
        if (!root) return;

        // Start with the root node in the queue
        let queue = [];
        queue.push(root);

        // Process each level
        while (queue.length > 0) {
            let levelSize = queue.length;
            let prev = null;

            // Process all nodes at the current level
            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift();

                // If there was a previous node, link it to the current node
                if (prev) {
                    prev.nextRight = currentNode;
                }

                // Update the previous node to be the current node
                prev = currentNode;

                // Add the left and right children of the current node to the queue
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }

            // Ensure the last node in the level points to NULL
            if (prev) {
                prev.nextRight = null;
            }
        }
    }
}
