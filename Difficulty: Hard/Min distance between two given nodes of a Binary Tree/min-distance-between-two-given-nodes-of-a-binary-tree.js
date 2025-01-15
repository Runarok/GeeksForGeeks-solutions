//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] == 'N') return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();

    let ip_str = str.split(" ");

    for (let i = 0; i < ip_str.length; i++) ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== 0 && i < ip.length) {

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
        if (i >= ip.length) break;
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
    for (let i = 0; i < t; i++) {
        let s_tree = readLine().trim();
        let n1 = parseInt(readLine());
        let n2 = parseInt(readLine());
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.findDist(root, n1, n2);
        console.log(res);
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
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 
class Solution {
    // Function to find the distance between two nodes
    findDist(root, a, b) {
        // Find the Lowest Common Ancestor (LCA) of nodes a and b
        const lca = this.lowestCommonAncestor(root, a, b);
        
        // If LCA is null, return -1 (not found)
        if (!lca) return -1;
        
        // Find the distance from LCA to a and LCA to b
        const distA = this.distanceFromLCA(lca, a, 0);
        const distB = this.distanceFromLCA(lca, b, 0);
        
        // Return the sum of both distances
        return distA + distB;
    }

    // Helper function to find the LCA of two nodes
    lowestCommonAncestor(root, a, b) {
        // Base case: if root is null or matches either a or b, return root
        if (root === null || root.data === a || root.data === b) {
            return root;
        }

        // Recursively find the LCA in the left and right subtrees
        const left = this.lowestCommonAncestor(root.left, a, b);
        const right = this.lowestCommonAncestor(root.right, a, b);

        // If both left and right are non-null, root is the LCA
        if (left && right) {
            return root;
        }

        // Otherwise, return whichever is non-null (left or right)
        return left ? left : right;
    }

    // Helper function to find the distance from LCA to a given node
    distanceFromLCA(root, target, dist) {
        // Base case: if root is null, return -1 (node not found)
        if (root === null) return -1;

        // If the target node is found, return the current distance
        if (root.data === target) {
            return dist;
        }

        // Search for the target node in the left and right subtrees
        const leftDist = this.distanceFromLCA(root.left, target, dist + 1);
        const rightDist = this.distanceFromLCA(root.right, target, dist + 1);

        // Return the non-negative distance
        return Math.max(leftDist, rightDist);
    }
}
