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

function printList(head) {
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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        head = obj.quickSort(head); // Ensure to update head with the sorted list
        printList(head);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {void}
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
    // Partition function that rearranges nodes around a pivot and returns the pivot node
    partition(head, tail) {
        let pivot = head; // Set the pivot to be the first node
        let curr = head.next; // Start from the second node
        let lessThanPivot = head; // This will point to the last node that is less than pivot

        // Traverse through the list and rearrange nodes around the pivot
        while (curr !== null && curr !== tail.next) {
            if (curr.data < pivot.data) {
                // Swap the values between current node and the node pointed by lessThanPivot
                [curr.data, lessThanPivot.next.data] = [lessThanPivot.next.data, curr.data];
                lessThanPivot = lessThanPivot.next; // Move the lessThanPivot pointer forward
            }
            curr = curr.next; // Move to the next node
        }
        
        // After the loop, place the pivot in the correct position
        [head.data, lessThanPivot.data] = [lessThanPivot.data, head.data];

        return lessThanPivot; // Return the node that is now at the pivot position
    }

    // Recursive function to sort the list using quicksort approach
    sort(head, tail) {
        // Base case: If head is null, or head is the same as tail, or there's only one node
        if (head === null || head === tail || head.next === null) return;

        // Partition the list and get the pivot node
        let pivot = this.partition(head, tail);

        // Recursively sort the two halves
        this.sort(head, pivot); // Sort the left part
        this.sort(pivot.next, tail); // Sort the right part
    }

    // Function to perform quicksort on the linked list
    quickSort(head) {
        // If the list is empty or contains only one node, it's already sorted
        if (head === null || head.next === null) return head;
        
        let tail = head;

        // Move the tail pointer to the last node in the list
        while (tail.next !== null) {
            tail = tail.next;
        }

        // Sort the list using quicksort
        this.sort(head, tail);

        // Return the sorted list
        return head;
    }
}
