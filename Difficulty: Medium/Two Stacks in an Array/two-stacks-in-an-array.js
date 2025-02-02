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

// Position this line where user code will be pasted.

function main() {
    let inputIndex = 0;
    const T = parseInt(inputString[inputIndex++]);
    for (let i = 0; i < T; i++) {
        const g = new TwoStacks();
        const Q = parseInt(inputString[inputIndex++]);
        for (let j = 0; j < Q; j++) {
            const query = inputString[inputIndex++].split(' ').map(Number);
            const stack_no = query[0];
            const QueryType = query[1];
            if (QueryType === 1) {
                const a = query[2];
                if (stack_no === 1) {
                    g.push1(a);
                } else if (stack_no === 2) {
                    g.push2(a);
                }
            } else if (QueryType === 2) {
                if (stack_no === 1) {
                    process.stdout.write(g.pop1() + ' ');
                } else if (stack_no === 2) {
                    process.stdout.write(g.pop2() + ' ');
                }
            }
        }
        console.log();
        console.log("~");
    }
}

// } Driver Code Ends


class TwoStacks {
    // Constructor to initialize the two stacks.
    constructor() {
        this.stack1 = [];  // First stack
        this.stack2 = [];  // Second stack
    }

    // Function to push an integer into the first stack (stack1).
    push1(x) {
        // Add element to the top of stack1
        this.stack1.push(x);
    }

    // Function to push an integer into the second stack (stack2).
    push2(x) {
        // Add element to the top of stack2
        this.stack2.push(x);
    }

    // Function to remove and return the top element from the first stack (stack1).
    pop1() {
        // If stack1 is empty, return -1 (indicating no element to pop)
        if (this.stack1.length === 0) {
            return -1;
        }
        // Remove and return the top element from stack1
        let poppedElement = this.stack1.pop();
        return poppedElement;
    }

    // Function to remove and return the top element from the second stack (stack2).
    pop2() {
        // If stack2 is empty, return -1 (indicating no element to pop)
        if (this.stack2.length === 0) {
            return -1;
        }
        // Remove and return the top element from stack2
        let poppedElement = this.stack2.pop();
        return poppedElement;
    }
}
