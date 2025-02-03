//{ Driver Code Starts
const readline = require('readline');

// Node structure for BST
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// Function to build a BST from a level-order representation
function buildTree(values) {
    if (values.length === 0 || values[0] === 'N') return null;

    const root = new Node(parseInt(values[0]));
    const queue = [ root ];
    let i = 1;

    while (queue.length > 0 && i < values.length) {
        const currNode = queue.shift();

        if (values[i] !== 'N') {
            currNode.left = new Node(parseInt(values[i]));
            queue.push(currNode.left);
        }
        i++;

        if (i >= values.length) break;

        if (values[i] !== 'N') {
            currNode.right = new Node(parseInt(values[i]));
            queue.push(currNode.right);
        }
        i++;
    }
    return root;
}

// Main script to handle input and process test cases
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => {
    const t = parseInt(inputLines[0]);
    let index = 1;

    for (let test = 0; test < t; test++) {
        const treeInput = inputLines[index++].split(" ");
        const key = parseInt(inputLines[index++]);

        const root = buildTree(treeInput);
        const solution = new Solution();
        let pre = null, suc = null;

        const result = solution.findPreSuc(root, pre, suc, key);
        console.log(result.pre ? result.pre.key : -1, result.suc ? result.suc.key : -1);
        console.log("~");
    }
});

// } Driver Code Ends

class Solution {
    // Function to find predecessor and successor in BST
    findPreSuc(root, pre, suc, key) {
        // code here
        
        const findPreSucRec = (node, result) => {
            if (!node) {
                return result;
            }
            
            // Update predecessor if the node's key is smaller than the target key
            if (node.key < key && (result.pre === null || node.key > result.pre.key)) {
                result.pre = node;
            } 
            // Update successor if the node's key is larger than the target key
            else if (node.key > key && (result.suc === null || node.key < result.suc.key)) {
                result.suc = node;
            }
            
            // Recur for left and right subtrees
            findPreSucRec(node.left, result);
            findPreSucRec(node.right, result);
            return result;
        }
        
        // Start recursion with initial values of pre and suc
        return findPreSucRec(root, { pre, suc });
    }
}
