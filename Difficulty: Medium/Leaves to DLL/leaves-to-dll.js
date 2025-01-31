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

function printInorder(root){
        if(root === null){
            return;
        }
        printInorder(root.left);
        process.stdout.write(root.data+" ");
        printInorder(root.right);
    }


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let head = obj.convertToDLL(root); 
        printInorder(root);
        console.log("");
        let curr = head;
        let last = head;
        while(curr!== null){
            process.stdout.write(curr.data+" ");
            last = curr;
            curr = curr.right;
        }
        console.log("");
        curr = last;
        while(curr !== null){
            process.stdout.write(curr.data+" ");
            curr = curr.left;
        }
        console.log(" ");
        
        
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {Node}
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
    constructor() {
        this.headDLL = null; // Head of the doubly linked list (DLL)
        this.tailDLL = null; // Tail of the doubly linked list (DLL)
    }

    // Converts the leaf nodes of a binary tree into a doubly linked list (DLL)
    convertToDLL(root) {
        this.extractLeafToDLL(root);
        return this.headDLL; // Return the head of the DLL
    }

    // Recursively extracts leaf nodes and connects them in a DLL
    extractLeafToDLL(root) {
        if (!root) return null; // Base case: empty tree

        // If it's a leaf node, add it to the DLL
        if (!root.left && !root.right) {
            if (!this.headDLL) {
                this.headDLL = root; // First leaf becomes the head of DLL
                this.tailDLL = root; // Also initialize tail
            } else {
                this.tailDLL.right = root; // Link current tail to new node
                root.left = this.tailDLL;  // Set previous link
                this.tailDLL = root;       // Update tail pointer
            }
            return null; // After processing a leaf, return null (indicating it was removed from the tree)
        }

        // Recursively process left and right subtrees
        if (root.left) {
            root.left = this.extractLeafToDLL(root.left);
        }

        if (root.right) {
            root.right = this.extractLeafToDLL(root.right);
        }

        return root; // Return the modified tree
    }
}
