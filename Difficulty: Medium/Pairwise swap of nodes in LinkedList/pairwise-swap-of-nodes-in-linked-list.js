//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.pairwise_swap(head);
        printlist(head);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
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

class Solution {
    // Function to swap elements pairwise in a linked list
    pairwise_swap(head) {
        // If the list is empty or has only one element, no swap is needed
        if (head === null || head.next === null) return head;

        // Initialize the current node and the previous node
        let current = head.next.next;
        let prev = head;

        // Update head to point to the second node
        head = head.next;

        // Perform the swap for the first two nodes
        head.next = prev;

        // Traverse the rest of the list and swap nodes pairwise
        while (current !== null && current.next !== null) {
            // Connect the previous node to the new pair
            prev.next = current.next;

            // Move prev to the current node
            prev = current;

            // Temporarily store the next node after the current pair
            let next = current.next.next;

            // Swap the pair by pointing the second node to the first node
            current.next.next = current;

            // Move to the next pair
            current = next;
        }

        // If the list ends with an odd number of elements, connect the last node
        prev.next = current;

        return head;
    }
}
