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
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let head1 = new Node(arr[0]);
        let tail1 = head1;
        for (let i = 1; i < n; i++) {
            tail1.next = new Node(arr[i]);
            tail1 = tail1.next;
        }
        let obj = new Solution();
        let res = obj.sortList(head1);
        printList(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    // Function to sort a linked list
    sortList(head) {
        // If the list is empty or contains only one node, return it as is
        if (head === null || head.next === null) {
            return head;
        }

        // Step 1: Convert the linked list into an array
        let values = [];
        let currentNode = head;
        while (currentNode !== null) {
            values.push(currentNode.data); // Push the node data into the array
            currentNode = currentNode.next; // Move to the next node
        }

        // Step 2: Sort the array in ascending order
        values.sort((a, b) => a - b);

        // Step 3: Reassign the sorted values back into the linked list
        currentNode = head;
        for (let i = 0; i < values.length; i++) {
            currentNode.data = values[i]; // Update the node data
            currentNode = currentNode.next; // Move to the next node
        }

        // Return the head of the sorted linked list
        return head;
    }
}

