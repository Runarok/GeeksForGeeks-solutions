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
    if (!head) return;
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
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.removeDuplicates(head);
        printlist(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to remove duplicates from sorted linked list.
    removeDuplicates(head) {
        // If the list is empty or has only one element, return it as is
        if (!head || !head.next) {
            return head;
        }

        let current = head;

        // Traverse through the list
        while (current !== null && current.next !== null) {
            // If current node's value is the same as next node's value
            if (current.data === current.next.data) {
                // Skip the next node by adjusting the next pointer
                current.next = current.next.next;
            } else {
                // Otherwise, move to the next node
                current = current.next;
            }
        }

        return head;
    }
}
