//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Simulate memory addresses using unique IDs
let globalID = 1;
const nodeMap = new Map();

class Node {
    constructor(data) {
        this.id = globalID++; // Unique identifier for each node
        this.data = data;
        this.npx = 0; // XOR of previous and next node IDs
    }
}

// XOR operation for simulated addresses
function XOR(id1, id2) { return id1 ^ id2; }

// Utility function to print array
function printArray(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i] + " ";
    }
    console.log(s.trim());
}

function rprintArray(res, n) {
    let s = "";
    for (let i = n - 1; i >= 0; --i) { // Start from n-1 to prevent out-of-bounds
        s += res[i] + " ";
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine()); // number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = null; // initialize head as null
        let obj = new Solution();
        let n = arr.length;
        for (let j = 0; j < n; j++) { // loop through all elements in the test case
            head = obj.insert(head, arr[j]);
        }
        let res = obj.getList(head); // get the list of nodes' data
        printArray(res, res.length); // print the forward traversal
        rprintArray(res, res.length);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} node
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class XOR{
    constructor(a,b){
        return (a^b);
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    // Insert function to add a new node to the XOR linked list
    insert(head, data) {
        // Create a new node with the given data
        const newNode = new Node(data);
        nodeMap.set(newNode.id, newNode); // Store the node in the map using its unique ID

        // Set the 'npx' (XOR of previous and next node) for the new node
        newNode.npx = head ? head.id : 0;

        if (head !== null) {
            // Update the previous head's 'npx' to point to the new node
            head.npx = XOR(newNode.id, head.npx);
        }

        // Return the new head (newNode) of the list
        return newNode;
    }

    // Get the list of elements in the XOR linked list
    getList(head) {
        let curr = head;
        let prevID = 0; // Initially, there is no previous node, so prevID is 0
        let nextID; // This will hold the XOR result for the next node's ID

        const result = []; // Array to store the node data as we traverse the list

        // Traverse the XOR linked list using the XOR operation to get the next node
        while (curr !== null) {
            result.push(curr.data); // Add the current node's data to the result array

            // XOR the current node's 'npx' with the 'prevID' to find the next node's ID
            nextID = XOR(prevID, curr.npx);

            // If nextID is 0, we have reached the end of the list
            if (nextID === 0) {
                break;
            }

            // Update prevID for the next iteration
            prevID = curr.id;

            // Get the next node using the nodeMap (which stores nodes by their unique ID)
            curr = nodeMap.get(nextID) || null;
        }

        // Return the array of data from the XOR linked list
        return result;
    }
}
