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
		if (currVal != 'N') {

			// Create the left child for the current node
			currNode.left = new Node(parseInt(currVal));

			// Push it to the queue
			queue.push(currNode.left);
		}

		// For the right child
		i++;
		if (i >= str.length)
			break;
		currVal = str[i];

		// If the right child is not null
		if (currVal != 'N') {

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
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let target = input_ar1[0];
        let k = input_ar1[1];
        let obj = new Solution();
        console.log(obj.sum_at_distK(root, target, k));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @param {number} target
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
    // Function to find the sum of all nodes at a distance K from the target node.
    sum_at_distK(root, target, k) {
        if (!root) return 0; // If the root is null, return 0

        let parentMap = new Map(); // Map to store parent nodes

        // Function to build parent-child relationship map
        function buildParentMap(node, parent) {
            if (!node) return;
            if (parent) {
                parentMap.set(node, parent); // Set parent for the current node
            }
            buildParentMap(node.left, node); // Traverse left subtree
            buildParentMap(node.right, node); // Traverse right subtree
        }
        
        // Build the parent map for the whole tree
        buildParentMap(root, null);
        
        // Function to find the target node
        function findTargetNode(root, targetValue) {
            if (!root) return null; // Return null if node is not found
            if (root.data === targetValue) return root; // Return node if target is found
            
            // Search recursively in left and right subtrees
            let leftSearch = findTargetNode(root.left, targetValue);
            if (leftSearch) return leftSearch;
            
            return findTargetNode(root.right, targetValue);
        }
        
        // Find the target node
        let targetNode = findTargetNode(root, target);
        if (!targetNode) return 0; // Return 0 if the target node is not found
        
        let queue = [{ node: targetNode, distance: 0 }]; // Queue for BFS traversal
        let visited = new Set(); // Set to track visited nodes
        let sum = 0; // Variable to store the sum of node values at distance k

        // Perform BFS to explore nodes at distance k from the target
        while (queue.length > 0) {
            let { node, distance } = queue.shift();
            
            if (visited.has(node)) continue; // Skip already visited nodes
            
            visited.add(node); // Mark the node as visited

            // Add the node's value to the sum if it's within distance k
            if (distance <= k) {
                sum += node.data;
            }

            // If the distance is greater than or equal to k, no need to explore further
            if (distance >= k) continue;

            // Explore the left, right, and parent nodes if not visited
            if (node.left && !visited.has(node.left)) {
                queue.push({ node: node.left, distance: distance + 1 });
            }
            if (node.right && !visited.has(node.right)) {
                queue.push({ node: node.right, distance: distance + 1 });
            }
            if (parentMap.has(node) && !visited.has(parentMap.get(node))) {
                queue.push({ node: parentMap.get(node), distance: distance + 1 });
            }
        }

        return sum; // Return the sum of node values at distance k
    }
}
