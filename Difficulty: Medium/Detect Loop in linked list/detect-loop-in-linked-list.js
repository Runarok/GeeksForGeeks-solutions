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

function loopHere(head, tail, position) {
    if (position === 0) return;
    let walk = head;
    for (let i = 1; i < position; i++) walk = walk.next;
    tail.next = walk;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        let n = input_ar1.length;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let pos = parseInt(readLine());
        loopHere(head, tail, pos);
        let obj = new Solution();
        if (obj.detectLoop(head)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {boolean}
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
    // Function to check if the linked list has a loop.
    detectLoop(head) {
        if (!head || !head.next) {
            return false; // If list is empty or has only one element, no loop
        }

        let slow = head;
        let fast = head;

        // Traverse the list with two pointers
        while (fast !== null && fast.next !== null) {
            slow = slow.next; // Move slow pointer by one step
            fast = fast.next.next; // Move fast pointer by two steps

            // If the slow pointer meets the fast pointer, there's a loop
            if (slow === fast) {
                return true;
            }
        }

        // If fast pointer reaches the end of the list, there's no loop
        return false;
    }

    // Function to create the linked list with a loop, given head and pos
    createListWithLoop(values, pos) {
        let head = null;
        let tail = null;
        let loopNode = null;

        for (let i = 0; i < values.length; i++) {
            let newNode = { data: values[i], next: null };

            if (!head) {
                head = newNode;
                tail = head;
            } else {
                tail.next = newNode;
                tail = tail.next;
            }

            // Remember the node at position `pos` for creating the loop later
            if (i === pos - 1) {
                loopNode = newNode;
            }
        }

        // If pos is non-zero, create the loop
        if (pos > 0 && loopNode) {
            tail.next = loopNode;
        }

        return head;
    }
}

