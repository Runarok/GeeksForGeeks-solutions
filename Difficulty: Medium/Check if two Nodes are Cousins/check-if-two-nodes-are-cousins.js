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
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] == 'N') return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();

    let ip_str = str.split(" ");

    for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== 0 && i < ip.length) {

        // Get and remove the front of the queue
        let currNode = queue[0];
        queue.shift();

        // Get the current node's value from the string
        let currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= ip.length) break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

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
    for (let i = 0; i < t; i++) {
        let s_tree = readLine().trim();
        let [a, b] = readLine().split(" ").map((x) => parseInt(x));
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.isCousins(root, a, b);
        console.log(Number(res));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

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
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */

class Solution {
    // Function to check if nodes 'a' and 'b' are cousins
    isCousins(root, a, b) {
        // Start the recursive helper function
        return this.helper(root, a, b, null, 0, []);
    }

    // Helper function to track node information and check if they are cousins
    helper(root, a, b, parent, depth, nodeInfo) {
        if (!root) {
            return false;
        }

        // If the current node is either 'a' or 'b', store its depth and parent
        if (root.data === a || root.data === b) {
            if (nodeInfo.length > 0 && depth === nodeInfo[0] && parent !== nodeInfo[1]) {
                return true;  // Nodes are cousins if they have the same depth but different parents
            } else {
                nodeInfo.push(depth, parent);  // Store depth and parent for the first node found
            }
        }

        // Recursively check left and right subtrees
        return this.helper(root.left, a, b, root, depth + 1, nodeInfo) || 
               this.helper(root.right, a, b, root, depth + 1, nodeInfo);
    }
}
