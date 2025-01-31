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
    let s = "";
    while (head) {
        s += head.data;
        s += " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let N = arr.length;
        let list = new Node(arr[0]);
        let tail = list;
        for (let j = 1; j < N; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }

        let obj = new Solution();
        let res = obj.divide(list);
        printList(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    divide(head) {
        // Initialize pointers for even and odd sublists
        let EvenStart = null;
        let EvenEnd = null;
        let cur = head;
        let prev = null;

        // Traverse the linked list
        while (cur !== null) {
            // Check if the current node's data is even
            if (cur.data % 2 === 0) {
                // If previous node exists, adjust the next pointer
                if (prev !== null) {
                    prev.next = cur.next;
                } else {
                    head = cur.next; // Move head if it's the first even node
                }

                // If EvenStart is null, initialize the even list
                if (EvenStart === null) {
                    EvenStart = cur;
                    EvenEnd = cur;
                } else {
                    EvenEnd.next = cur; // Add current node to the end of the even list
                    EvenEnd = cur; // Update the end pointer
                }
                cur = cur.next; // Move to the next node
            } else {
                prev = cur; // Update previous pointer for odd nodes
                cur = cur.next; // Move to the next node
            }
        }

        // If no even nodes exist, return the original list
        if (EvenStart === null) {
            return head;
        }

        // Connect the end of the even list to the original list
        EvenEnd.next = head;

        // Return the head of the even list
        return EvenStart;
    }
}
