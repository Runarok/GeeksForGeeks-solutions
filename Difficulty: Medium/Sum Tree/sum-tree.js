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
        this.key = x;
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

        let root = buildTree(s_tree);

        let obj = new Solution();
        let res = obj.isSumTree(root);
        if (res)
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}
// } Driver Code Ends

// User-defined function Template for JavaScript  

/*  
class Node {  
    constructor(value) {  
        this.key = value;  
        this.left = null;  
        this.right = null;  
    }  
}  
*/  

/**  
 * @param {Node} rootNode - Root of the binary tree  
 * @return {boolean} - Returns true if the tree is a Sum Tree, otherwise false  
 */  

class Solution {  
    // Helper function to check if the tree follows the Sum Tree property  
    checkSumTree(rootNode, result) {  
        // Base case: if the node is null, return sum as 0  
        if (rootNode == null) {  
            return 0;  
        }  

        // If the node is a leaf, return its key value  
        if (rootNode.left == null && rootNode.right == null) {  
            return rootNode.key;  
        }  

        // Recursively calculate the sum of left and right subtrees  
        let leftSum = this.checkSumTree(rootNode.left, result);  
        let rightSum = this.checkSumTree(rootNode.right, result);  

        // If the sum of left and right subtree does not match the node’s key, mark as not a Sum Tree  
        if (leftSum + rightSum != rootNode.key) {  
            result[0] = 0;  
        }  

        // Return the sum of the current node and its subtrees  
        return leftSum + rightSum + rootNode.key;  
    }  

    isSumTree(rootNode) {  
        // Array to store the result (acts as a reference variable)  
        let result = [1];  

        // Call the helper function  
        this.checkSumTree(rootNode, result);  

        // Return whether the tree satisfies the Sum Tree property  
        return result[0] === 1;  
    }  
}  
