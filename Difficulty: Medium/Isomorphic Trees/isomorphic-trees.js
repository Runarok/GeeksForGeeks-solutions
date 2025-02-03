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
        let root1 = buildTree(s_tree);
        s_tree = readLine().trim();
        let root2 = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.isIsomorphic(root1, root2);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }

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
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
class Solution {
    // Check if the given trees are structurally identical
    isIsomorphic(node1, node2) {
        // If both nodes are null, the trees are isomorphic
        if (!node1 && !node2) {
            return true;
        }
        
        // If one of the nodes is null while the other isn't, the trees are not isomorphic
        if ((node1 && !node2) || (!node1 && node2)) {
            return false;
        }
        
        // If data at both nodes do not match, return false
        if (node1.data !== node2.data) {
            return false;
        }
        
        // Recursively check if the subtrees are isomorphic
        return (
            (this.isIsomorphic(node1.left, node2.left) && this.isIsomorphic(node1.right, node2.right)) ||
            (this.isIsomorphic(node1.left, node2.right) && this.isIsomorphic(node1.right, node2.left))
        );
    }
}
