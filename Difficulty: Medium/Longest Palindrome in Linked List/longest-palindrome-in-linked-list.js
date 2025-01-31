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
        let n = input_ar1.length;
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        let res = obj.maxPalindrome(head);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

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
    /* 
     * Function to find the maximum length of a palindrome in the linked list.
     * If the linked list is empty, return 0.
     */
    maxPalindrome(node) {
        if (!node) return 0;  // If the linked list is empty, return 0.

        // Step 1: Convert linked list to an array to easily access node data
        let values = [], curr = node;
        while (curr !== null) {
            values.push(curr.data);  // Push each node's data into the values array.
            curr = curr.next;
        }

        let n = values.length, maxLength = 1;  // Initialize the maximum palindrome length as 1.

        // Helper function to expand around the center of a potential palindrome
        const expandAroundCenter = (left, right) => {
            while (left >= 0 && right < n && values[left] === values[right]) {
                maxLength = Math.max(maxLength, right - left + 1);  // Update maxLength
                left--;  // Expand to the left
                right++;  // Expand to the right
            }
        };

        // Step 2: Check for palindromes centered at each node and between every two nodes
        for (let i = 0; i < n; i++) {
            // Odd-length palindrome (single character in the center)
            expandAroundCenter(i, i);

            // Even-length palindrome (two characters in the center)
            expandAroundCenter(i, i + 1);
        }

        // Step 3: Return the length of the longest palindrome found
        return maxLength;
    }
}
