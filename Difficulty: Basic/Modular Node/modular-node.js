//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    while (node !== null) {
        process.stdout.write(node.data + " ");
        node = node.next;
    }
    console.log();
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
rl.on('line', function(line) { inputLines.push(line); });

rl.on('close', function() {
    let t = parseInt(inputLines[0]);
    let index = 1;
    for (let i = 0; i < t; i++) {
        let arr = inputLines[index].split(' ').map(Number);
        let k = parseInt(inputLines[index + 1]);
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let ob = new Solution();
        let res = ob.modularNode(head, k);
        console.log(res);
        index += 2;
    }
});

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @param {number} k
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
    modularNode(head, k) {
        let current = head;  // Pointer to traverse the linked list
        let index = 1;       // Index starts from 1
        let result = -1;     // Default result if no modular node is found

        while (current !== null) {
            if (index % k === 0) {
                result = current.data;  // Update the result with the current node's data
            }
            current = current.next;    // Move to the next node
            index++;                   // Increment the index
        }
        
        return result;  // If no modular node was found, result will still be -1
    }
}
