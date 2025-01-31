//{ Driver Code Starts
// Define the Node class
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Function to print the linked list
function print(root) {
    let temp = root;
    let result = [];
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(' ')); // Output the linked list elements in a single line
}

function checkZigZag(head) {
    if (!head || !head.next)
        return true; // Empty list or single node is considered zigzag

    let flag =
        true; // True indicates "<" relation is expected, false indicates ">" relation
    let curr = head;

    while (curr.next) {
        if (flag) {
            // Check for a < b
            if (curr.data > curr.next.data) {
                return false;
            }
        } else {
            // Check for a > b
            if (curr.data < curr.next.data) {
                return false;
            }
        }
        // Toggle flag for next relation
        flag = !flag;
        curr = curr.next;
    }
    return true;
}

// Main function (equivalent to C++ main)
function main() {
    const readline = require('readline');
    const rl = readline.createInterface(
        {input : process.stdin, output : process.stdout, terminal : false});

    let inputLines = [];

    rl.on('line', function(line) { inputLines.push(line.trim()); });

    rl.on('close', function() {
        let t = Number(inputLines[0]);
        let count = 1;

        for (let i = 0; i < t; i++) {
            let elements = inputLines[count].split(' ').map(Number);

            let head = null;
            let tail = null;

            for (let j = 0; j < elements.length; j++) {
                let x = elements[j];
                if (head === null) {
                    head = new Node(x);
                    tail = head;
                } else {
                    tail.next = new Node(x);
                    tail = tail.next;
                }
            }

            const solution = new Solution();
            let ans = solution.zigZag(head);
            if (checkZigZag(ans)) {
                console.log("true");
            } else {
                console.log("false");
            }
            // print(ans);

            count++;
        }
    });
}

// Call the main function to start execution
main();

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
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

class Solution {
    /* 
     * Function to convert the linked list into a zigzag pattern.
     * A zigzag pattern means:
     *   - For even indices (0, 2, 4,...), the data at the node should be less than the data at the next node.
     *   - For odd indices (1, 3, 5,...), the data at the node should be greater than the data at the next node.
     * 
     * @param {Node} head - The head of the linked list.
     * @returns {Node} - The modified linked list after arranging in zigzag pattern.
     */
    zigZag(head) {
        // If the list is empty or has only one element, no zigzag needed
        if (!head || !head.next) return head;

        let current = head;  // Start from the head of the list
        let count = 1;  // Initialize count to keep track of the position (even or odd)

        // Traverse the linked list
        while (current && current.next !== null) {
            // If we're at an even position (count is even)
            if (count % 2 === 0) {
                // Ensure the current node's data is less than the next node's data
                if (current.data < current.next.data) {
                    // Swap the data if the current node's value is smaller
                    let temp = current.next;
                    let tempData = current.data;
                    current.data = current.next.data;
                    temp.data = tempData;
                }
            } else {
                // If we're at an odd position (count is odd)
                // Ensure the current node's data is greater than the next node's data
                if (current.data > current.next.data) {
                    // Swap the data if the current node's value is greater
                    let temp = current.next;
                    let tempData = current.data;
                    current.data = current.next.data;
                    temp.data = tempData;
                }
            }

            // Move to the next node
            current = current.next;
            // Increment the count to switch between even and odd positions
            count++;
        }

        return head;  // Return the modified head of the list
    }
}
