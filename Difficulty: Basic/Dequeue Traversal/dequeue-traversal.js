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

class Deque {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    push_front(a) {
        this.arr.unshift(a);
        this.size++;
    }

    pop_front() {
        this.arr.shift();
        this.size--;
    }

    push_back(a) {
        this.arr.push(a);
        this.size++;
    }

    pop_back() {
        this.arr.pop();
        this.size--;
    }

    front() { return this.arr[0]; }

    back() { return this.arr[this.size - 1]; }

    empty() {
        if (this.size !== 0)
            return false;
        else
            return true;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let Deq = new Deque();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        for (let i = 0; i < n; i++) Deq.push_back(input_ar1[i]);
        let obj = new Solution();
        obj.printDeque(Deq);
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Deque} Deq
 */

class Solution {
    // Function to traverse the Deque and print the elements of it.
    printDeque(Deq) {
        // Print the elements of the deque by joining the array with a space separator
        console.log(Deq.arr.join(' '));
    }
}
