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
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let obj = new Solution();
        let res = obj.compute(head1);
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

    // Function to reverse the linked list
    reverse(head) {
        let prev = null; // Initialize previous node to null
        let curr = head; // Set current node to head of the list
        let next; // This will store the next node temporarily
        
        // Traverse the list and reverse the pointers
        while(curr !== null) {
            next = curr.next; // Save the next node
            curr.next = prev; // Reverse the current node's pointer
            prev = curr; // Move prev to the current node
            curr = next; // Move to the next node
        }
        
        return prev; // Return the new head (which was the tail before reversal)
    }

    // Function to modify the list by removing nodes smaller than the maximum encountered so far
    compute(head) {
        // Return if the list is empty or has only one node
        if(head === null || head.next === null) return head;
        
        // Reverse the list to simplify the process of identifying the maximum
        head = this.reverse(head);
        
        let curr = head;  // Initialize the current node to the head of the reversed list
        let max = head;   // Start with the first node as the maximum
        
        // Traverse the reversed list and remove nodes smaller than the maximum encountered so far
        while(curr !== null) {
            // If the current node's data is smaller than the maximum, remove it from the list
            if(curr.data < max.data) {
                max.next = curr.next;  // Skip the current node
            } else {
                max = curr; // Update the maximum to the current node
            }
            curr = curr.next; // Move to the next node
        }
        
        // Reverse the list again to restore the original order and return it
        return this.reverse(head);
    }
}
