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
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.maxNodeLevel(root);
        console.log(res);
    
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
 * @return {number} 
*/
class Solution {
  	maxNodeLevel(root){
  		//code here
  		if (root == null) {
            return -1;
        }

        var queue = [];
        queue.push(root);

        // Current level  
        var level = 0;

        // Maximum Nodes at the same level  
        var max = -Infinity;

        // Level having maximum Nodes  
        var level_no = 0;

        while (queue.length > 0) {
            // Number of Nodes at the current level  
            var nodeCount = queue.length;

            // If this is the maximum count so far, update level_no  
            if (nodeCount > max) {
                max = nodeCount;
                level_no = level;
            }

            // Process nodes of the current level  
            while (nodeCount > 0) {
                var node = queue.shift();  // Dequeue the node
                if (node.left != null) {
                    queue.push(node.left);  // Enqueue left child
                }
                if (node.right != null) {
                    queue.push(node.right);  // Enqueue right child
                }
                nodeCount--;
            }

            // Increment the level for next iteration  
            level++;
        }

        return level_no;  // Return the level with maximum nodes
  	}
}
