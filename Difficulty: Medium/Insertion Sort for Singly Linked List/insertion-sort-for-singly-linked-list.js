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
    let temp = head;
    let s = "";
    while (temp !== null) {
        s = s + temp.data + " ";
        temp = temp.next;
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

        head = obj.insertionSort(head);
        printList(head);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @returns {Node}
 */

class Solution {
    /* Helper function to insert a node in sorted order */
    help(ans, temp) {
        if (ans === null || ans.data >= temp.data) {
            temp.next = ans;
            ans = temp;
        } else {
            let temp2 = ans;
            while (temp2.next !== null && temp2.next.data < temp.data) {
                temp2 = temp2.next;
            }
            temp.next = temp2.next;
            temp2.next = temp;
        }
        return ans;
    }
    
    /* Function to perform insertion sort on the linked list */
    insertionSort(node) {
        let temp = node; // Start with the head of the list
        let ans = null;   // This will be the sorted list

        // Traverse through the original list and insert each node into the sorted list
        while (temp !== null) {
            let nxt = temp.next;  // Save next node
            ans = this.help(ans, temp);  // Insert current node into sorted list
            temp = nxt;  // Move to the next node
        }

        return ans;  // Return the head of the sorted list
    }
}
