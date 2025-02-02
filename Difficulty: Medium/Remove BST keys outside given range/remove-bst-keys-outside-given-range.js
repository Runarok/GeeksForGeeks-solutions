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
function inOrder(root){
	if(!root)
		return;
	inOrder(root.left);
	s+=root.data+" ";
	inOrder(root.right);
}


function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
    	let input = readLine().split(" ").map((x)=>parseInt(x));
    	let l = input[0];
    	let r = input[1];
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
       
        let res = obj.removekeys(root,l,r);
        s = "";
        inOrder(res);
        console.log(s);
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
 * @param {number} l
 * @param {number} r
 * @return {Node} 
*/
class Solution {
    removekeys(root, l, r) {
        // Base case: if the tree is empty, return null
        if (root === null) {
            return null;
        }
        
        // If the current node's value is less than l, remove it and its left subtree
        if (root.data < l) {
            return this.removekeys(root.right, l, r);  // Only check the right subtree
        }
        
        // If the current node's value is greater than r, remove it and its right subtree
        if (root.data > r) {
            return this.removekeys(root.left, l, r);  // Only check the left subtree
        }
        
        // If the current node's value is within range, recursively process both subtrees
        root.left = this.removekeys(root.left, l, r);
        root.right = this.removekeys(root.right, l, r);
        
        return root;
    }
}
