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
        console.log(obj.findMaxScore(root));
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for JavaScript
/**
 * @param {Node} root
 * @returns {number}
 */

class Solution {
    //structure of class Node
    /**
     * 
     * @param {number} val 
     */

    // Function to find the maximum score among all nodes of the binary tree.
    findMaxScore(root) {
        // Helper function to perform Depth-First Search (DFS)
        const dfs = node => {
            // Base case: if the node is null, return 1 (neutral element for multiplication)
            if (!node) return 1;

            // Recursively calculate the maximum score from the left and right subtrees
            const Lmax = dfs(node.left);
            const Rmax = dfs(node.right);

            // Return the product of the current node's data and the maximum of its left or right subtree's scores
            return node.data * Math.max(Lmax, Rmax);
        };

        // Call the DFS function starting from the root and return the result
        return dfs(root);
    }
}
