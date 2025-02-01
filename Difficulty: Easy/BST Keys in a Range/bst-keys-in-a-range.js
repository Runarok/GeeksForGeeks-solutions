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
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let l = input_ar2[0];
        let h = input_ar2[1];
        let obj = new Solution();
        let res = obj.printNearNodes(root, l, h); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] + " ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
*/


class Solution {
    // Helper function to traverse the tree and collect nodes within the range
    solve(root, low, high, ans) {
        if (root === null) return;
        
        // Recur for the left subtree
        this.solve(root.left, low, high, ans);
        
        // If the current node's data is within the specified range, add it to the result
        if (root.data >= low && root.data <= high) {
            ans.push(root.data);
        }
        
        // Recur for the right subtree
        this.solve(root.right, low, high, ans);
    }

    // Function to return the list of nodes within the specified range [low, high]
    printNearNodes(root, low, high) {
        let ans = [];
        
        // Call the helper function to fill the result array
        this.solve(root, low, high, ans);
        
        // Return the result containing the nodes in the range
        return ans;
    }
}
