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
        let res = obj.zigZagTraversal(root);
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} root
 * @returns {number[]}
 */

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
    // Function to store the zig-zag order traversal of a tree in a list.
    zigZagTraversal(root) {
        if (!root) return []; // If the tree is empty, return an empty list.

        let ans = []; // Stores the final zig-zag order traversal.
        let deque = []; // Double-ended queue for level-order traversal.
        let leftToRight = true; // Toggle flag to control traversal direction.

        deque.push(root); // Start with the root node.

        while (deque.length > 0) {
            let levelSize = deque.length;
            let levelNodes = []; // Temporary array to store nodes at the current level.

            for (let i = 0; i < levelSize; i++) {
                let node;

                if (leftToRight) {
                    // Remove from front for left-to-right traversal
                    node = deque.shift();
                } else {
                    // Remove from back for right-to-left traversal
                    node = deque.pop();
                }

                levelNodes.push(node.data);

                // Enqueue child nodes based on traversal direction
                if (leftToRight) {
                    if (node.left) deque.push(node.left);
                    if (node.right) deque.push(node.right);
                } else {
                    if (node.right) deque.unshift(node.right);
                    if (node.left) deque.unshift(node.left);
                }
            }

            ans.push(...levelNodes); // Add current level nodes to the result list.
            leftToRight = !leftToRight; // Toggle traversal direction.
        }

        return ans;
    }
}
