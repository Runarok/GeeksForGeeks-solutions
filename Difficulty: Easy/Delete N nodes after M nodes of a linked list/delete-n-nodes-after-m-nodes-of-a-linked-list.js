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
        let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        obj.linkdelete(head, n, m);
        printList(head);

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
 * @param {number} n
 * @param {number} m
 */

class Solution {
    linkdelete(head, n, m) {
        // If the head is null, return
        if (!head) return;

        let temp = head;

        while (temp) {
            // Traverse `m-1` nodes to reach the `m`-th node
            for (let i = 1; i < m; i++) {
                if (!temp.next) {
                    return head; // If we reach the end, return the modified list
                }
                temp = temp.next;
            }

            let firstTemp = temp; // Store the `m`-th node
            temp = firstTemp.next; // Move to the first node to be deleted

            // Delete `n` nodes
            for (let j = 0; j < n; j++) {
                if (!temp) {
                    break; // If there are no more nodes to delete, stop
                }
                temp = temp.next;
            }

            // Link `firstTemp` to the node after the deleted segment
            firstTemp.next = temp;
        }

        return head;
    }
}
