//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}

const readline = require('readline');
const rl = readline.createInterface(
    {input : process.stdin, output : process.stdout, terminal : false});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let idx = 1;

    while (t > 0) {
        let arr = input[idx].trim().split(/\s+/).map(Number);
        let x = parseInt(input[idx + 1].trim());
        idx += 2;
        let head = null;
        if (arr.length > 0 && arr[0] !== 0) {
            head = new Node(arr[0]);
            let tail = head;
            for (let i = 1; i < arr.length; i++) {
                tail.next = new Node(arr[i]);
                tail = tail.next;
            }
        }

        let obj = new Solution();
        let res = obj.getKthFromLast(head, x);
        console.log(res);
        t--;
    }
});

// } Driver Code Ends

/* 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head - The head of the linked list.
 * @param {number} k - The position from the last node to retrieve.
 * @returns {number} - The data of the kth node from the end of the list, or -1 if not found.
 */

class Solution {
    getKthFromLast(head, k) {
        // If the list is empty, return -1 as there's no node to retrieve.
        if (head === null) {
            return -1;
        }

        // Calculate the length of the list.
        let len = 0;
        for (let node = head; node !== null; node = node.next) {
            len++;
        }

        // If k is greater than the length of the list, return -1 (invalid index).
        if (len < k) {
            return -1;
        }

        // Traverse the list to reach the (len - k + 1)th node from the start.
        let curr = head;
        for (let i = 1; i < len - k + 1; i++) {
            curr = curr.next;
        }

        // Return the data of the kth node from the end.
        return curr.data;
    }
}
