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
        let input_ar1 = readLine().split(" ").map((x) => parseInt(x));

        let m = input_ar1[0];
        let n = input_ar1[1];
        input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.reverseBetween(m, n, head);
        printlist(head);

        console.log("~");
    }
}

// } Driver Code Ends

/**
 * @param {number} a
 * @param {number} b
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

    reverseBetween(a, b, head) {
        // If the head is null or the starting and ending positions are the same, no reversal needed
        if (!head || a === b) return head;

        // Create a dummy node to simplify the head manipulation process
        let dummy = new Node(-1); 
        dummy.next = head;

        // Move `prev` to the node just before the start of the section to reverse
        let prev = dummy; 
        for (let i = 1; i < a; i++) {
            prev = prev.next;  // Move prev to the node at position (a-1)
        }

        // `curr` points to the node at position `a` where the reversal starts
        let curr = prev.next; 
        let next = null;

        // Reversing the sublist between `a` and `b`
        // We perform (b - a) steps to reverse the sublist
        for (let i = 0; i < b - a; i++) {
            next = curr.next;  // Store the next node
            curr.next = next.next;  // Link the current node to the node after `next`
            next.next = prev.next;  // Insert `next` at the start of the sublist
            prev.next = next;  // Update `prev` to point to the new head of the sublist
        }

        // Return the modified list, which starts after the dummy node
        return dummy.next;
    }
}
