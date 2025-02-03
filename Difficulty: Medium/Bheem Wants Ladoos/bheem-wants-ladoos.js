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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        input_ar1 = readLine().split(' ');
        let home = parseInt(input_ar1[0]);
        let k = parseInt(input_ar1[1]);
        let obj = new Solution();
        console.log(obj.ladoos(root, home, k));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} root
 * @param {number} src
 * @param {number} k
 * @returns {number[]}
 */

function findParents(root, parents) {
    if (root.right) {
        parents[root.right.data] = root;
        findParents(root.right, parents);
    }

    if (root.left) {
        parents[root.left.data] = root;
        findParents(root.left, parents);
    }
}

function findBheem(root, x) {
    if (!root) return null;

    if (root.data === x) {
        return root;
    }

    let left = findBheem(root.left, x);
    if (left) return left;

    return findBheem(root.right, x);
}

class Solution {
    ladoos(root, home, k) {
        // Create an object to store parent relationships
        let parents = {};
        findParents(root, parents);
        
        // Find the node corresponding to Bheem's home
        let homeNode = findBheem(root, home);
        
        // Track visited nodes and initialize queue with Bheem's home
        let visited = new Set([homeNode]);
        let queue = [homeNode];
        let answer = 0;
        
        // Traverse up to k levels
        for (let level = 0; level <= k; level++) {
            if (queue.length === 0) break;
            let n = queue.length;

            // Process all nodes in the current level
            for (let i = 0; i < n; i++) {
                let currentNode = queue.shift();
                answer += currentNode.data;

                // Check all possible directions (left, right, parent)
                let left = currentNode.left;
                let right = currentNode.right;
                let parent = null;

                if (currentNode !== root) {
                    parent = parents[currentNode.data];
                }

                // Add unvisited children and parent nodes to the queue
                [left, right, parent].forEach(node => {
                    if (node && !visited.has(node)) {
                        queue.push(node);
                        visited.add(node);
                    }
                });
            }
        }
        
        return answer;
    }
}
