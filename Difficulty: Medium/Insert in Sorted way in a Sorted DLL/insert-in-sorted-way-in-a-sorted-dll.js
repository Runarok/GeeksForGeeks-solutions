//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" "));
}

function validate(head) {
    let current = head;
    while (current.next) {
        if (current.next.prev !== current) {
            return false;
        }
        current = current.next;
    }
    return true;
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => {
    let t = parseInt(inputLines[currentLine++]);

    for (let i = 0; i < t; i++) {
        let values = inputLines[currentLine++].split(" ").map(Number);
        let head = null;
        let tail = null;

        for (let value of values) {
            if (head === null) {
                head = new Node(value);
                tail = head;
            } else {
                tail.next = new Node(value);
                tail.next.prev = tail;
                tail = tail.next;
            }
        }

        let valueToInsert = parseInt(inputLines[currentLine++]);
        let solution = new Solution();
        head = solution.sortedInsert(head, valueToInsert);
        if (!validate(head)) {
            console.log("Invalid DLL");
        } else {
            printList(head);
        }
        console.log("~");
    }
});

// } Driver Code Ends


// User function Template for javascript

/*Doubly linked list Node
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head
 * @param {number} x
 * @return {Node}
 */

class Solution {
    sortedInsert(head, x) {
        // Create a new node with the given data
        const node = new Node(x);

        // If the list is empty, return the new node as the head
        if (head === null) {
            return node;
        }

        // If the new node's data is less than or equal to the head's data, insert it at the beginning
        if (x <= head.data) {
            node.next = head;
            head.prev = node;
            return node;
        }

        // Traverse the list to find the proper insertion point
        let ptr = head;
        let tailPtr = null;

        while (ptr !== null && ptr.data < x) {
            tailPtr = ptr;
            ptr = ptr.next;
        }

        // If x is the largest element, insert it at the end
        if (ptr === null) {
            tailPtr.next = node;
            node.prev = tailPtr;
        } else {
            // Otherwise, insert the node between tailPtr and ptr
            tailPtr.next = node;
            node.prev = tailPtr;
            node.next = ptr;
            ptr.prev = node;
        }

        // Return the (possibly new) head of the list
        return head;
    }
}