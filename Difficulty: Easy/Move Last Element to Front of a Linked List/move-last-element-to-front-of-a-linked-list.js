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

function printlist(head) {
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
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.moveToFront(head);
        printlist(head);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * Definition for singly Link List Node
 * class Node{
 *     constructor(x){
 *         this.data = x
 *         this.next = null
 *     }
 * }
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    // Function to move last element to front in a linked list.
    moveToFront(head) {
        // If the list is empty or has only one element, no need to move anything.
        if (!head || !head.next) return head;

        let secondLast = head;  // Initialize to the first node
        let last = head;        // Initialize to the first node
        
        // Traverse the list to find the last node and the second last node
        while (last.next) {
            secondLast = last;  // Keep track of the second last node
            last = last.next;   // Move to the next node
        }
        
        // Disconnect the second last node's next pointer
        secondLast.next = null;
        
        // Link the last node to the front (head) of the list
        last.next = head;
        
        // Make the last node the new head of the list
        head = last;
        
        return head;
    }
}
