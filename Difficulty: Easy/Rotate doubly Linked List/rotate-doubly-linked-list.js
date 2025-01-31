//{ Driver Code Starts
const readline = require("readline");

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

function printList(head) {
    let curr = head;
    const result = [];
    while (curr) {
        result.push(curr.data);
        curr = curr.next;
    }
    console.log(result.join(" "));
}

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let t, currentTestCase = 0, testCaseInputs = [];

rl.on("line", (line) => {
    if (!t) {
        t = parseInt(line.trim());
    } else {
        testCaseInputs.push(line.trim());
        currentTestCase++;
        if (currentTestCase === 2 * t) {
            rl.close();
        }
    }
});

rl.on("close", () => {
    for (let i = 0; i < t; i++) {
        const arr = testCaseInputs[2 * i].split(" ").map(Number);
        const d = parseInt(testCaseInputs[2 * i + 1]);

        let start = null, cur = null;

        // Build doubly linked list
        for (let num of arr) {
            const node = new Node(num);
            if (!start) {
                start = node;
                cur = node;
            } else {
                cur.next = node;
                node.prev = cur;
                cur = node;
            }
        }

        const solution = new Solution();
        const rotatedList = solution.rotateDLL(start, d);
        printList(rotatedList);
        console.log("~");
    }
});

// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function to rotate the doubly linked list by p positions
    rotateDLL(head, p) {
        // If the list is empty or p is less than or equal to 0, return the original head
        if (head === null || p <= 0) {
            return head;
        }

        let current = head;
        let length = 1;

        // Traverse the list to find the length and the last node
        while (current.next !== null) {
            current = current.next;
            length++;
        }

        // If p is greater than the length, reduce p
        p = p % length;

        if (p === 0) {
            return head;  // No rotation needed if p is a multiple of the list length
        }

        // Find the (p-1)-th node
        current = head;
        for (let i = 1; i < p; i++) {
            current = current.next;
        }

        // 'current' now is at the (p-1)-th node
        let slow = current;

        // 'slow.next' will be the new head
        let newHead = slow.next;

        // Set slow.next to null to break the link
        slow.next = null;

        // Now, connect the last node to the original head
        let lastNode = newHead;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }
        lastNode.next = head;
        head.prev = lastNode;

        // Set the new head's prev to null
        newHead.prev = null;

        return newHead;
    }
}
