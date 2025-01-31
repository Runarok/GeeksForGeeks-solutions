//{ Driver Code Starts
// Initial Template for JavaScript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
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
    let result = '';
    while (current !== null) {
        result += current.data + " ";
        current = current.next;
    }
    console.log(result.trim());
}

function main() {
    let t = parseInt(readLine()); // Read the number of test cases
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(Number);
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;

        // Construct the first linked list
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(Number);
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;

        // Construct the second linked list
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }

        let obj = new Solution();
        let res = obj.findIntersection(head1, head2);
        printList(res); // Print the resulting intersection linked list
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    findIntersection(head1, head2) {
        // Create a set to store the elements of the second linked list
        let set = new Set();
        let current2 = head2;

        // Traverse the second linked list and add each element to the set
        while (current2 !== null) {
            set.add(current2.data);
            current2 = current2.next;
        }

        // Create a dummy node to build the result linked list
        let result = new ListNode(-1);
        let temp = result;
        
        // Traverse the first linked list
        let current1 = head1;
        while (current1 !== null) {
            // If the data is in the set, it's an intersection, so add it to the result
            if (set.has(current1.data)) {
                temp.next = new ListNode(current1.data);
                temp = temp.next;
            }
            current1 = current1.next;
        }

        // Return the next of dummy node as the result (skipping the -1 dummy value)
        return result.next;
    }
}
