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
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < n; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let m = input_ar2.length;
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for (let i = 1; i < m; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let obj = new Solution();
        let res = obj.makeUnion(head1, head2);
        printlist(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
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
    // Function to create a union of two linked lists
    makeUnion(head1, head2) {
        let n1 = new Node(-1);  // Temporary dummy node to simplify the process
        let newHead = n1;       // New head for the result list
        let set1 = new Set();   // Set to store unique node values

        // Traverse the first list and add its elements to the set
        let curr1 = head1;
        while (curr1 !== null) {
            set1.add(curr1.data);  // Add node data to the set to ensure uniqueness
            curr1 = curr1.next;    // Move to the next node in list 1
        }

        // Traverse the second list and add its elements to the set
        let curr2 = head2;
        while (curr2 !== null) {
            set1.add(curr2.data);  // Add node data to the set for list 2
            curr2 = curr2.next;    // Move to the next node in list 2
        }

        // Convert set to an array and sort it to get elements in ascending order
        let sortedValues = Array.from(set1).sort((a, b) => a - b);

        // Build the sorted linked list from the set of unique values
        for (let value of sortedValues) {
            let newNode = new Node(value);  // Create a new node with sorted value
            n1.next = newNode;              // Attach the new node to the result list
            n1 = n1.next;                   // Move the pointer to the new node
        }

        return newHead.next;  // Return the head of the resulting linked list
    }
}
