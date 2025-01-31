//{ Driver Code Starts
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
    constructor(data) {
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}

function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.data);
        head = head.bottom;
    }
    console.log(result.join(" "));
}

function createLinkedList(arr) {
    let dummy = new Node(0);
    let temp = dummy;
    for (let i = 0; i < arr.length; i++) {
        temp.next = arr[i];
        temp = temp.next;
    }
    return dummy.next;
}

function main() {
    let t = parseInt(readLine());
    for (let test = 0; test < t; test++) {
        const n = parseInt(readLine());
        const nodes = [];

        for (let i = 0; i < n; i++) {
            const values = readLine().split(" ").map(Number);
            let dummy = new Node(0);
            let temp = dummy;

            for (let val of values) {
                temp.bottom = new Node(val);
                temp = temp.bottom;
            }

            nodes.push(dummy.bottom);
        }

        const list = createLinkedList(nodes);
        const solution = new Solution();
        const flattenedList = solution.flatten(list);
        printList(flattenedList);
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
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    
    flatten(head) {
        // Helper function to merge two sorted lists
        function mergeTwoLists(h1, h2) {
            // Create a dummy node to simplify list merging
            let headDummy = new Node(-1);
            let dummy = headDummy;

            // Merge the two lists while both are non-empty
            while (h1 !== null && h2 !== null) {
                if (h1.data < h2.data) {
                    dummy.bottom = h1;  // Link the smaller node to bottom
                    h1 = h1.bottom;  // Move h1 pointer down
                } else {
                    dummy.bottom = h2;  // Link the smaller node to bottom
                    h2 = h2.bottom;  // Move h2 pointer down
                }
                dummy = dummy.bottom;  // Move dummy pointer to the newly added node
            }

            // If there are remaining nodes in h1, link them
            if (h1) dummy.bottom = h1;

            // If there are remaining nodes in h2, link them
            if (h2) dummy.bottom = h2;

            return headDummy.bottom;  // Return the merged list starting from the first node
        }

        // Base case: if the list is empty or contains a single list, return the head
        if (head == null || head.next == null) return head;

        // Flatten the list starting from the next node
        head.next = this.flatten(head.next);

        // Merge the current list with the flattened list
        head = mergeTwoLists(head, head.next);

        // Set next to null as we are merging the bottom linked lists
        head.next = null;

        return head;
    }
}
