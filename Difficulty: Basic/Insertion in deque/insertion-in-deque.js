//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

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

function
    main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = [];
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr.push(input_ar1[i]);
        let obj = new Solution();
        let res = obj.deque_Init(arr, n);
        let s = '';
        while (!res.empty()) {
            s += res.front() + " ";
            res.pop_front();
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {Deque}
 */

class Solution {
    deque_Init(arr, n) {
        // Initialize a new deque
        let deq = new Deque();

        // Insert each element from the array into the deque
        for (let i = 0; i < n; i++) {
            deq.push_back(arr[i]);
        }

        // Return the initialized deque
        return deq;
    }
}
