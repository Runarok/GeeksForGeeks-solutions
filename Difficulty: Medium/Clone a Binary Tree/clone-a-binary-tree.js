//{ Driver Code Starts
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

class Tree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.random = null;
    }
}

function printInorder(original, cloned) {
    if (original === null && cloned === null) {
        return true;
    }
    if (original !== null && cloned !== null) {
        let check = (original.data === cloned.data &&
                     printInorder(original.left, cloned.left) &&
                     printInorder(original.right, cloned.right));

        if (original.random !== null && cloned.random !== null) {
            return (check && (original.random.data === cloned.random.data));
        }

        if (original.random === cloned.random) {
            return check;
        }

        return false;
    }

    return false;
}

function insert(root, n1, n2, lr) {
    if (root === null) {
        return;
    }
    if (n1 === root.data) {
        if (lr === 'L') {
            root.left = new Tree(n2);
        } else {
            root.right = new Tree(n2);
        }
    } else {
        insert(root.left, n1, n2, lr);
        insert(root.right, n1, n2, lr);
    }
}

function clone(root, proot, n1, n2) {
    if (root === null) {
        return;
    }

    if (n1 === root.data) {
        if (proot.data === n2) {
            root.random = proot;
        } else {
            clone(root, proot.left, n1, n2);
            clone(root, proot.right, n1, n2);
        }
    } else {
        clone(root.left, proot, n1, n2);
        clone(root.right, proot, n1, n2);
    }
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let root = null;
        let k = 0;

        for (let j = 0; j < n; j++) {
            let n1 = input_ar1[k];
            let n2 = input_ar1[k + 1];
            let lr = input_ar1[k + 2];

            if (root === null) {
                root = new Tree(n1);
                if (lr === 'L') {
                    root.left = new Tree(n2);
                } else {
                    root.right = new Tree(n2);
                }
            } else {
                if (lr === 'X') {
                    clone(root, root, n1, n2);
                } else {
                    insert(root, n1, n2, lr);
                }
            }
            k += 3;
        }

        let obj = new Solution();
        let clonedTree = obj.cloneTree(root);

        // Check if the cloned tree is the same as the original
        if (clonedTree === root) {
            console.log(0);
        } else {
            if (printInorder(root, clonedTree)) {
                console.log("1");
            } else {
                console.log("0");
            }
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Node} root
 * @returns {Node}
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.random = null;
    }
}

// Solution class with cloneTree method
class Solution {
    cloneTree(root) {
        if (root == null) return null;

        let map = new Map();

        // Helper function for deep copying the tree structure
        function deepCopy(node) {
            if (node == null) return null;
            
            const newNode = new Node(node.data); // Create a new node
            map.set(node, newNode); // Store the mapping between original and cloned node
            
            // Recursively copy left and right children
            newNode.left = deepCopy(node.left);
            newNode.right = deepCopy(node.right);
            
            return newNode;
        }

        // Create a deep copy of the tree structure
        const newRoot = deepCopy(root);

        // Function to set the 'random' pointer for cloned nodes
        function setRandom(node) {
            if (node == null) return;
            
            const clonedNode = map.get(node); // Get the cloned node from the map
            // Set the 'random' pointer of the cloned node
            clonedNode.random = node.random ? map.get(node.random) : null;
            
            // Recursively set random pointers for left and right children
            setRandom(node.left);
            setRandom(node.right);
        }

        // Set random pointers after tree structure is cloned
        setRandom(root);

        // Return the cloned root of the tree
        return newRoot;
    }
}
