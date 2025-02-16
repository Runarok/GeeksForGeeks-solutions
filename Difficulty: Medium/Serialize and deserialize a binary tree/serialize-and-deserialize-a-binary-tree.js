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
        let serial = new Solution();
        let deserial = new Solution();
        let A = serial.serialize(root);
        root = null;
        let getRoot = deserial.deSerialize(A);
        let res = [];
        inorderUtil(getRoot, res);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);

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
     * @param {Node} root
     * @returns {number[]}
     */
    // Function to serialize a tree and return a list containing nodes of tree.
    serialize(root) {
        let ans = [];
        let q = [root];

        while (q.length > 0) {
            let temp = q.shift();  // Dequeue the front element

            // If the current node is null, add a placeholder "#" to represent null
            if (temp == null) {
                ans.push("#");
            } else {
                ans.push(temp.data);  // Add the node's data to the result list
            }

            // If the node is not null, add its left and right children to the queue
            if (temp != null) {
                q.push(temp.left);
                q.push(temp.right);
            }
        }

        return ans;  // Return the serialized list
    }

    /**
     * @param {number[]} arr
     * @returns {Node}
     */
    // Function to deserialize a list and construct the tree
    deSerialize(arr) {
        if (arr.length == 0) return null;  // If the list is empty, return null
        
        // Create the root node with the first element in the list
        let root = new Node(arr[0]);
        let q = [root];
        let i = 1;  // Index for the current element in the serialized list

        while (q.length > 0) {
            let temp = q.shift();  // Dequeue the front node
            
            // If the next element is "#", assign null to the left child, else create the left child
            if (arr[i] == "#") {
                temp.left = null;
            } else {
                temp.left = new Node(arr[i]);
                q.push(temp.left);
            }
            i++;
            
            // Repeat the same process for the right child
            if (arr[i] == "#") {
                temp.right = null;
            } else {
                temp.right = new Node(arr[i]);
                q.push(temp.right);
            }
            i++;
        }

        return root;  // Return the root of the reconstructed tree
    }
}
