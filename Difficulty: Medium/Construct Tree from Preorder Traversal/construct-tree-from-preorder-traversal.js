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
		let n = parseInt(readLine());
		let pre = readLine().split(" ").map((x) =>parseInt(x));        
		let preLN = readLine().split(" ");        
        let obj = new Solution();
        let res = obj.constructTree(n,pre,preLN);
        s="";
        inorder(res);
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

class Solution {
    /**
     * Function to construct a binary tree from given preorder traversal and 'LN' information
     * @param {number} n - The number of nodes in the tree
     * @param {number[]} pre - The preorder traversal of the tree
     * @param {string[]} preLN - A string array indicating if a node is a leaf ('L') or an internal node ('N')
     * @return {Node} - The root node of the constructed binary tree
     */
    constructTree(n, pre, preLN) {
        let index = { value: 0 }; // Helper object to keep track of the current index during tree construction

        function buildTree() {
            // If all nodes are processed, return null
            if (index.value >= n) {
                return null;
            }

            // Get the current node's value from the preorder array
            let currentIndex = index.value;
            let node = new Node(pre[currentIndex]);
            index.value++; // Move to the next node in the preorder array

            // If the current node is not a leaf (i.e., it has children)
            if (preLN[currentIndex] === 'N') {
                // Recursively construct the left and right subtrees
                node.left = buildTree();
                node.right = buildTree();
            }

            // Return the constructed node
            return node;
        }

        // Start the tree construction
        return buildTree();
    }
}
