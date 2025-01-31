//{ Driver Code Starts
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
        let res = ob.GetNth(head, k);
        console.log(res);
        console.log("~")
        index += 2;
    }
});

// } Driver Code Ends

// User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @param {number} index
 * @return {number}
 */

class Solution {
    GetNth(head, index) {
        // If the head is null, return -1 as the list is empty
        let current = head;
        
        if (head == null) {
            return -1;  // Empty list, no element to return
        }
        
        // Traverse the linked list until reaching the desired index
        // Start from the second node (index starts at 1, so for index 2 we start at i = 2)
        for (let i = 2; i <= index; i++) {
            // If current becomes null, it means the list is shorter than the index provided
            if (current == null) {
                return -1;  // Index out of range
            }
            
            current = current.next;  // Move to the next node in the list
        }
        
        // Return the data at the desired index (1-based index)
        return current.data;  // Return the data of the node at the given index
    }
}
