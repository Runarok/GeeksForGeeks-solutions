//{ Driver Code Starts
// Node class for representing each node in the linked list
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

// Main function to handle input and process each test case
function main() {
    const readline = require('readline');
    const rl = readline.createInterface(
        {input : process.stdin, output : process.stdout, terminal : false});

    let input = [];
    rl.on('line', function(line) { input.push(line.trim()); });

    rl.on('close', function() {
        let index = 0;
        const t = parseInt(input[index++]);

        for (let testCase = 0; testCase < t; testCase++) {
            const k = parseInt(input[index++]);
            const inputArray = input[index++].split(' ');

            let head = null;
            let tail = null;

            if (inputArray.length > 0 && inputArray[0] !== '') {
                head = new Node(parseInt(inputArray[0]));
                tail = head;

                for (let i = 1; i < inputArray.length; i++) {
                    if (inputArray[i] !== '') {
                        tail.next = new Node(parseInt(inputArray[i]));
                        tail = tail.next;
                    }
                }

                if (k === 1 && head !== null) {
                    tail.next = head;
                }
            }

            const solution = new Solution();
            const isCircular = solution.isCircular(head);
            console.log(isCircular ? 'true' : 'false');
            console.log('~');
        }
    });
}

// Running the main function to start the program
main();

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
 * @return {boolean}
 */

class Solution {
    isCircular(head) {
        // Edge case: if the list is empty
        if (head === null) {
            return false;
        }

        let slow = head;
        let fast = head;

        // Traverse the list using two pointers
        while (fast !== null && fast.next !== null) {
            slow = slow.next;         // Move slow pointer one step
            fast = fast.next.next;    // Move fast pointer two steps

            // If both pointers meet, it's a circular list
            if (slow === fast) {
                return true;
            }
        }

        // If fast pointer reaches null, it's not circular
        return false;
    }
}
