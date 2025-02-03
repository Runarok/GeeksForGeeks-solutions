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


function insert(root,key) {
   root = insertRec(root, key);
}
function insertRec(root,key) {
    if (root === null) {
        root = new Node(key);
        return root;
    }
    if (key < root.data)
        root.left = insertRec(root.left, key);
    else if (key > root.data)
        root.right = insertRec(root.right, key);
    return root;
}



function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let root = new Node(arr[0]);
        for(let j = 1;j<n;j++){
          insert(root,arr[j]);
        }
        let obj = new Solution();
        let res = obj.isDeadEnd(root);
        console.log(Number(res));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript


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
   * @param {Node} root
   * @return {boolean}
  */

class Solution {
    // Function to check if there is a dead end in the binary tree
    isDeadEnd(root) {
        let flag = 0;

        // Helper function to traverse the tree and check the condition
        function helper(node, minVal, maxVal) {
            if (node === null) {
                return 0;
            }

            const val = node.data;

            // Check if it's a leaf node and its value is in the dead end condition
            if (node.left === null && node.right === null &&
                (minVal < val && val < maxVal) && 
                (val - minVal === 1 && maxVal - val === 1)) {
                flag = 1;
                return 1;
            }

            // Recursively check the left and right subtrees with updated ranges
            return helper(node.left, minVal, val) || helper(node.right, val, maxVal);
        }

        // Start the recursion with the full range
        helper(root, 0, Number.POSITIVE_INFINITY);
        return flag;
    }
}
