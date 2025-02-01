//{ Driver Code Starts
'use strict';

// Node class to represent a tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isValidBSTUtil(root, lower, upper) {
    if (!root) return true;
    if (root.data <= lower || root.data >= upper) return false;
    return isValidBSTUtil(root.left, lower, root.data) &&
           isValidBSTUtil(root.right, root.data, upper);
}

function isValidBST(root) {
    return isValidBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function height(root) {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if (leftHeight === -1 || rightHeight === -1 ||
        Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) { return height(root) !== -1; }

function inorder(root, v) {
    if (!root) return;
    inorder(root.left, v);
    v.push(root.data);
    inorder(root.right, v);
}

// Initial Template for JavaScript
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let nums = readLine().split(" ").map(Number);

        let solution = new Solution();
        let root = solution.sortedArrayToBST(nums);

        let v = [];
        inorder(root, v);

        if (!isValidBST(root) || JSON.stringify(v) !== JSON.stringify(nums)) {
            console.log("false");
            continue;
        }

        if (isBalanced(root)) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} nums - Sorted array to be converted into a binary search tree (BST)
 * @return {Node} - Root node of the constructed BST
 */

class Solution {
    
    // Helper function to construct the BST recursively
    constructBst(nums, start, end) {
        // Base case: If start index is greater than end, return null (no node)
        if (start > end) return null;

        // Find the middle index to maintain balanced tree
        let mid = Math.floor((start + end) / 2);

        // Create a new node with the value at the middle of the array
        let root = new Node(nums[mid]);

        // Recursively construct the left and right subtrees
        root.left = this.constructBst(nums, start, mid - 1);  // Left subtree
        root.right = this.constructBst(nums, mid + 1, end);   // Right subtree

        // Return the root node of the BST
        return root;
    }

    // Function to convert the sorted array into a balanced BST
    sortedArrayToBST(nums) {
        // Call the helper function to construct the BST from the entire array
        return this.constructBst(nums, 0, nums.length - 1);
    }
}
