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
        let res = obj.maxDiff(root);
        console.log(res);
        
        
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

/**
 * @param {Node} root
 * @returns {number}
 */

class Solution { 
    ans = Number.MIN_SAFE_INTEGER;  // Initialize answer to the smallest possible value
    
    maxDiff(root) {
        // Start the recursive function to calculate the max difference
        if (root) {
            this.diff(root.right, root.data);  // Call for right subtree with root data as max
            this.diff(root.left, root.data);   // Call for left subtree with root data as max
        }
        return this.ans;  // Return the result after recursion
    }  
    
    // Recursive function to calculate max difference
    diff(root, max) {
        if (root === null) {
            return;  // Base case: if node is null, return
        }
        
        // Update the answer with the maximum difference
        this.ans = Math.max(this.ans, max - root.data);
        
        // Update the max value seen so far for the next recursive call
        let max1 = Math.max(root.data, max);
        
        // Recurse for left and right children with updated max
        this.diff(root.left, max1);
        this.diff(root.right, max1);
    }
}
