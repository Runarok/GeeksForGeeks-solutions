//{ Driver Code Starts
// Node class definition
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to print the linked list
function printList(node) {
    let current = node;
    while (current) {
        process.stdout.write(current.data + " ");
        current = current.next;
    }
    console.log();
}

// Function to store addresses of nodes in an array
function addressStore(arr, head) {
    let temp = head;
    let i = 0;
    while (temp) {
        arr[i] = temp;
        i++;
        temp = temp.next;
    }
}

// Function to check if nodes are swapped correctly
function check(before, after, num, k) {
    if (k > num) {
        return true;
    }

    for (let i = 0; i < num; i++) {
        if (i === k - 1 || i === num - k) {
            if (!(before[k - 1] === after[num - k] &&
                  before[num - k] === after[k - 1])) {
                return false;
            }
        } else {
            if (before[i].data !== after[i].data) {
                return false;
            }
        }
    }
    return true;
}

// Main function to read input and execute the program
function main(input) {
    let data = input.trim().split('\n');
    let t = parseInt(data[0].trim());
    let index = 1;

    for (let i = 0; i < t; i++) {
        let arr = data[index].trim().split(' ').map(Number);
        index++;
        let k = parseInt(data[index].trim());
        index++;

        let head = null;

        // Check if the array is empty
        if (arr.length > 0) {
            head = new Node(arr[0]);
            let tail = head;
            for (let j = 1; j < arr.length; j++) {
                tail.next = new Node(arr[j]);
                tail = tail.next;
            }
        }

        let num = arr.length;
        let before = new Array(num);
        addressStore(before, head);

        let solution = new Solution();
        head = solution.swapKthNode(head, k);

        let after = new Array(num);
        addressStore(after, head);

        if (check(before, after, num, k)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = '';
rl.on('line', function(line) { input += line + '\n'; });

rl.on('close', function() { main(input); });

// } Driver Code Ends


/* 
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

/**
 * @param {Node} head - The head of the linked list.
 * @param {number} k - The position of the node to swap with its kth counterpart from the end.
 * @returns {Node} - The updated linked list after swapping the kth node from the beginning and the kth node from the end.
 */

class Solution {
    swapKthNode(head, k) {
        // If the list is empty or the value of k is invalid, return the head as is.
        if (head === null || k <= 0) return head;
        
        let prev1 = null, prev2 = null;
        let curr1 = null, curr2 = null;
        let temp = head;
        let count = 0;

        // Traverse the list to find the kth node from the beginning and end
        while (temp) {
            // Find the kth node from the start
            if (count === k - 1) {
                curr1 = temp;
                curr2 = head; // Initialize curr2 from the head for the second pass
                temp = temp.next;
                count++;
            }
            // Traverse the list to find the first node before kth from start
            else if (!curr1) {
                prev1 = temp;
                temp = temp.next;
                count++;
            } 
            // Traverse the list to find the kth node from the end
            else if (curr2) {
                prev2 = curr2;
                curr2 = curr2.next;
                temp = temp.next;
                count++;
            } 
            // Continue traversing the list
            else {
                temp = temp.next;
                count++;
            }
        }

        // If the list is too short or kth node doesn't exist, return the head
        if (!curr1 || (count === 1 && !temp)) return head;

        // Special case when k is 1 or 2 (swapping head or adjacent nodes)
        if (count === 2 && k <= 2) {
            if (k === 1) {
                curr2.next = curr1;
                curr1.next = null;
                head = curr2;
                return head;
            } else {
                curr1.next = curr2;
                curr2.next = null;
                head = curr1;
                return head;
            }
        }

        // Swap the nodes at kth positions
        if (prev1) {
            prev1.next = curr2;
        }
        if (prev2) {
            prev2.next = curr1;
        }

        // Swap the 'next' pointers of the kth nodes
        let temp1 = curr1.next;
        curr1.next = curr2.next;
        curr2.next = temp1;

        // Handle the special case where the head needs to be updated
        if (k === 1) {
            return curr2;
        }
        if (k === count) {
            return curr1;
        }

        return head; // Return the updated head
    }
}
