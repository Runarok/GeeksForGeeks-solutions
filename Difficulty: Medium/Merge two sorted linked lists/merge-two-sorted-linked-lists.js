//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(head) {
    let temp = head;
    const result = [];
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(' '));
    console.log("~");
}

function createLinkedList(arr) {
    let head = null, tail = null;
    arr.forEach(value => {
        if (!isNaN(value)) {
            let newNode = new Node(value);
            if (head === null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
        }
    });
    return head;
}

// Driver code using readline for input/output
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let T = parseInt(input[0]);
    let index = 1;

    while (T--) {
        let arr1 = input[index].split(' ').map(Number);
        index++;
        let arr2 = input[index].split(' ').map(Number);
        index++;

        let head1 = createLinkedList(arr1);
        let head2 = createLinkedList(arr2);

        let obj = new Solution();
        let mergedList = obj.sortedMerge(head1, head2);
        printList(mergedList);
    }
});
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

// Definition for a singly linked list node
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    sortedMerge(head1, head2) {
        // Create a dummy node to start the merged list
        let dummy = new ListNode(-1);
        let current = dummy; // Pointer to build the new list

        // Merge the two lists
        while (head1 !== null && head2 !== null) {
            if (head1.data <= head2.data) {
                current.next = head1;  // Link the smaller node
                head1 = head1.next;    // Move head1 to the next node
            } else {
                current.next = head2;  // Link the smaller node
                head2 = head2.next;    // Move head2 to the next node
            }
            current = current.next;  // Move the pointer of the merged list
        }

        // If there are remaining nodes in either list, link them
        if (head1 !== null) {
            current.next = head1;
        }
        if (head2 !== null) {
            current.next = head2;
        }

        // Return the merged list starting from dummy.next
        return dummy.next;
    }
}

