//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map((string) => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(head) {
    let s = "";
    while (head !== null) {
        s += head.data + " ";
        head = head.next;
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let arr = readLine().split(" ").map(Number);

        if (arr.length === 0) {
            console.log("");
            continue;
        }

        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.removeDuplicates(head);
        printList(res);
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} head - Head of the linked list
 * @returns {Node} - Head of the linked list after removing duplicates
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to remove duplicates from an unsorted linked list.
    removeDuplicates(head) {
        if (!head || !head.next) return head; // If list is empty or has only one node, return as is

        let currentNode = head; // Pointer to traverse the list
        let seenValues = {}; // Hash map to store unique values

        const dummyHead = new Node(-1); // Dummy node to handle edge cases smoothly
        let previousNode = dummyHead; // Pointer to maintain the new unique list

        while (currentNode) {
            if (!seenValues[currentNode.data]) {
                seenValues[currentNode.data] = true; // Mark the value as seen
                previousNode.next = currentNode; // Link the unique node
                previousNode = currentNode; // Move the previous pointer forward
            }
            currentNode = currentNode.next; // Move to the next node
        }

        previousNode.next = null; // Ensure the last node doesn't link to old duplicates
        return dummyHead.next; // Return the updated head
    }
}
