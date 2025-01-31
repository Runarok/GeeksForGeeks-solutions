//{ Driver Code Starts
// Initial Template for JavaScript

class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

function push(tail, new_data) {
    let newNode = new DLLNode(new_data);
    newNode.next = null;
    newNode.prev = tail;

    if (tail) {
        tail.next = newNode;
    }

    return newNode;
}

function printList(head) {
    if (!head) {
        return;
    }

    let result = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" "));
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', function(line) { input.push(line); });

rl.on('close', function() {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t--) {
        let arr = input[index].trim().split(' ').map(Number);

        let head = new DLLNode(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; i++) {
            tail = push(tail, arr[i]);
        }

        let obj = new Solution();
        head = obj.reverseDLL(head);
        printList(head);
        index += 1;
    }
});

// } Driver Code Ends

// User function Template for javascript

/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}*/

/**
 * Function to reverse a doubly linked list.
 * @param {DLLNode} head - The head of the doubly linked list.
 * @return {DLLNode} - The new head of the reversed doubly linked list.
 */
class Solution {
    reverseDLL(head) {
        // If the list is empty or has only one node, return the head as is
        if (head === null || head.next === null) return head;
        
        let last;  // Variable to store the last node (new head of reversed list)
        let cur = head;  // Current pointer to traverse the list
        
        // Traverse the entire list
        while (cur) {
            last = cur.prev;  // Store the current node's previous pointer
            cur.prev = cur.next;  // Reverse the 'prev' pointer to point to the next node
            cur.next = last;  // Reverse the 'next' pointer to point to the previous node
            cur = cur.prev;  // Move to the next node (previous node in the original list)
        }
        
        // After the loop, 'last' will point to the new head of the list
        return last.prev;  // Return the new head (last node in the original list)
    }
}
