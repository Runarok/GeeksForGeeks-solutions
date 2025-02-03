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
        let x = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countSubtreesWithSumX(root, x)); 
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} x
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution 
{
    // Function to count the number of subtrees having sum equal to the given sum.
    countSubtreesWithSumX(root, x)
    {
        // Variable to keep track of the count of subtrees with sum equal to x
        let count = 0;

        // Helper function to calculate the sum of each subtree
        function calc(root){
            if(root === null) return 0; // If root is null, return 0

            // Calculate the sum of left and right subtrees
            let lhSum = calc(root.left);
            let rhSum = calc(root.right);
            
            // If the sum of left subtree, right subtree, and current node equals x, increment count
            if(lhSum + rhSum + root.data === x){
                count++;
            }
            
            // Return the sum of the current subtree
            return lhSum + rhSum + root.data;
        }
        
        // Call the helper function to calculate subtree sums
        calc(root);

        // Return the final count of subtrees with sum equal to x
        return count;
    }
}
