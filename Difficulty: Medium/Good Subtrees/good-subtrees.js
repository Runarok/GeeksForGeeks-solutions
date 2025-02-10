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
        let k = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.goodSubtrees(root, k));
        
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    /**
     * Definition for a binary tree node.
     * function Node(val) {
     *     this.data = val;
     *     this.left = this.right = null;
     * }
     */

    /**
     * Helper function to perform postorder traversal and count good subtrees.
     * @param {Node} root
     * @param {number} k
     * @param {number[]} count
     * @returns {Set<number>}
     */
    Postorder(root, k, count) {
        if (root === null) {
            return new Set();
        }

        let leftSet = this.Postorder(root.left, k, count);
        let rightSet = this.Postorder(root.right, k, count);

        let currSet = new Set([...leftSet, ...rightSet, root.data]);

        if (currSet.size <= k) {
            count[0] += 1;
        }

        return currSet;
    }

    /**
     * Function to count the number of good subtrees.
     * @param {Node} root
     * @param {number} k
     * @returns {number}
     */
    goodSubtrees(root, k) {
        let count = [0];
        this.Postorder(root, k, count);
        return count[0];
    }
}
