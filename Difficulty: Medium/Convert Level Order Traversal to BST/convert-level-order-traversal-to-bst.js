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

function preorderTraversal(root, res){
    if (root === null)
        return;
    res.push(root.data);
    preorderTraversal(root.left, res);
    preorderTraversal(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let root = obj.constructBst(arr, n);
        let res = [];
        preorderTraversal(root, res); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {Node}
 */

class Solution {
    // Function to construct the Binary Search Tree (BST) from its given level order traversal.
    constructBst(arr, n) {
        // If the input array is empty, return null (no tree to construct)
        if (n === 0) return null;
        
        // Create the root of the BST from the first element in the array
        const root = new Node(arr[0]);
        
        // Initialize a queue for level-order traversal, holding objects with node and its valid min-max range
        const queue = [{ node: root, min: -Infinity, max: Infinity }];
        
        let i = 1;  // Initialize index for the next element to process
        while (i < n) {
            // Get the node and its valid min and max values from the queue
            const {node, min, max} = queue.shift();
            
            // Check if the next element in the array can be the left child of the current node
            if (i < n && arr[i] > min && arr[i] < node.data) {
                node.left = new Node(arr[i]);
                queue.push({ node: node.left, min: min, max: node.data });  // Add the left child to the queue with updated range
                i++;  // Move to the next element in the array
            }

            // Check if the next element can be the right child of the current node
            if (i < n && arr[i] > node.data && arr[i] < max) {
                node.right = new Node(arr[i]);
                queue.push({ node: node.right, min: node.data, max: max });  // Add the right child to the queue with updated range
                i++;  // Move to the next element
            }
        }
        
        // Return the root of the constructed BST
        return root;
    }
}
