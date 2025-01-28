//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.data;
        current = current.next;
    }
    console.log(result.trim());
}

function main() {
    const t = parseInt(readLine()); // Read the number of test cases
    const solution = new Solution();

    for (let i = 0; i < t; i++) {
        let head1 = null, tail1 = null;
        let head2 = null, tail2 = null;

        const input1 = readLine();
        const input2 = readLine();

        // Create the linked list for input1
        for (const ch of input1) {
            const tmp = parseInt(ch, 10);
            const newNode = new Node(tmp);
            if (head1 === null) {
                head1 = newNode;
                tail1 = newNode;
            } else {
                tail1.next = newNode;
                tail1 = newNode;
            }
        }

        // Create the linked list for input2
        for (const ch of input2) {
            const tmp = parseInt(ch, 10);
            const newNode = new Node(tmp);
            if (head2 === null) {
                head2 = newNode;
                tail2 = newNode;
            } else {
                tail2.next = newNode;
                tail2 = newNode;
            }
        }

        const result = solution.subLinkedList(head1, head2);
        printList(result);
    }
}

// } Driver Code Ends

/**
 * A class to implement the solution for subtracting two numbers represented by linked lists.
 */
class Solution {
    
    /**
     * Subtracts two linked lists representing non-negative numbers.
     * 
     * @param {Node} head1 - The head of the first linked list (represents the first number).
     * @param {Node} head2 - The head of the second linked list (represents the second number).
     * 
     * @returns {Node} - The head of the resulting linked list that represents the difference of the two numbers.
     */
    subLinkedList(head1, head2) {
        
        // Convert both linked lists to arrays of digits
        let num1 = this.getNumberFromList(head1);
        let num2 = this.getNumberFromList(head2);
        
        // Ensure num1 is always the larger number for correct subtraction
        if (num1.length < num2.length || (num1.length === num2.length && num1.join('') < num2.join(''))) {
          // Swap num1 and num2 if num2 is larger
          [num1, num2] = [num2, num1];
        }
        
        let carry = 0; // Track borrow during subtraction
        let result = null; // Will hold the resulting linked list
        
        // Loop through both arrays starting from the least significant digit
        for (let i = 0; i < num1.length; i++) {
          const value1 = parseInt(num1[num1.length - 1 - i]) || 0; // Get the digit from num1 (or 0 if out of range)
          const value2 = parseInt(num2[num2.length - 1 - i]) || 0; // Get the digit from num2 (or 0 if out of range)
          
          // Perform subtraction and account for the borrow (carry)
          let diff = value1 - value2 - carry;
          
          // If the result is negative, adjust by adding 10 and set carry (borrow) to 1
          if (diff < 0) {
            diff += 10;
            carry = 1;
          } else {
            carry = 0; // No borrow required
          }
          
          // Create a new node for the difference and append it to the result list
          let newNode = new Node(diff);
          newNode.next = result; // Insert at the beginning of the result list
          result = newNode; // Move result to the new node
        }
        
        // Remove leading zeros from the result list (if any)
        while (result && result.data === 0) {
          result = result.next; // Skip over any leading zeros
        }
        
        // If no non-zero digits remain, return a single node with value 0
        return result || new Node(0);
    }
    
    /**
     * Converts a linked list into an array of digits.
     * 
     * @param {Node} head - The head of the linked list.
     * @returns {Array} - An array of digits from the linked list.
     */
    getNumberFromList(head) {
        let num = []; // Array to store the digits of the number
        while (head) {
          num.push(head.data); // Add the data of the current node to the array
          head = head.next; // Move to the next node
        }
        return num;
    }
}

