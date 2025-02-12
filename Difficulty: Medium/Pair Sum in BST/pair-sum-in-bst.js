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

function newNode(root, data)
{
    if(root === null)
        root = new Node(data);
    else if(data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let root = null;
        for(let i=0; i<n; i++){
            root = newNode(root, input_ar1[i]);
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        if(obj.findPair(root, x)){
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} X
 * @returns {boolean}
*/


class Solution {
  findPair(root, X) {
    const values = [];
    
    // Helper function to perform in-order traversal
    const inOrderTraversal = (node) => {
      if (node === null) {
        return;
      }
      inOrderTraversal(node.left);  // Traverse the left subtree
      values.push(node.data);       // Add the node value to the values array
      inOrderTraversal(node.right); // Traverse the right subtree
    };
    
    // Perform in-order traversal to fill the values array
    inOrderTraversal(root);
    
    // Use two-pointer technique to find if there's a pair with sum X
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
      const sum = values[left] + values[right];
      if (sum === X) {
        return true; // Pair found
      } else if (sum < X) {
        left++; // Move left pointer to the right to increase sum
      } else {
        right--; // Move right pointer to the left to decrease sum
      }
    }
    
    return false; // No pair found
  }
}
