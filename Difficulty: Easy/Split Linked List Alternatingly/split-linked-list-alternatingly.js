//{ Driver Code Starts
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    while (current !== null) {
        process.stdout.write(current.data + " ");
        current = current.next;
    }
    console.log();
}

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line.trim()); }).on('close', () => {
    let t = parseInt(input[0]);
    let count = 1;
    let index = 1;

    while (count <= t) {
        let arr = input[index].split(' ').map(Number);
        let head = new Node(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; ++i) {
            tail.next = new Node(arr[i]);
            tail = tail.next;
        }

        const solution = new Solution();
        let result = solution.alternatingSplitList(head);
        printList(result[0]);
        printList(result[1]);
        console.log("~");
        count++;
        index++;
    }
});

// } Driver Code Ends


// User function Template for JavaScript

/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head - Head of the original linked list
 * @return {Array} - An array containing the heads of the two split lists
 *                  [list1Head, list2Head]
 *                  list1Head will contain the nodes at even indices,
 *                  list2Head will contain the nodes at odd indices.
 */

class Solution {
    alternatingSplitList(head) {
        // Initialize two new lists: one for even indexed nodes and one for odd indexed nodes
        let list1Head = null;
        let list2Head = null;
        let list1Tail = null;
        let list2Tail = null;

        let current = head; // Pointer to traverse the original list
        let index = 0; // Index counter to differentiate between even and odd nodes

        // Traverse through the original linked list
        while (current) {
            // If the index is even, add to the first list (list1)
            if (index % 2 === 0) {
                if (!list1Head) { // If list1 is empty, initialize it with the current node
                    list1Head = new Node(current.data);
                    list1Tail = list1Head; // Set the tail of list1
                } else {
                    // If list1 already has nodes, append the current node to the tail of list1
                    list1Tail.next = new Node(current.data);
                    list1Tail = list1Tail.next;
                }
            } else { // If the index is odd, add to the second list (list2)
                if (!list2Head) { // If list2 is empty, initialize it with the current node
                    list2Head = new Node(current.data);
                    list2Tail = list2Head; // Set the tail of list2
                } else {
                    // If list2 already has nodes, append the current node to the tail of list2
                    list2Tail.next = new Node(current.data);
                    list2Tail = list2Tail.next;
                }
            }
            current = current.next; // Move to the next node in the original list
            index++; // Increment the index to track even or odd positions
        }

        // Return an array containing both lists: list1Head and list2Head
        return [list1Head, list2Head];
    }
}
