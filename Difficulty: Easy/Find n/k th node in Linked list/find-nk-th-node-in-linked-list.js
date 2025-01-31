//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(head) {
    let temp = head;
    let s = '';
    while (temp !== null) {
        s += temp.data + " ";
        temp = temp.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.fractional_node(head, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
 */

class Solution {
    // Function to find the fractional node in the linked list.
    fractional_node(head, k) {
        // First, traverse the list to get the length of the linked list
        let n = 0;
        let current = head;
        
        while (current !== null) {
            n++;
            current = current.next;
        }

        // Calculate the position using ceiling of (n / k)
        let position = Math.ceil(n / k);

        // Traverse the list again to find the (position)th node
        current = head;
        let count = 1;  // We are using 1-based indexing
        
        while (current !== null) {
            if (count === position) {
                return current.data;
            }
            count++;
            current = current.next;
        }

        return -1;  // If the position is out of bounds, though it's guaranteed not to happen
    }
}
