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
        console.log(obj.printKDistantfromLeaf(root, k)); 
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Node} node
 * @param {number} k
 * @returns {number}
 */

 /*
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    constructor() {
        this.arr = [];  // To store the current path of nodes
        this.res = new Set();  // To store unique nodes at a given distance from leaf nodes
    }

    // Recursive helper function to traverse the tree and find nodes at distance 'k' from leaf nodes
    getHeight(node, k) {
        if (node === null) {
            return;
        }

        // Add the current node to the path
        this.arr.push(node);

        // If it's a leaf node, check the distance and add to result if it satisfies the condition
        if (node.left === null && node.right === null) {
            if (k <= this.arr.length - 1) {
                // Add the node at the desired distance from the leaf to the result set
                this.res.add(this.arr[this.arr.length - k - 1]);
            }
        }

        // Recur on left and right children
        this.getHeight(node.left, k);
        this.getHeight(node.right, k);

        // Backtrack by removing the current node from the path
        this.arr.pop();
    }

    // Function to return count of unique nodes at a given distance from leaf nodes
    printKDistantfromLeaf(node, k) {
        // Call the recursive helper function
        this.getHeight(node, k);

        // Return the size of the result set, which contains unique nodes at the specified distance
        return this.res.size;
    }
}
