//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

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
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

// printing binary tree inorder form
function inorder(root) {
    let s = "";

    function inorderUtil(node) {
        if (!node) {
            return;
        }
        inorderUtil(node.left);
        s += node.data;
        s += " ";
        inorderUtil(node.right);
    }

    inorderUtil(root);
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_node = readLine().split(' ');
        let node = buildTree(input_node);

        let obj = new Solution();
        let res = obj.getSize(node);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


/*

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    /**
    * @param Node node
    * @returns number
    */
    getSize(node) {
        // Base case: if the node is null, return 0
        if (node === null) {
            return 0;
        }
        
        // Recursive case: size of the current tree is 1 (for the node itself)
        // plus the size of the left and right subtrees
        return 1 + this.getSize(node.left) + this.getSize(node.right);
    }
}
