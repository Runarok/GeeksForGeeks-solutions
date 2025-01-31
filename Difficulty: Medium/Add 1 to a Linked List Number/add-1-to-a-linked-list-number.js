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
        s += current.data;
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

        let newHead = new Solution().addOne(head);

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
    /**
     * Function to add one to a linked list
     * @param {Node} head - The head of the linked list
     * @return {Node} - The new head of the updated linked list
     */
    addOne(head) {
        // Step 1: Reverse the linked list to make it easier to add from the least significant digit
        head = this.reverseList(head);

        // Step 2: Add one to the number, handle carry over
        let carry = 1; // Start with carry = 1 because we are adding one
        let curr = head;

        while (curr !== null) {
            let sum = curr.data + carry; // Add carry to the current digit
            curr.data = sum % 10; // Store the digit (after adding carry)
            carry = Math.floor(sum / 10); // Calculate the carry for the next node

            // If we have reached the last node and there is still a carry, add a new node
            if (curr.next === null && carry > 0) {
                curr.next = new Node(carry); // Add new node with carry value
                carry = 0; // Reset carry as we have added it to the new node
            }

            curr = curr.next; // Move to the next node
        }

        // Step 3: Reverse the list back to the original order
        return this.reverseList(head);
    }

    /**
     * Function to reverse a linked list
     * @param {Node} head - The head of the linked list
     * @return {Node} - The new head of the reversed linked list
     */
    reverseList(head) {
        let prev = null;
        let curr = head;
        
        // Traverse the list and reverse the pointers
        while (curr !== null) {
            let nextNode = curr.next; // Store the next node
            curr.next = prev; // Reverse the pointer
            prev = curr; // Move prev to current node
            curr = nextNode; // Move to the next node
        }
        
        return prev; // Return the new head (prev will be the last node)
    }
}
