//{ Driver Code Starts
// Define the Node class for the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to print the circular linked list
function printList(head) {
    if (head === null) return;

    let result = [];
    let current = head;

    do {
        result.push(current.data);
        current = current.next;
    } while (current !== head);

    console.log(result.join(' '));
}

// Main function for input handling
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let x = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;

        // Create the circular linked list from the array
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        tail.next = head; // Make the list circular

        let obj = new Solution();
        let ans = obj.sortedInsert(head, x);

        // Print the updated circular linked list
        printList(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @param {number} data
 * @returns {Node}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    sortedInsert(head, data) {
        // If the list is empty, create a new node and return it
        if (!head) {
            return new Node(data);
        }

        let newNode = new Node(data);
        let cur = head;

        // If inserting at the head (when data <= head data)
        if (data <= head.data) {
            newNode.next = head;
            // Traverse the list to find the last node and update its next pointer
            while (cur.next !== head) {
                cur = cur.next;
            }
            cur.next = newNode;
            return newNode;
        }

        // Traverse the list to find the correct insertion point
        let curNext = cur.next;
        while (cur.next !== head) {
            if (newNode.data > cur.data && curNext.data >= newNode.data) {
                cur.next = newNode;
                newNode.next = curNext;
                return head;
            }
            cur = cur.next;
            curNext = cur.next;
        }

        // If insertion is at the end, update accordingly
        newNode.next = head;
        cur.next = newNode;
        return head;
    }
}
