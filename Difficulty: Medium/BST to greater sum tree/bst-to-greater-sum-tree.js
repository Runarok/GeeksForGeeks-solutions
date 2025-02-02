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
function printInorder(root){
	if(!root)
		return;
	printInorder(root.left);
	s+=root.data+" ";
	printInorder(root.right);
}
function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
       
        obj.transformTree(root);
		s="";
		printInorder(root);
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
    grandSum = 0;

    // In-order traversal of the tree with an optional flag to update node data
    inOrder(root, list, updateData) {
        if (!root) {
            return;
        }
        // Traverse the left subtree
        this.inOrder(root.left, list, updateData);

        // Update the node data or accumulate the sum
        if (updateData) {
            this.grandSum -= root.data; // Subtract current node value
            root.data = this.grandSum;   // Update node data with grand sum
        } else {
            this.grandSum += root.data; // Accumulate sum of node data
        }

        // Traverse the right subtree
        this.inOrder(root.right, list, updateData);
    }

    // Function to transform the tree by calculating new node values
    transformTree(root) {
        let list = [];
        // Perform in-order traversal to accumulate sum
        this.inOrder(root, list);

        // Perform in-order traversal again to update node values
        this.inOrder(root, list, true);

        // Return the transformed root
        return root;
    }
}
