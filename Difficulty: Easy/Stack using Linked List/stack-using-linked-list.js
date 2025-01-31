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

class StackNode {
    constructor(a) {
        this.data = a;
        this.next = null;
    }
}

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let stack = new MyStack();
        let result = '';
        let j = 0;

        while (j < arr.length) {
            let QueryType = arr[j++];
            if (QueryType === 1) {
                stack.push(arr[j++]);
            } else if (QueryType === 2) {
                result += stack.pop() + ' ';
            }
        }

        console.log(result.trim());
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class MyStack {
    constructor() {
        this.head = null;
    }

    // Function to push an integer into the stack.
    push(data) {
        const newNode = new StackNode(data);  // Create a new stack node
        newNode.next = this.head;             // Point new node to the top of the stack
        this.head = newNode;                  // Move head to the new node (top of stack)
    }

    // Function to remove an item from the top of the stack.
    pop() {
        if (this.head === null) {
            return -1;  // If stack is empty, return -1
        }
        const poppedData = this.head.data;  // Get the data from the top node
        this.head = this.head.next;         // Move head to the next node (remove top node)
        return poppedData;
    }
}
