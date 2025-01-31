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
        let x = parseInt(readLine());

        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.deleteNode(head, x);
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
    // Function to delete the x-th node from the linked list
    deleteNode(head, x) {
        // If the linked list is empty, return null
        if (!head) {
            return null;
        }
        
        // If we need to delete the head node (1-based index)
        if (x === 1) {
            return head.next;  // Simply return the next node as the new head
        }

        let current = head;
        let count = 1;

        // Traverse the list to find the (x-1)-th node (the node before the one we want to delete)
        while (current !== null && count < x - 1) {
            current = current.next;
            count++;
        }

        // If the (x-1)-th node is found and current.next exists (x-th node exists)
        if (current !== null && current.next !== null) {
            current.next = current.next.next;  // Skip the x-th node
        }

        return head;  // Return the head of the updated list
    }
}
