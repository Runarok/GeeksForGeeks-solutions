//{ Driver Code Starts
// Initial Template for JavaScript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
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
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputArr = readLine().split(' ').map(x => parseInt(x));
        let n = inputArr.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = inputArr[i];
        }
        let obj = new Solution();
        let head = obj.construct(arr);
        printList(head);
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * class Node{
 *     constructor(data){
 *         this.data = data;
 *         this.next = null;
 *     }
 * }
 */

class Solution {
    // Function to construct linked list from given array.
    construct(arr) {
        // Check if the array is empty, if so return null (no linked list)
        if (arr.length === 0) {
            return null;
        }
        
        // Create the head node with the first element of the array
        let head = new Node(arr[0], null);
        
        // Initialize current pointer to head
        let curr = head;

        // Loop through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // Create a new node with the current array element and link it to the current node
            curr.next = new Node(arr[i], null);
            
            // Move the current pointer to the newly created node
            curr = curr.next;
        }
        
        // Return the head of the constructed linked list
        return head;
    }
}
