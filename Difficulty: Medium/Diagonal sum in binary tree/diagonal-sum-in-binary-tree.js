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
        let res = obj.diagonalSum(root);
        let s = "";
        for(let it of res)
        	s+=it+" ";
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
 * @return {number[]} 
*/
class Solution {
    diagonalSum(root) {
        // If root is null, return an empty array
        if (!root) return [];
        
        // Create a map to store the sum of nodes at each diagonal
        let map = new Map();
        
        // Depth-first search function to traverse the tree and calculate the diagonal sum
        const dfs = (node, diagonal) => {
            if (!node) return;
            
            // Add the current node's data to the corresponding diagonal sum
            map.set(diagonal, map.get(diagonal) + node.data || node.data);
            
            // Recur for the left subtree with diagonal + 1
            if (node.left) dfs(node.left, diagonal + 1);
            
            // Recur for the right subtree with the same diagonal
            if (node.right) dfs(node.right, diagonal);
        }
        
        // Start DFS traversal from the root node with diagonal 0
        dfs(root, 0);
        
        // Sort the diagonals and return the sums of each diagonal
        return [...map.entries()]
                .sort((a, b) => a[0] - b[0])
                .map(entry => entry[1]);
    }
}
