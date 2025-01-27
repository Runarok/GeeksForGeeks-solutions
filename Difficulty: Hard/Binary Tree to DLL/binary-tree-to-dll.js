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

function printList(node)
{
    let prev = null;
    let s = '';
    while (node !== null)
    {
        s += node.data + " ";
        prev = node;
        node = node.right;
    }
    console.log(s);
    s = '';
    while (prev !== null)
    {
        s += prev.data + " ";
        prev = prev.left;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let head = obj.bToDLL(root); 
        printList(head);
        
    
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
    // Function to convert a binary tree to doubly linked list and return it.
    bToDLL(root) {
        // This will hold the head of the DLL
        let head = null;
        // This will keep track of the last visited node during the in-order traversal
        let prev = null;

        // Helper function for in-order traversal and linking nodes
        function inorderTraversal(node) {
            if (!node) return;

            // Traverse the left subtree
            inorderTraversal(node.left);

            // If prev is null, it means this is the first node (leftmost node)
            if (prev === null) {
                head = node; // This is the head of the DLL
            } else {
                // Set the current node's left to the previous node (prev) for doubly linked list
                node.left = prev;
                prev.right = node; // Set the previous node's right to the current node
            }

            // Move the prev pointer to the current node
            prev = node;

            // Traverse the right subtree
            inorderTraversal(node.right);
        }

        // Start in-order traversal
        inorderTraversal(root);

        return head; // The head of the DLL
    }
}
