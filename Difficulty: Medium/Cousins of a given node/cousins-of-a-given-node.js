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
function pointer(root,n)
{
	if (!root)
		return null;

	if (root.key === n)
		return root;

	let l = pointer(root.left, n);
	if (l && l.key === n)
		return l;

	let r = pointer(root.right, n);
	return r;
}
function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let s_tree = readLine().trim();
        let root = buildTree(s_tree);
        let obj = new Solution();
        let p = pointer(root,n);
        let res = obj.printCousins(root,n);
        let s = "";
        for(let j = 0;j<res.length;j++){
        	s+=res[j]+" ";
        }
        console.log(s);        
    }
}
// } Driver Code Ends


//User function Template for javascript

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
 * @param {Node} node_to_find
 * @return {number[]}
*/
class Solution {
    printCousins(root, node_to_find) {
        // If the root is null, return [-1] as there are no cousins
        if (root == null) return [-1];

        // Initialize a queue for level-order traversal
        let nodeQueue = [{ node: root, parent: null }];
        let cousinNodes = [];
        let currentLevel = 0, targetLevel = -1, targetParent = null;

        // Traverse the tree level by level
        while (nodeQueue.length) {
            let levelSize = nodeQueue.length;

            for (let i = 0; i < levelSize; i++) {
                let { node, parent } = nodeQueue.shift();

                // If we are at the target level and the parent is different, add to result
                if (currentLevel === targetLevel && parent !== targetParent) {
                    cousinNodes.push(node.key);
                }

                // Check left child
                if (node.left) {
                    if (node.left.key === node_to_find) {
                        targetLevel = currentLevel + 1;
                        targetParent = node;
                    }
                    nodeQueue.push({ node: node.left, parent: node });
                }

                // Check right child
                if (node.right) {
                    if (node.right.key === node_to_find) {
                        targetLevel = currentLevel + 1;
                        targetParent = node;
                    }
                    nodeQueue.push({ node: node.right, parent: node });
                }
            }

            currentLevel++;

            // If we have found cousin nodes at the target level, stop traversal
            if (cousinNodes.length) break;
        }

        // If no cousins were found, return [-1]
        return cousinNodes.length === 0 ? [-1] : cousinNodes;
    }
}
