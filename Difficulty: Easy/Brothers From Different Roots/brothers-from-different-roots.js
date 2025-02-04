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
    for(let i=0;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        input_ar1 = readLine().split(' ');
        let root2 = buildTree(input_ar1);
        let x = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countPairs(root, root2, x));
        
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript
/**
 * Tree Node
 * class Node{
 *     constructor(val){
 *         this.right = null;
 *         this.data = val;
 *         this.left = null;
 *     }
 * }
 */

class Solution {
    // Function to perform inorder traversal of a binary tree and store the result
    inorder(node, result) {
        if (!node) return;  // If node is null, return
        
        // Traverse the left subtree
        this.inorder(node.left, result);
        // Add the current node's data to the result
        result.push(node.data);
        // Traverse the right subtree
        this.inorder(node.right, result);
    }
    
    // Function to count the number of pairs from two BSTs where the sum equals 'x'
    countPairs(root1, root2, x) {
        // Arrays to store inorder traversal of both BSTs
        let arr1 = [], arr2 = [], result = 0;

        // Get the inorder traversal of both trees
        this.inorder(root1, arr1);
        this.inorder(root2, arr2);
        
        // Create a set from the second array (BST2) for efficient lookups
        let set = new Set(arr2);
        
        // Iterate through the first array (BST1)
        for (let elem of arr1) {
            // Check if the complement (x - elem) exists in the set (BST2)
            if (set.has(x - elem)) {
                result++;  // If found, increment the result
            }
        }
        
        // Return the final count of valid pairs
        return result;
    }
}
