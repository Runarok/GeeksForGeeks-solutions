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
        console.log(obj.verticalWidth(root));
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
    constructor(){
        // Initialize the minimum and maximum vertical levels
        this.maximum = 0;
        this.minimum = 0;
    }

    // Recursive helper function to calculate vertical levels
    lengthUtil(root, curr) {
        if (root == null) return; // Base case for null node
        
        // Traverse left subtree (decrease vertical level by 1)
        this.lengthUtil(root.left, curr - 1);

        // Update the minimum and maximum vertical levels encountered
        if (this.minimum > curr) this.minimum = curr; // Update minimum vertical level
        if (this.maximum < curr) this.maximum = curr; // Update maximum vertical level

        // Traverse right subtree (increase vertical level by 1)
        this.lengthUtil(root.right, curr + 1);
    }

    // Function to calculate vertical width of the tree
    verticalWidth(root) {
        if (!root) return 0; // If the tree is empty, the width is 0
        
        // Start the recursive traversal from root at vertical level 0
        this.lengthUtil(root, 0);

        // Calculate the total vertical width
        return (Math.abs(this.minimum) + this.maximum) + 1;
    }
}
