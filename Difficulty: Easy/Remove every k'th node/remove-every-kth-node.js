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
        let n = arr.length;
        let k = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < n; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.deleteK(head, k);
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
 * @param {number} k
 * @return {Node}
 */

class Solution {
    deleteK(head, k) {
        let t = 1;  // Counter to track the position of the current node
        let cur = head;  // Pointer to traverse through the linked list
        let prev = null;  // Pointer to keep track of the previous node

        // Traverse the linked list
        while (cur) {
            // If the current node's position is k, delete it
            if (t === k) {
                if (prev) {
                    // If not the first node, adjust the previous node's next pointer
                    prev.next = cur.next;
                } else {
                    // If the current node is the first node (head), update the head
                    head = cur.next;
                }
                t = 1;  // Reset counter to 1
                cur = cur.next;  // Move to the next node
            } else {
                // Otherwise, move to the next node
                prev = cur;  // Update previous node to the current node
                cur = cur.next;  // Move current pointer to the next node
                t += 1;  // Increment the counter
            }
        }

        // Return the modified head of the linked list
        return head;
    }
}