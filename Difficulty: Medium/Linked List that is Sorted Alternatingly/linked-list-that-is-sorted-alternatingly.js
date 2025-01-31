//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
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
    while (head) {
        s += head.data + " ";
        head = head.next;
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputArray = readLine().split(" ").map(x => parseInt(x));
        let head = null;
        let tail = null;

        if (inputArray.length > 0) {
            head = new Node(inputArray[0]);
            tail = head;
            for (let j = 1; j < inputArray.length; j++) {
                tail.next = new Node(inputArray[j]);
                tail = tail.next;
            }
        }

        let obj = new Solution();
        head = obj.sort(head);
        printList(head);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {Node}
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
    /**
     * @param {Node} head - The head of the linked list.
     * @returns {Node} - The head of the sorted linked list.
     */
    sort(head) {
        // Base case: if the list is empty or has only one node, return the list as is.
        if (!head || !head.next) {
            return head;
        }

        // Arrays to hold alternate elements for sorting
        let asc = [], desc = [];
        let flag = true; // Flag to alternate between adding to 'asc' and 'desc'

        // Traverse the list and populate 'asc' and 'desc' arrays based on the alternate nodes
        while (head) {
            if (flag) {
                asc.push(head.data); // Add to 'asc' for even-indexed positions
            } else {
                desc.push(head.data); // Add to 'desc' for odd-indexed positions
            }
            head = head.next; // Move to the next node
            flag = !flag; // Alternate the flag for next iteration
        }

        // Reverse the 'desc' array to maintain the correct order for descending order
        desc.reverse();

        // Merge the 'asc' and 'desc' arrays and sort them in ascending order
        let merged = asc.concat(desc).sort((a, b) => a - b);

        // Create a dummy node to simplify list construction
        let dummy = new Node(0);
        let current = dummy;

        // Construct the sorted linked list from the merged and sorted array
        for (let value of merged) {
            current.next = new Node(value); // Create new node with sorted value
            current = current.next; // Move to the next node
        }

        // Return the head of the sorted linked list
        return dummy.next;
    }
}
