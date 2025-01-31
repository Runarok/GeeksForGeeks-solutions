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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

function findNode(head, searchFor) {
    let current = head;
    while (current !== null) {
        if (current.data === searchFor) return current;
        current = current.next;
    }
    return null;
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim());
}

function insert() {
    let arr = readLine().split(' ').map(Number);
    if (arr.length === 0) return;

    head = new Node(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        temp.next = new Node(arr[i]);
        temp = temp.next;
    }
}

function main() {
    let t = parseInt(readLine());
    let solution = new Solution();

    for (let i = 0; i < t; i++) {
        head = null; // Reset the head for each test case
        insert();
        let k = parseInt(readLine());
        let delNode = findNode(head, k);
        if (delNode !== null && delNode.next !== null) {
            solution.deleteNode(delNode);
            printList(head);
        } else if (delNode === null) {
            console.log("Node with value " + k + " not found.");
        } else {
            console.log("Input does not follow the custom input conditions.");
        }
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} del
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;

*/

class Solution {
    deleteNode(node) {
        // Step 1: Copy the data from the next node into the current node
        node.data = node.next.data;
        
        // Step 2: Link the current node’s next to the next of the next node
        node.next = node.next.next;
    }
}
