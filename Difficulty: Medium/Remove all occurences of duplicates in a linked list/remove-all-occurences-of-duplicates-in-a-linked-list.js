//{ Driver Code Starts
//// Initial Template for javascript

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
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let newHead = obj.removeAllDuplicates(head);
        printlist(newHead);
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

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    removeAllDuplicates(head) {
        // Create a dummy node to simplify edge case handling and initialize the prev pointer
        let dummy = new Node(0);
        dummy.next = head;
        let prev = dummy;

        // Traverse the linked list
        while (head) {
            // Check if the current node has a duplicate next node
            if (head.next && head.data === head.next.data) {
                // Skip all nodes with the same data (duplicates)
                while (head.next && head.data === head.next.data) {
                    head = head.next;  // Move head to the last duplicate
                }
                // Remove the duplicates by linking prev to the next non-duplicate node
                prev.next = head.next;
            } else {
                // No duplicate, move prev pointer forward
                prev = prev.next;
            }
            // Move head pointer to the next node
            head = head.next;
        }

        // Return the modified list starting from the node after the dummy
        return dummy.next;
    }
}
