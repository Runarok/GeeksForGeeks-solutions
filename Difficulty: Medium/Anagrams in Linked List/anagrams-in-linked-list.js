//{ Driver Code Starts
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

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.data + ' ';
        current = current.next;
    }
    console.log(result.trim());
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const list1 = new LinkedList();
        const values = readLine().split(' ');
        for (const val of values) {
            list1.insert(val);
        }
        const s = readLine();
        const solution = new Solution();
        const res = solution.findAnagrams(list1.head, s);
        for (const head of res) {
            printList(head);
        }
        if (res.length === 0) {
            console.log('-1');
        }
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Node} head
 * @param {string} str
 */

// Definition for singly-linked list node.
class ListNode {
    constructor(data = 0, next = null) {
        this.data = data;  // Data for the current node
        this.next = next;  // Pointer to the next node in the list
    }
}

class Solution {
    // Function to find all anagram start positions in the linked list
    findAnagrams(head, s) {
        let ans = [];  // Array to store the start nodes of all anagrams found
        if (!head) {  // If the linked list is empty, return an empty array
            return ans;
        }

        // Sort string `s` alphabetically to prepare for comparison
        s = s.split('').sort().join('');
        let m = s.length;  // Length of the sorted string
        let left = head;   // Pointer to the start of the current window in the list
        let right = head;  // Pointer to the end of the current window in the list
        let cur = '';      // String to accumulate the current window's characters

        // Traverse the linked list with `right` pointer
        while (right) {
            cur += right.data;  // Add the current node's data to the `cur` string

            // Move the `left` pointer forward if the window length exceeds the length of `s`
            while (left !== right && cur.length > m) {
                left = left.next;  // Move `left` to the next node
                cur = cur.slice(1);  // Remove the first character from `cur`
            }

            // Check if the current string matches the sorted version of `s`
            if (cur.split('').sort().join('') === s) {
                ans.push(left);  // If it matches, add `left` (start of the window) to the answer
                let tmp = right.next;  // Save the next node after `right`
                right.next = null;  // Disconnect the window by setting `right.next` to null
                left = tmp;  // Move both `left` and `right` to the next node
                right = tmp;
                cur = '';  // Reset `cur` for the next window
            } else {
                right = right.next;  // Move the `right` pointer forward
            }
        }

        return ans;  // Return the list of nodes where anagrams start
    }
}
