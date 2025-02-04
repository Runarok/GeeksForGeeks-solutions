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
function height(node) 
{
   if (node===null) 
    return 0;
   else
   {
       let lDepth = height(node.left);
       let rDepth = height(node.right);
       if (lDepth > rDepth)
           return(lDepth+1);
       else 
           return(rDepth+1);
   }
} 

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {  
        
        let s_tree = readLine().trim().split(" ");
        let root = buildTree(s_tree);
        let obj = new Solution();
        root = obj.buildBalancedTree(root);
        let res = height(root);
        console.log(res);        
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for javascript

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    constructor() {
        this.traverse = [];
    }

    // Helper method to perform inorder traversal and collect node data
    inorder(node) {
        if (!node) return;
        
        // Traverse left subtree
        this.inorder(node.left);
        
        // Add current node's data to traverse list
        this.traverse.push(node.data);
        
        // Traverse right subtree
        this.inorder(node.right);
    }

    // Helper method to build a balanced binary search tree from sorted data
    helper(start, end) {
        // Base case for recursion
        if (start > end) return null;
        
        // Find the middle index
        let mid = Math.floor((start + end) / 2);
        
        // Create a new node with the middle value
        let newNode = new Node(this.traverse[mid]);
        
        // Recursively build left and right subtrees
        newNode.left = this.helper(start, mid - 1);
        newNode.right = this.helper(mid + 1, end);
        
        // Return the new node as part of the balanced tree
        return newNode;
    }

    // Main method to build a balanced binary search tree from the given tree's inorder traversal
    buildBalancedTree(root) {
        // Perform inorder traversal of the given tree and store the result
        this.inorder(root);
        
        // Build a balanced tree using the sorted data from the inorder traversal
        return this.helper(0, this.traverse.length - 1);
    }
}
