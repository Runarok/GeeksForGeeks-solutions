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
        let res = obj.bottomView(root); 
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
class Solution {
    // Function to return a list containing the bottom view of the given tree.
    bottomView(root) {
        let ans = [];  // Array to store the final result
        let hd_dict = {};  // Dictionary to store (horizontal distance: [node value, height])

        // Helper function for bottom view traversal
        function bottom(root, hd, h) {
            if (!root) return;  // Base case: if the node is null, return
            
            // Traverse left subtree (moving left decreases the horizontal distance)
            if (root.left) {
                bottom(root.left, hd - 1, h + 1);
            }
            
            // Update the bottom view for current horizontal distance (hd)
            if (hd_dict[hd]) {
                let [curr, curr_h] = hd_dict[hd];
                if (h >= curr_h) {
                    // If the current node is deeper or at the same height, update the value
                    hd_dict[hd] = [root.data, h];
                }
            } else {
                // If no node has been added at this horizontal distance, add the current node
                hd_dict[hd] = [root.data, h];
            }

            // Traverse right subtree (moving right increases the horizontal distance)
            if (root.right) {
                bottom(root.right, hd + 1, h + 1);
            }
        }

        // Start the recursive function to calculate the bottom view
        bottom(root, 0, 0);

        // Sort the horizontal distances and populate the result list
        let keys = Object.keys(hd_dict).map(Number).sort((a, b) => a - b);
        
        // Add the node values at each horizontal distance to the result array
        for (let key of keys) {
            ans.push(hd_dict[key][0]);
        }
        
        return ans;
    }
}
