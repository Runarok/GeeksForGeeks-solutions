//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

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
    let output = "";
    let current = head;
    while (current !== null) {
        output += current.data + " ";
        current = current.next;
    }
    console.log(output);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(" ").map((x) => parseInt(x));
        let head = new Node(input1[0]);
        let current = head;
        for (let j = 1; j < input1.length; j++) {
            current.next = new Node(input1[j]);
            current = current.next;
        }
        let obj = new Solution();
        let res = obj.moveZeroes(head);
        printList(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @returns {void}
 */

class Solution {
    // Function to move all zeroes to the front of the linked list
    moveZeroes(head) {
        // If the list is empty or has only one element, return the list as is
        if (!head || !head.next) return head;
        
        let current = head;
        let nonZeroList = [];
        let zeroCount = 0;
        
        // Traverse the linked list
        while (current !== null) {
            if (current.data === 0) {
                zeroCount++;  // Count the zero nodes
            } else {
                nonZeroList.push(current.data);  // Store non-zero elements
            }
            current = current.next;
        }
        
        // Rebuild the list
        current = head;
        
        // First add all the zeros
        for (let i = 0; i < zeroCount; i++) {
            current.data = 0;
            current = current.next;
        }
        
        // Then add all the non-zero elements back
        for (let i = 0; i < nonZeroList.length; i++) {
            current.data = nonZeroList[i];
            current = current.next;
        }
        
        return head;
    }
}
