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
function postorder(root){
    if(root === null) return;
    postorder(root.left);
    postorder(root.right);
    s = s + root.data + " ";
}



function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
		let s_tree = readLine().trim();
		let root = buildTree(s_tree);
        let obj = new Solution();
        obj.convertToMaxHeapUtil(root);
        s="";
        postorder(root);
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

/**
 * @param {Node} root
*/
class Solution {
    inorderTraversal(root) {
        // Helper function for inorder traversal
        let result = [];
        if (root) {
            result = result.concat(this.inorderTraversal(root.left));
            result.push(root.data);
            result = result.concat(this.inorderTraversal(root.right));
        }
        return result;
    }

    post(root, v) {
        if (root) {
            this.post(root.left, v);  // Traverse the left subtree
            this.post(root.right, v); // Traverse the right subtree
            root.data = v.pop();      // Pop the last element from v and assign it to the node
        }
    }

    convertToMaxHeapUtil(root) {
        // Get the inorder traversal of the tree (sorted elements)
        let values = this.inorderTraversal(root);

        // Reverse the inorder traversal to simulate a Max Heap
        values.reverse();

        // Build the Max Heap by assigning values using postorder traversal
        this.post(root, values);
    }
}
