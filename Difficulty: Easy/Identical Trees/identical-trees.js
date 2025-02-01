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
        let root1 = buildTree(input_ar1);
        let input_ar2 = readLine().split(' ');
        let root2 = buildTree(input_ar2);
        let obj = new Solution();
        if (obj.isIdentical(root1, root2)) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Node} r1 - The root node of the first tree
 * @param {Node} r2 - The root node of the second tree
 * @returns {boolean} - Returns true if the two trees are identical, otherwise false
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
    // Function to check if two binary trees are identical
    isIdentical(r1, r2) {
        // Case 1: Both trees are empty
        if (r1 === null && r2 === null) {
            return true;  // Both trees are empty, so they are identical
        }
        
        // Case 2: One tree is empty and the other is not, or the data doesn't match
        if (r1 === null || r2 === null || r1.data !== r2.data) {
            return false;  // Trees are not identical if one is empty or the data doesn't match
        }
        
        // Recursively check the left and right subtrees
        return this.isIdentical(r1.left, r2.left) && this.isIdentical(r1.right, r2.right);
    }
}
