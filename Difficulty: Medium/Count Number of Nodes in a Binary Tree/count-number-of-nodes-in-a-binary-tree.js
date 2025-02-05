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

class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    /* let's construct the tree from
    the given array and assign root node to the
    the last element inserted */
    insertUtil(root, arr, i, n){
        // base case for recursion
        if (i < n){
            let temp = new Node(arr[i]);
            root = temp;
            // insert left child
            root.left = this.insertUtil(root.left, arr, 2 * i + 1, n);
            // insert right child
            root.right = this.insertUtil(root.right, arr, 2 * i + 2, n);
        }
        return root;
    }
    
    insert(arr, n){
        this.root = this.insertUtil(this.root, arr, 0, n);
    }
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
        let tree = new BinaryTree();
        tree.insert(arr, n);
        let obj = new Solution();
        console.log(obj.countNodes(tree.root)); 
        
    
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
    // Function to calculate the height of the left subtree.
    leftHeight(root) {
        let height = 0;
        // Traverse down the left side of the tree
        while (root) {
            height++;  // Increment the height at each level
            root = root.left;  // Move to the left child
        }
        return height;  // Return the total height of the left subtree
    }

    // Function to calculate the height of the right subtree.
    rightHeight(root) {
        let height = 0;
        // Traverse down the right side of the tree
        while (root) {
            height++;  // Increment the height at each level
            root = root.right;  // Move to the right child
        }
        return height;  // Return the total height of the right subtree
    }

    // Function to count the number of nodes in a binary tree.
    countNodes(root) {
        // If the root is null, the tree is empty, so return 0
        if (!root) return 0;

        // Calculate the height of the left and right subtrees
        const lh = this.leftHeight(root);
        const rh = this.rightHeight(root);

        // If the left and right heights are equal, it's a perfect binary tree
        if (lh === rh) return (1 << rh) - 1;

        // If the tree is not perfect, recursively count nodes in the left and right subtrees
        return 1 + this.countNodes(root.left) + this.countNodes(root.right);
    }
}
