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

        let input_root = readLine().split(' ');
        let root = buildTree(input_root);
        let nd = readLine().split(' ').map(Number);
        let k = nd[0];
        let x = nd[1];
        let y = nd[2];
        // let k = parseInt(readLine());

        // let x = parseInt(readLine());

        // let y = parseInt(readLine());

        let obj = new Solution();
        let res = obj.kthCommonAncestor(root, k, x, y);
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
    kthCommonAncestor(root, k, x, y) {
        this.ans = Number.POSITIVE_INFINITY;
        this.f(root, k, x, y);
        return this.ans === Number.POSITIVE_INFINITY ? -1 : this.ans;
    }

    f(root, k, x, y) {
        if (!root) return Number.POSITIVE_INFINITY; // Default value, no x or y found on this path

        // Search for x and y in the left and right subtrees
        let left = this.f(root.left, k, x, y);
        let right = this.f(root.right, k, x, y);

        let retval = Number.POSITIVE_INFINITY; // Default return value, no x or y found in this subtree

        if (left < 0 && right < 0) { // If one value is in the left subtree and the other is in the right
            retval = 0; // This node is the lowest common ancestor
        } else if (left < 0 || right < 0) { // If only one value is found in either subtree
            retval = Math.min(left, right); // Return the position of the found value
        } else if (left !== Number.POSITIVE_INFINITY || right !== Number.POSITIVE_INFINITY) { // If both x and y are found
            retval = Math.min(left, right); // Calculate the distance of the ancestor from x and y
        }

        if (root.data === x || root.data === y) { // If the current node is x or y
            if (retval < 0) {
                retval = 0; // First common ancestor found
            } else {
                retval = -1; // This node is just one of the values, not an ancestor
            }
        }

        if (retval === k - 1) { // If the current node is the k-th common ancestor
            this.ans = root.data;
        }

        if (retval >= 0) return retval + 1; // If both x and y are found, the path increases by 1

        return retval - 1; // If only one value is found, the path still increases by 1
    }
}
