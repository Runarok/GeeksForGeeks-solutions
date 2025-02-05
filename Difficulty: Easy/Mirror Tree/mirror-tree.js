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

function levelOrder(root) {
    if (root === null) return "N\n";

    let arr = [];
    const qq = [];
    qq.push(root);

    while (qq.length > 0) {
        const curr = qq.shift();

        if (curr === null) {
            arr.push("N");
            continue;
        }

        arr.push(curr.data);
        qq.push(curr.left);
        qq.push(curr.right);
    }

    // Trim trailing non-numeric characters
    while (arr.length > 0 && isNaN(parseInt(arr[arr.length - 1]))) {
        arr.pop();
    }

    return arr.join(" ");
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().trim().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        obj.mirror(root);
        console.log(levelOrder(root));
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

class Solution {
    /**
     * @param {Node} node
     * @return {void}
     */
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        // Base case: If the node is null, return
        if (node === null) {
            return;
        }
        
        // Swap the left and right children of the node
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        // Recursively mirror the left and right subtrees
        this.mirror(node.left);
        this.mirror(node.right);
    }
}
