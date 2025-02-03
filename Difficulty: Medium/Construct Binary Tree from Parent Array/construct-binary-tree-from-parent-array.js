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
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function sort_and_print(v) {
    v.sort(function(a, b) { return a - b; });
    for (let i = 0; i < v.length; i++) {
        arr.push(v[i])
    }
}

function printLevelOrder(root) {
    let v = [];
    let q = [];
    let start_q = 0;

    q.push(root);

    let next_row = null;

    while (q.length !== start_q) {
        let n = q[start_q];
        start_q++;

        if (n == next_row) {
            sort_and_print(v);
            v = [];
            next_row = null;
        }

        v.push(n.data);

        if (n.left) {
            q.push(n.left);
            if (next_row === null) next_row = n.left;
        }

        if (n.right) {
            q.push(n.right);
            if (next_row === null) next_row = n.right;
        }
    }
    sort_and_print(v);
    v = [];
}

let arr = [];

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let a = [];
        for (let i = 0; i < n; i++) {
            a.push(input_ar1[i]);
        }
        arr = [];
        let obj = new Solution();
        let res = obj.createTree(a);
        printLevelOrder(res);
        let s = '';
        for (let i = 0; i < arr.length; i++) {
            s += arr[i] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    // Function to construct binary tree from parent array.
    createTree(parent) {
        const n = parent.length;
        
        // Create a list of tree nodes
        let nodes = new Array(n);
        for (let i = 0; i < n; i++) {
            nodes[i] = new Node(i); // Initialize each node with the value i
        }
        
        // Initialize root to null
        let root = null;
        
        // Traverse the parent array and build the tree
        for (let i = 0; i < n; i++) {
            let currentNode = nodes[i];
            let parentNodeIndex = parent[i];
            
            if (parentNodeIndex === -1) {
                // This is the root node
                root = currentNode;
            } else {
                // Add currentNode as a child of parentNode
                let parentNode = nodes[parentNodeIndex];
                
                // Assign left or right child
                if (!parentNode.left) {
                    parentNode.left = currentNode;
                } else {
                    parentNode.right = currentNode;
                }
            }
        }
        
        return root;
    }
}
