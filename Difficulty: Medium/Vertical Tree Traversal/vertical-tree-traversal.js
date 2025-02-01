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

function inorderUtil(root, res){
    if (root === null)
        return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.verticalOrder(root); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
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
    // Function to find the vertical order traversal of Binary Tree.
    verticalOrder(root) {
        let hd = 0;  // Horizontal distance from the root (initially 0 for root)
        let map = new Map();  // Map to store the nodes corresponding to each horizontal distance
        const queue = [];  // Queue for level order traversal (BFS)
        
        queue.push([root, hd]);  // Add the root node along with its horizontal distance (0)
        
        // Variables to track the minimum and maximum horizontal distance
        let mn = 0, mx = 0;
        
        // Level order traversal using queue
        while (queue.length > 0) {
            const [node, hd] = queue.shift();  // Pop the front element from the queue (node and its horizontal distance)
            
            // If the horizontal distance doesn't exist in the map, initialize an empty array
            if (!map.has(hd)) {
                map.set(hd, []);
            }
            
            // Push the node's data to the corresponding horizontal distance array in the map
            map.get(hd).push(node.data);
            
            // Add the left child to the queue with horizontal distance - 1
            if (node.left) {
                queue.push([node.left, hd - 1]);
            }
            
            // Add the right child to the queue with horizontal distance + 1
            if (node.right) {
                queue.push([node.right, hd + 1]);
            }
            
            // Update the minimum and maximum horizontal distance
            mn = Math.min(mn, hd);
            mx = Math.max(mx, hd);
        }
        
        // Prepare the result array by collecting node data from each horizontal distance (mn to mx)
        let result = [];
        for (let i = mn; i <= mx; i++) {
            if (map.has(i)) {
                const keys = map.get(i);
                result.push(keys.join(" "));  // Join the nodes' data at each horizontal distance with a space
            }
        }
        
        return result;  // Return the final result
    }
}
