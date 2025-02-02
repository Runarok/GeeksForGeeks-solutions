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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
let s="";
function printPreorder(node)
{
    if (node === null)
       return;
    s+=node.key;
    printPreorder(node.left);
    printPreorder(node.right);
    
}
function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let brr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            brr[i] = input_ar1[i];
        }
        let obj = new Solution();
        obj.buildTree(arr, brr, 0, n-1, n);
        console.log(s);
        
    }
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {number[]} inorder
 * @param {number[]} levelOrder
 * @param {number} iStart
 * @param {number} iEnd
 * @param {number} n
 * @returns {void}
 */

class Solution {
  constructor() {
    this.hashMap1 = {};  // To store index of inorder elements
    this.hashMap2 = {};  // To store index of levelorder elements
  }

  // Function to construct the binary tree
  constructTree(leftIndex, rightIndex, inorder, levelorder) {
    if (leftIndex > rightIndex) {
      return null;
    }

    let min = Number.MAX_VALUE;
    let minIndex = -1;

    // Finding the minimum value in level order between the left and right range in inorder
    for (let i = leftIndex; i <= rightIndex; i++) {
      const val = this.hashMap2[inorder[i]];  // Using hashMap2 to get levelorder index
      if (val < min) {
        min = val;
        minIndex = i;
      }
    }

    let value = inorder[minIndex];
    const node = new Node(value);

    // Recursively construct left and right subtrees
    node.left = this.constructTree(leftIndex, minIndex - 1, inorder, levelorder);
    node.right = this.constructTree(minIndex + 1, rightIndex, inorder, levelorder);

    return node;
  }

  // Preorder traversal to build the result
  preorder(node) {
    if (node === null) return;
    s += node.key + ' ';  // Concatenating keys in preorder fashion
    this.preorder(node.left);
    this.preorder(node.right);
  }

  // Main function to build the tree
  buildTree(inorder, levelorder, n) {
    this.hashMap1 = {};  // Reset the hash maps
    this.hashMap2 = {}; 
    s = '';  // Reset the string for preorder result

    // Populate hash maps for fast index lookups
    for (let i = 0; i < inorder.length; i++) {
      this.hashMap1[inorder[i]] = i;
    }
    for (let i = 0; i < levelorder.length; i++) {
      this.hashMap2[levelorder[i]] = i;
    }

    // Construct the tree using the helper function
    const root = this.constructTree(0, inorder.length - 1, inorder, levelorder);

    // Perform preorder traversal
    this.preorder(root);

    // Return the result tree's root
    return root;
  }
}
