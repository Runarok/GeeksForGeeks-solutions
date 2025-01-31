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

let head = null;

function findNode(head, search_for) {
    let current = head;
    while (current !== null) {
        if (current.data == search_for) break;
        current = current.next;
    }
    return current;
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
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        let n = input_ar1.length;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.getMiddle(head);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @return {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    // Method to find the middle node's data
    getMiddle(node) {
        // If the list is empty, return -1 as there's no middle element
        if (!node) return -1; 

        // Initialize two pointers, slow and fast, both starting at the head
        let slow = node;
        let fast = node;

        // Traverse the list with fast moving twice as fast as slow
        while (fast !== null && fast.next !== null) {
            slow = slow.next;     // Slow moves one step
            fast = fast.next.next; // Fast moves two steps
        }

        // Return the data of the middle node
        return slow.data;
    }
}
