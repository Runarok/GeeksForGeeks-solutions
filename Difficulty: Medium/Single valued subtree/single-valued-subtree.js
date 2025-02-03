//{ Driver Code Starts
//Initial Template for javascript

'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}

function buildTree(str)
{
    // Corner Case
    if (str.length === 0 || str[0] == 'N')
        return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();
    
    let ip_str = str.split(" ");
    
    for (let i=0;i<ip_str.length;i++)
        ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length!==0 && i < ip.length) {

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
        if (i >= ip.length)
            break;
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
    for(let i=0;i<t;i++)
    {
		let s_tree = readLine().trim();
		let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.singlevalued(root);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

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
 * @return {number}
*/
class Solution {
    constructor() {
        this.count = 0;  // To keep track of the number of Single Valued Subtrees
    }
    
    // Helper function to check whether a subtree is single valued
    isSingleValuedSubtree(root) {
        // If the node is null, it's trivially a single-valued subtree
        if (!root) return true;

        // Recursively check for left and right subtrees
        let leftIsSingleValued = this.isSingleValuedSubtree(root.left);
        let rightIsSingleValued = this.isSingleValuedSubtree(root.right);

        // If either left or right subtree is not single valued, return false
        if (!leftIsSingleValued || !rightIsSingleValued) {
            return false;
        }

        // Check if current node's value is the same as its children (if they exist)
        if (root.left && root.data !== root.left.data) {
            return false;
        }
        if (root.right && root.data !== root.right.data) {
            return false;
        }

        // If all conditions are satisfied, it's a single-valued subtree
        this.count++;  // Increment count as this is a valid Single Valued Subtree
        return true;
    }

    // Main function to count single valued subtrees
    singlevalued(root) {
        this.count = 0;  // Reset the count before starting
        this.isSingleValuedSubtree(root);  // Start the recursive check
        return this.count;  // Return the final count of single-valued subtrees
    }
}
