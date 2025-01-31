//{ Driver Code Starts
// Updated Template for JavaScript

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

function push(tail, new_data) {
    let newNode = new Node(new_data);
    newNode.next = null;
    newNode.prev = tail;

    if (tail) {
        tail.next = newNode;
    }

    return newNode;
}

function verifyDLL(head) {
    tmp = head
    c1 = 0
    while (tmp.next) {
        c1++
        tmp = tmp.next
    }
    c2 = 0
    while (tmp.prev) {
        c2++
        tmp = tmp.prev
    }
    return c1 == c2
}

function printList(head) {
    if (!head) {
        return;
    }
    if (!verifyDLL(head)) {
        return;
    }
    let result = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" "));
    console.log("~");
}

// Reading input and processing
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', function(line) { input.push(line); });

rl.on('close', function() {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t--) {
        let arr = input[index].trim().split(' ').map(Number);

        let head = new Node(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; i++) {
            tail = push(tail, arr[i]);
        }
        let x = parseInt(input[index + 1].trim()); // Fixed: Read x from correct line
        let obj = new Solution();
        head = obj.deleteNode(head, x);
        printList(head);
        index += 2; // Move to next test case
    }
});

// } Driver Code Ends


// User function Template for JavaScript

/* 
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {Node} head - Head of the doubly linked list
 * @param {number} position - Position of the node to be deleted (1-based index)
 * @return {Node} - Updated head of the doubly linked list
 */

class Solution {
    deleteNode(head, position) {
        if (!head) return null; // If the list is empty, return null

        let currentNode = head;
        let count = 1;

        // Traverse to the node at the given position
        while (count < position) {
            count++;
            currentNode = currentNode.next;
        }

        // Case 1: Deleting the last node
        if (currentNode.next === null) {
            const previousNode = currentNode.prev;
            previousNode.next = null;
            currentNode.prev = null;
            return head;
        }

        // Case 2: Deleting the first node
        if (currentNode.prev === null) {
            const newHead = currentNode.next;
            newHead.prev = null;
            currentNode.next = null;
            return newHead;
        }

        // Case 3: Deleting a middle node
        const previousNode = currentNode.prev;
        const nextNode = currentNode.next;
        previousNode.next = nextNode;
        nextNode.prev = previousNode;

        // Disconnect the deleted node from the list
        currentNode.prev = null;
        currentNode.next = null;

        return head; // Return the updated head of the list
    }
}
