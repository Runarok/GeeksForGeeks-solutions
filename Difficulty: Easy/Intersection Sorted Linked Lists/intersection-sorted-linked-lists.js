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
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }

        let obj = new Solution();
        let res = obj.findIntersection(head1, head2);
        printlist(res);
        console.log("~");
    }
}

// Position this line where user code will be pasted.
// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {Node} head1 - Head of the first sorted linked list
 * @param {Node} head2 - Head of the second sorted linked list
 * @returns {Node} - Head of the new linked list containing the intersection
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    findIntersection(head1, head2) {
        let intersectionHead = new Node(0); // Dummy head node
        let current = intersectionHead; // Pointer to build the new list
        let pointer1 = head1; // Pointer for first list
        let pointer2 = head2; // Pointer for second list

        // Traverse both linked lists to find common elements
        while (pointer1 && pointer2) {
            if (pointer1.data < pointer2.data) {
                pointer1 = pointer1.next; // Move pointer1 forward
            } else if (pointer2.data < pointer1.data) {
                pointer2 = pointer2.next; // Move pointer2 forward
            } else {
                // Match found, add to intersection list
                current.next = new Node(pointer1.data);
                current = current.next;

                // Move both pointers forward
                pointer1 = pointer1.next;
                pointer2 = pointer2.next;
            }
        }

        return intersectionHead.next; // Return the intersection list (excluding dummy node)
    }
}
