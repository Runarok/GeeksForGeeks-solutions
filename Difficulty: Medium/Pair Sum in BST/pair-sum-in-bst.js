//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

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
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let target = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findTarget(root, target);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/*
class Node
{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} target
 * @return {number}
 */
class Solution {
    // Function to perform inorder traversal and populate the list
    inorder(root, list) {
        if (root === null) return;
        
        // Traverse the left subtree
        this.inorder(root.left, list);
        
        // Add the current node's data to the list
        list.push(root.data);
        
        // Traverse the right subtree
        this.inorder(root.right, list);
    }
    
    // Function to check if there exists a pair whose sum is equal to target
    pairList(list, target) {
        let i = 0;
        let j = list.length - 1;
        
        // Use two pointers to find a pair with the desired sum
        while (i < j) {
            let sum = list[i] + list[j];
            
            // If sum is smaller than target, move the left pointer
            if (sum < target) {
                i++;
            }
            // If sum is larger than target, move the right pointer
            else if (sum > target) {
                j--;
            }
            // If a pair with the target sum is found, return 1
            else {
                return 1;
            }
        }
        
        // If no such pair exists, return 0
        return 0;
    }

    // Function to find if there are two nodes in the BST whose sum equals the target
    findTarget(root, target) {
        let list = [];
        
        // Get the inorder traversal of the tree
        this.inorder(root, list);
        
        // Check if there exists a pair with the target sum
        return this.pairList(list, target);
    }
}
