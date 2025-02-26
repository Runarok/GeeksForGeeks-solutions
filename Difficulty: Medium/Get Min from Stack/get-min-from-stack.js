//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let Q = parseInt(readLine());
        let st = new Solution();
        let results = [];

        for (let j = 0; j < Q; j++) {
            let query = readLine().split(' ').map(Number);
            let QueryType = query[0];

            if (QueryType === 1) {
                st.push(query[1]); // Push operation
            } else if (QueryType === 2) {
                st.pop(); // Pop operation (no output)
            } else if (QueryType === 3) {
                results.push(st.peek()); // Peek operation
            } else if (QueryType === 4) {
                results.push(st.getMin()); // GetMin operation
            }
        }

        console.log(results.join(" ")); // Print all results in one line
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /* The method push to push element into the stack */
    push(x) {
        // Push the element onto the main stack
        this.stack.push(x);
        
        // For the min stack, push the current min value
        if (this.minStack.length === 0) {
            this.minStack.push(x);
        } else {
            this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
        }
    }

    /* The method pop which pops out the top element of the stack */
    pop() {
        if (this.stack.length === 0) return;
        
        // Pop the top element from both the main stack and the min stack
        this.stack.pop();
        this.minStack.pop();
    }

    // The method peek() which returns the top element of the stack
    peek() {
        if (this.stack.length === 0) return -1;
        return this.stack[this.stack.length - 1];
    }

    /* The method getMin() which returns the minimum element of the stack */
    getMin() {
        if (this.minStack.length === 0) return -1;
        return this.minStack[this.minStack.length - 1];
    }
}
