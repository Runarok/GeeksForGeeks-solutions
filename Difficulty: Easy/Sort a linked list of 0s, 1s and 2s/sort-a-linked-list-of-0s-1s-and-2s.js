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
        head = obj.segregate(head);
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
    // Function to sort a linked list of 0s, 1s, and 2s
    segregate(head) {
        let z = null;      // To store 0s
        let zHead = null;  // Head of the 0 list
        let o = null;      // To store 1s
        let oHead = null;  // Head of the 1 list
        let t = null;      // To store 2s
        let tHead = null;  // Head of the 2 list
        
        let prev = head;   // Initialize the current node as the head
        let curr = null;   // Initialize the next node to null

        // Check if the list is empty or has only one node
        if (prev !== null) {
            curr = prev.next; // Move to the next node
            if (curr === null) return prev; // If only one node, return it directly
        } else {
            return prev; // If empty list, return null
        }
        
        // Traverse the linked list and separate the nodes based on their data (0, 1, or 2)
        while (prev !== null) {
            if (prev.data === 0) {
                // Add to the 0 list
                if (z === null) {
                    z = prev;
                    zHead = z; // Set head for the 0 list
                } else {
                    z.next = prev;
                    z = z.next; // Move the pointer to the next node
                }
            } else if (prev.data === 1) {
                // Add to the 1 list
                if (o === null) {
                    o = prev;
                    oHead = o; // Set head for the 1 list
                } else {
                    o.next = prev;
                    o = o.next; // Move the pointer to the next node
                }
            } else {
                // Add to the 2 list
                if (t === null) {
                    t = prev;
                    tHead = t; // Set head for the 2 list
                } else {
                    t.next = prev;
                    t = t.next; // Move the pointer to the next node
                }
            }

            // Move to the next node
            prev.next = null;
            prev = curr;
            if (curr !== null) {
                curr = curr.next;
            }
        }

        // Terminate the 2s list if it's not null
        if (t !== null) {
            t.next = null;
        }
        
        // Merge the lists together in the order of 0s, 1s, and 2s
        if (oHead === null) {
            // If there's no 1s list, just link 0s and 2s
            if (z !== null) {
                z.next = tHead;
            }
        } else {
            // If there's a 1s list, link 0s -> 1s -> 2s
            if (z !== null) {
                z.next = oHead;
            }
            if (o !== null) {
                o.next = tHead;
            }
        }

        // Return the head of the sorted list
        if (z === null) {
            if (o === null) {
                return tHead; // If no 0s and 1s, return the 2s list
            }
            return oHead; // Return the 1s list
        }

        return zHead; // Return the 0s list as the head of the sorted list
    }
}
