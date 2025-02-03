//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data',  inputStdin => {
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

let s = "";
function inorder(root){
  if(root === null) return;
  inorder(root.left);
  s = s + root.data + " ";
  inorder(root.right);
}
 

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let size = parseInt(readLine());
        let preorder = readLine().trim().split(" ").map((x) => parseInt(x));
        let preorderMirror = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let root = obj.constructBinaryTree(preorder,preorderMirror,size);
        s="";
        inorder(root);
        console.log(s);  
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
 * @param {number[]} preorder
 * @param {number[]} preorderMirror
 * @param {number} size
 * @return {Node}
 */
class Solution {
  constructBinaryTree(preorder, preorderMirror, size) {
    // Create postorder by reversing preorderMirror
    let postorder = preorderMirror.reverse();
    
    // Create a map to store the indices of elements in postorder
    let map = {};
    for (let i = 0; i < postorder.length; ++i) {
        map[postorder[i]] = i;
    }
    
    // Helper function to construct the tree
    function helper(preStart, preEnd, postStart, postEnd) {
        // If the range is invalid, return null (base case)
        if (preStart > preEnd) return null;
        
        // Create a root node with the current value in preorder
        let root = new Node(preorder[preStart]);
        
        // If the range is a single element, return the node
        if (preStart === preEnd) return root;
        
        // Find the index of the left child in postorder and calculate the offset
        let idx = map[preorder[preStart + 1]];
        let offset = idx - postStart + 1;
        
        // Recursively construct left and right subtrees
        root.left = helper(preStart + 1, preStart + offset, postStart, idx);
        root.right = helper(preStart + offset + 1, preEnd, idx + 1, postEnd - 1);
        
        return root;
    }
    
    // Call the helper function to construct the tree
    return helper(0, preorder.length - 1, 0, postorder.length - 1);
  }
}
