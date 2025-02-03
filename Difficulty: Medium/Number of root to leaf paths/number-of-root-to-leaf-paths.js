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

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

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
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        obj.pathCounts(root);
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} root
 * @returns {void}
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

function preOrder(root, size, paths) {
    if (root == null) return;  // If the node is null, return
    
    // Traverse left subtree
    preOrder(root.left, size + 1, paths);
    
    // If the current node is a leaf node, record its path length
    if (root.left == null && root.right == null) {
        // Increment the count for the given path size
        if (!paths[size]) paths[size] = 1;
        else paths[size]++;
    }
    
    // Traverse right subtree
    preOrder(root.right, size + 1, paths);
}

class Solution {
    
    pathCounts(root) {
        // Initialize an object to store path sizes and their respective counts
        let paths = {};
        
        // Start pre-order traversal to populate the paths object
        preOrder(root, 1, paths);
        
        // Format and print the result
        console.log(Object.keys(paths)
            .map(size => [size, paths[size], "$"].join(" "))  // Format output with size, count, and "$"
            .join(""));  // Join the results together as a string
    }
}
