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
        let obj = new Solution();
        let res = obj.topView(root);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Node} root
 */

/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to return a list of nodes visible from the top view
    // from left to right in Binary Tree.
    topView(root) {
        if (!root) {
            return [];
        }

        let queue = [{ node: root, hd: 0 }];  // Queue to store nodes along with their horizontal distance
        let map = new Map();  // Map to store the first node encountered at each horizontal distance
        let final = [];  // Array to store the result
        
        // Perform level-order traversal
        while (queue.length) {
            const { node, hd } = queue.shift();
            
            // If no node is already recorded at this horizontal distance, add the node's data
            if (!map.has(hd)) {
                map.set(hd, node.data);
            }
            
            // Add left and right children to the queue with updated horizontal distances
            if (node.left) {
                queue.push({ node: node.left, hd: hd - 1 });
            }
            if (node.right) {
                queue.push({ node: node.right, hd: hd + 1 });
            }
        }
        
        // Sort horizontal distances and collect the nodes in sorted order
        let result = [...map.keys()].sort((a, b) => a - b);
        for (const key of result) {
            final.push(map.get(key));  // Add the node value to the final result
        }
        
        return final;  // Return the list of nodes visible from the top view
    }
}
