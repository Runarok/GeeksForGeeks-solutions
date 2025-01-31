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
        head = null;
        let n = input_ar1.length;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let newHead = obj.partition(head, x);
        printlist(newHead);

        console.log("~");
    }
}

// } Driver Code Ends


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
    partition(head, x) {
        // Initialize three separate linked lists for less than x, equal to x, and greater than x
        let sH = null, sL = null, eH = null, eL = null, gH = null, gL = null;
        let t = head;

        // Traverse the entire linked list
        while (t !== null) {
            let n = new Node(t.data);  // Create a new node with current data

            // If the current node's data is less than x, add it to the 'smaller' list
            if (t.data < x) {
                if (sH === null) {
                    sH = n;  // If the smaller list is empty, this is the first node
                } else {
                    sL.next = n;  // Append the node to the end of the smaller list
                }
                sL = n;  // Move the tail pointer for the smaller list
            }
            // If the current node's data is equal to x, add it to the 'equal' list
            else if (t.data === x) {
                if (eH === null) {
                    eH = n;  // If the equal list is empty, this is the first node
                } else {
                    eL.next = n;  // Append the node to the end of the equal list
                }
                eL = n;  // Move the tail pointer for the equal list
            }
            // If the current node's data is greater than x, add it to the 'greater' list
            else {
                if (gH === null) {
                    gH = n;  // If the greater list is empty, this is the first node
                } else {
                    gL.next = n;  // Append the node to the end of the greater list
                }
                gL = n;  // Move the tail pointer for the greater list
            }
            t = t.next;  // Move to the next node in the original list
        }

        // If the greater list has elements, set its next to null to terminate the list
        if (gL !== null) {
            gL.next = null;
        }

        // Combine the three lists (smaller, equal, and greater)
        if (sH === null) {
            if (eH === null) {
                return gH;  // If there are no smaller or equal elements, just return the greater list
            }
            eL.next = gH;  // Append the greater list to the end of the equal list
            return eH;  // Return the equal list
        }

        if (eH === null) {
            sL.next = gH;  // If there are no equal elements, append the greater list to the smaller list
            return sH;  // Return the smaller list
        }

        sL.next = eH;  // Append the equal list to the end of the smaller list
        eL.next = gH;  // Append the greater list to the end of the equal list
        return sH;  // Return the smaller list, which now has the equal and greater lists appended
    }
}
