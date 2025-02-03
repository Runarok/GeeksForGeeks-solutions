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
        this.next = null;
    }
}

function buildTree(str) {
    if (str.length === 0 || str[0] === "N") return null;

    let ip = str.split(" ");

    let root = new Node(parseInt(ip[0]));

    let queue = [];
    queue.push(root);

    let i = 1;
    while (queue.length > 0 && i < ip.length) {
        let currNode = queue.shift();

        let currVal = ip[i];

        if (currVal !== "N") {
            currNode.left = new Node(parseInt(currVal));
            queue.push(currNode.left);
        }

        i++;
        if (i >= ip.length) break;
        currVal = ip[i];

        if (currVal !== "N") {
            currNode.right = new Node(parseInt(currVal));
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

function inorder(root) {
    let s = "";

    function inorderUtil(node) {
        if (!node) {
            return;
        }
        inorderUtil(node.left);
        s += node.data + " ";
        inorderUtil(node.right);
    }

    inorderUtil(root);
    console.log(s);
}

function inorderFirstNode(root) {
    if (!root) return null;
    let node = root;
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let treeString = readLine();
        let root = buildTree(treeString);
        let solution = new Solution();
        solution.populateNext(root);
        let ptr = inorderFirstNode(root);
        while (ptr) {
            process.stdout.write(ptr.data + "->" + (ptr.next ? ptr.next.data : -1) +
                                 " ");
            ptr = ptr.next;
        }
        console.log();
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
        this.next = null; // Adding 'next' pointer for the next right node
    }
}
*/

class Solution {
    /**
     * @param {Node} root
     * @returns {void}
     */
    populateNext(root) {
        // Initialize the helper function with a reference to the next successor
        this.helper(root, [null]);
    }
    
    helper(root, nextSucc) {
        if (root === null) {
            return; // Base case: return if the node is null
        }
        
        // Traverse right subtree first (reverse in-order traversal)
        this.helper(root.right, nextSucc);
        
        // Set the next pointer to the current node's next successor
        root.next = nextSucc[0];
        
        // Update the next successor to be the current node
        nextSucc[0] = root;
        
        // Traverse left subtree
        this.helper(root.left, nextSucc);
    }
}
