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
        this.key=x;
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
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.diagonal(root);
        let s = "";
        for(let j = 0;j<res.length;j++){
        	s = s+res[j]+" ";
        }
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
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number[]}
*/
class Solution {
  	diagonal(root){
  		// Initialize a queue and an array to store the result
  		let q  = [];
  		let ans  = [];
  		
  		// If the root is null, return an empty result
  		if(root == null){
  		    return ans;
  		}
  		
  		// Start processing from the root node
  		q.push(root);
  		
  		// Process the queue while there are nodes left to process
  		while(q.length > 0){
  		    let temp = q.shift();  // Dequeue the first node from the queue
  		    
  		    // Traverse the diagonal by moving to the right child
  		    while(temp != null){
  		        // If the left child exists, push it to the queue
  		        if(temp.left != null){
  		            q.push(temp.left);
  		        }
  		        // Add the current node's key to the result
  		        ans.push(temp.key);
  		        // Move to the right child for the next diagonal element
  		        temp = temp.right;
  		    }
  		}
  		// Return the result of diagonal traversal
  		return ans;
  	}
}
