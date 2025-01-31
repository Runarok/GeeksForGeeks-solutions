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
        let common_list = "";
        common_list = readLine();
        let input_ar3 = [];
        let head3 = null;
        input_ar3 = common_list.split(' ').map(x => parseInt(x));
        head3 = new Node(input_ar3[0]);
        let tail3 = head3;
        for (let i = 1; i < input_ar3.length; i++) {
            tail3.next = new Node(input_ar3[i]);
            tail3 = tail3.next;
        }

        let temp = head1;
        while (temp !== null && temp.next !== null) temp = temp.next;
        if (temp !== null) temp.next = head3;

        temp = head2;
        while (temp !== null && temp.next !== null) temp = temp.next;
        if (temp !== null) temp.next = head3;

        let obj = new Solution();
        let intersectionNode = obj.intersectPoint(head1, head2);

        console.log(intersectionNode.data);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Node} head1 - Head of the first linked list
 * @param {Node} head2 - Head of the second linked list
 * @returns {number} - Intersection point value, or null if no intersection
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
    // Function to find the intersection point of two Y-shaped linked lists.
    intersectPoint(head1, head2) {
        if (!head1 || !head2) return null; // If any list is empty, there's no intersection

        let pointerA = head1; // Pointer for traversing first list
        let pointerB = head2; // Pointer for traversing second list
        
        // Traverse both lists, switching to the other list when reaching the end
        while (pointerA !== pointerB) {
            pointerA = pointerA ? pointerA.next : head2; // Move to the next node or switch to head of the other list
            pointerB = pointerB ? pointerB.next : head1;
        }
        
        return pointerA; // Returns the intersection node or null if no intersection
    }
}
