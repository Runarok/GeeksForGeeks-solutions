//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let newHead = obj.deleteMid(head);
        printlist(newHead);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @return {Node} node
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    // Function to delete the middle node of the linked list
    deleteMid(head) {
        // If the list is empty or has only one node, return null
        if (head === null || head.next === null) {
            return null;
        }

        let slow = head;
        let fast = head;
        let prev = null;

        // Traverse the list with slow and fast pointers
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;  // Fast pointer moves two steps at a time
            prev = slow;            // Slow pointer moves one step at a time
            slow = slow.next;       // Move slow pointer one step
        }

        // Delete the middle node by adjusting the previous node's next pointer
        prev.next = prev.next.next;

        return head;  // Return the updated list
    }
}