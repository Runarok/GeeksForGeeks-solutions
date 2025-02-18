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
        let deq = new Deque();
        // let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        for (let i = 0; i < n; i++) deq.push_back(input_ar1[i]);
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let eraseQuery = input_ar2[0];
        let obj = new Solution();
        if (eraseQuery == 1) {
            let pos = input_ar2[1];
            obj.eraseAt(deq, pos);
        } else if (eraseQuery == 2) {
            let start = input_ar2[1];
            let end = input_ar2[2];
            obj.eraseInRange(deq, start, end);
        } else {
            obj.eraseAll(deq);
        }
        let res = '';
        while (!deq.empty()) {
            res += deq.front() + " ";
            deq.pop_front();
        }
        if (res.length === 0) {
            console.log("Empty");
        } else {
            console.log(res);
        }
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {

    /**
     * @param {Deque} deq
     * @param {number} X
     */
    // Function to erase the element from the specified position X in deque.
    eraseAt(deq, X) {
        // Remove the element at position X from the deque array
        deq.arr.splice(X, 1);
        // Decrease the size of the deque after removal
        deq.size--;
    }

    /**
     * @param {Deque} deq
     * @param {number} start
     * @param {number} end
     */
    // Function to erase the elements in range start (inclusive), end (exclusive).
    eraseInRange(deq, start, end) {
        // Remove elements between indices start and end from the deque array
        deq.arr.splice(start, end - start);
        // Adjust the size of the deque by subtracting the number of removed elements
        deq.size -= (end - start);
    }

    /**
     * @param {Deque} deq
     */
    // Function to erase all the elements in the deque.
    eraseAll(deq) {
        // Clear all elements in the deque array
        deq.arr = [];
        // Reset the size of the deque to 0
        deq.size = 0;
    }
}
