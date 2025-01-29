//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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
        s += head.data + " ";
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }

        let obj = new Solution();
        obj.reorderList(head);
        printList(head);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @class Node
 * @property {number} data
 * @property {Node} next
 */


class Solution {
    /**
     * @param {Node} head
     * @returns {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;  // If list has 0 or 1 node, no need to reorder
        
        // Step 1: Find the middle of the linked list
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Step 2: Reverse the second half of the list
        let prev = null, curr = slow;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        // Step 3: Merge the two halves
        let first = head, second = prev;
        while (second.next) { // second is the reversed second half
            let temp1 = first.next, temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
