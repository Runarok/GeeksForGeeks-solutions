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
        let res = obj.verticalSum(root);
        let s = "";
        for(let it of res) s+=it+ " ";
        	console.log(s);
    }
}
// } Driver Code Ends

// User function Template for JavaScript

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
  	verticalSum(root){
  	    // Initialize queue to perform level-order traversal
  	    let queue = [{node: root, hd: 0}];
  	    let map = new Map();  // To store vertical sums at each horizontal distance (hd)
  	    let result = [];
  	    let minhd = 0, maxhd = 0;

  	    // Level order traversal to compute vertical sum
  	    while(queue.length > 0){
  	        let {node, hd} = queue.shift();
  	        
  	        // Update the sum at the current horizontal distance
  	        if(map.has(hd)){
  	            map.set(hd, map.get(hd) + node.data);
  	        } else {
  	            map.set(hd, node.data);
  	        }

  	        // Update min and max horizontal distance
  	        if(hd > maxhd){
  	            maxhd = hd;
  	        }
  	        if(hd < minhd){
  	            minhd = hd;
  	        }

  	        // Add left and right children to queue with updated horizontal distance
  	        if(node.left != null){
  	            queue.push({node: node.left, hd: hd - 1});
  	        }
  	        if(node.right != null){
  	            queue.push({node: node.right, hd: hd + 1});
  	        }
  	    }

  	    // Collect the vertical sums in order from minhd to maxhd
  	    for(let i = minhd; i <= maxhd; i++){
  	        result.push(map.get(i));
  	    }
  	    return result;
  	}
}
