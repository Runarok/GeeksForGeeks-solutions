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

class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}

function buildTree(str)
{
	// Corner Case
	if (str.length === 0 || str[0] == 'N')
		return null;

	// Creating vector of strings from input
	// string after spliting by space
	let ip = new Array();
    
    let ip_str = str.split(" ");
    
	for (let i=0;i<ip_str.length;i++)
		ip.push(ip_str[i]);

	// Create the root of the tree
    let root = new Node(parseInt(ip[0]));

	// Push the root to the queue
	let queue = new Array();
	queue.push(root);

	// Starting from the second element
	let i = 1;
	while (queue.length!==0 && i < ip.length) {

		// Get and remove the front of the queue
		let currNode = queue[0];
		queue.shift();

		// Get the current node's value from the string
		let currVal = ip[i];

		// If the left child is not null
		if (currVal != "N") {

			// Create the left child for the current node
			currNode.left = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.left);
		}

		// For the right child
		i++;
		if (i >= ip.length)
			break;
		currVal = ip[i];

		// If the right child is not null
		if (currVal != "N") {

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
    for(let i=0;i<t;i++)
    {
    	let k = parseInt(readLine());
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.btWithKleaves(root,k);
		let s = "";
		for(let j = 0;j<res.length;j++) s = s + res[j] + " ";
		console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number[]}
*/
class Solution {
    btWithKleaves(root, k) {
        const result = [];
        
        // Helper function to count leaves and add nodes to result
        function countLeaves(node) {
            if (node === null) {
                return 0;  // No leaves in null subtree
            }
            
            if (node.left === null && node.right === null) {
                return 1;  // It's a leaf node
            }
            
            const leftLeaves = countLeaves(node.left);
            const rightLeaves = countLeaves(node.right);
            
            // If the current node has exactly 'k' leaves in its subtree
            if (leftLeaves + rightLeaves === k) {
                result.push(node.data);
            }
            
            // Return the total number of leaves in this subtree
            return leftLeaves + rightLeaves;
        }
        
        // Start the postorder traversal and counting leaves
        countLeaves(root);
        
        // If no result found, return [-1]
        if (result.length === 0) {
            result.push(-1);
        }
        
        return result;
    }
}
