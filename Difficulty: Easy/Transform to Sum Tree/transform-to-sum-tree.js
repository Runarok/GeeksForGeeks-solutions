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

let s = "";
function inorder(root){
	if(root === null) return;
	inorder(root.left);
	s = s + root.data + " ";
	inorder(root.right);
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
        obj.toSumTree(root);
		s="";
		inorder(root);
		console.log(s);        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

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
 */
class Solution {
  	// Function to convert the binary tree into a sum tree
    toSumTree(root) {
        // If the root is null, return 0
        if (root === null) {
            return 0;
        }

        // Recursively calculate the sum of the left and right subtrees
        const leftSum = this.toSumTree(root.left);
        const rightSum = this.toSumTree(root.right);

        // Store the current node's original value
        const oldValue = root.data;

        // Update the current node's value to be the sum of the left and right subtrees
        root.data = leftSum + rightSum;

        // Return the sum of the original node's value and its updated subtree sums
        return oldValue + root.data;
    }
}
