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

   // Create the root node of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root node to the queue
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
        let inputAr = readLine().split(' ');
        let root = buildTree(inputAr);
        let node = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nextRight(root,node);
        if(res === null) console.log("-1");
        else console.log(res.data);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {Node} root
 * @param {number} key
 * @returns {Node}
*/

class Solution {
    // Function to find the next right of the given key node.
    nextRight(root, key) {
        if (!root) {
            return null; // No tree
        }

        let queue = [root]; // Initialize queue with the root node
        while (queue.length > 0) {
            let levelSize = queue.length;
            let nextNode = null;
            
            // Process each level one by one
            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift();
                
                // If we find the key node, check the next node
                if (currentNode.data === key) {
                    return i < levelSize - 1 ? queue[0] : null; // next node in queue if exists
                }

                // Add left and right children of the current node to the queue
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }

        return -1; // If no node with the key was found
    }
}
