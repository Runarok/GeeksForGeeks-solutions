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

let head = null;

function findNode(head, search_for) {
    let current = head;
    while (current !== null) {
        if (current.data == search_for) break;
        current = current.next;
    }
    return current;
}

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
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let newHead = obj.reverseKGroup(head, k);
        printlist(newHead);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

*/

class Solution {
    reverseKGroup(head, k) {
        if (!head || k === 1) return head;  // No need to reverse if head is null or k = 1

        // Helper function to reverse a segment of k nodes
        function reverseKGroupUtil(head, k) {
            let current = head;
            let count = 0;
            
            // First, check if there are at least k nodes remaining
            while (current && count < k) {
                current = current.next;
                count++;
            }
            
            // If there are fewer than k nodes remaining, reverse them as well
            if (count < k) {
                return reverseList(head);
            }
            
            // Reverse the first k nodes
            let prev = null;
            let curr = head;
            let next = null;
            
            // Reverse k nodes
            for (let i = 0; i < k; i++) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            
            // After reversing the first k nodes, `head` is now the last node of the current reversed segment
            // Recursively reverse the rest of the list and link it back
            head.next = reverseKGroupUtil(curr, k);
            
            return prev;  // `prev` is the new head of the reversed segment
        }

        // Helper function to reverse the entire list (even if fewer than k nodes)
        function reverseList(head) {
            let prev = null;
            let curr = head;
            while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return prev;
        }

        return reverseKGroupUtil(head, k);
    }
}


