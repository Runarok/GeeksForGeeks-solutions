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

function isBST(n, lower, upper)
{
    if(!n) return true;
    if( n.data <= lower || n.data >= upper ) return false;
    return (  isBST( n.left, lower, n.data )  &&  isBST( n.right, n.data, upper )  );
}

function compare( a, b, mismatch )
{
    if( !a && !b ) return true;
    if( !a || !b ) return false;
    
    if( a.data != b.data )
        mismatch.push( [a.data,b.data] );
    
    return ( compare( a.left, b.left, mismatch ) && compare( a.right, b.right, mismatch ) );
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let duplicate = buildTree(input_ar1);
        let obj = new Solution();
        root = obj.correctBST(root); 
        if( !isBST(root, -999999999, 999999999) ){
            console.log("0");
        }
        else{
            let mismatch = [];
            if( !compare( root, duplicate, mismatch) ){
                console.log("0");
            }
            else{
                if( mismatch.length !=2 || 
                    mismatch[0][0] != mismatch[1][1] || 
                    mismatch[0][1] != mismatch[1][0] )
                    console.log("0");
                else console.log("1");
            }
        }
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} root
 * @returns {Node}
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

class Solution {
    constructor() {
        this.first = null;  // First incorrect node in the BST
        this.second = null; // Second incorrect node in the BST
        this.prev = new Node(Number.MIN_SAFE_INTEGER); // Previous node for inorder comparison
    }
    
    // Inorder traversal to identify the swapped nodes
    inorderTraversal(root) {
        if (!root) return;

        // Traverse left subtree
        this.inorderTraversal(root.left);
        
        // If the current node is smaller than the previous node, there's a swap issue
        if (this.prev && root.data < this.prev.data) {
            if (!this.first) {
                // First occurrence of an out-of-order node
                this.first = this.prev;
                this.second = root;
            } else {
                // Second occurrence of an out-of-order node
                this.second = root;
            }
        }

        // Update previous node to the current one
        this.prev = root;

        // Traverse right subtree
        this.inorderTraversal(root.right);
    }
    
    // Function to fix the BST by swapping back the incorrect nodes
    correctBST(root) {
        this.inorderTraversal(root);
        
        // Swap the values of the two incorrect nodes
        if (this.first && this.second) {
            const temp = this.first.data;
            this.first.data = this.second.data;
            this.second.data = temp;
        }
        
        return root; // Return the corrected BST
    }
}
