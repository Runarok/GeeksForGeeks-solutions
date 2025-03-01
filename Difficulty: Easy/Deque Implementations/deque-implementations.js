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
}

function
    main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let dq = new Deque();
        let obj = new Solution();
        let q = parseInt(readLine());
        while (q--) {
            let input_ar1 = readLine().split(' ');
            if (input_ar1[0] == "pb") {
                obj.push_back_pb(dq, input_ar1[1]);
                console.log(dq.arr[dq.size - 1]);
            } else if (input_ar1[0] == "pf") {
                obj.push_front_pf(dq, input_ar1[1]);
                console.log(dq.arr[0]);
            } else if (input_ar1[0] == "pp_b") {
                obj.pop_back_ppb(dq);
                console.log(dq.size);
            } else if (input_ar1[0] == "f") {
                console.log(obj.front_dq(dq));
            }
        }
        dq.arr = [];
        dq.size = 0;
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

class Solution {
    /**
     * @param {Deque} dq - The deque object to operate on.
     * @param {number} x - The element to be added to the back of the deque.
    */
    // Function to push element x to the back of the deque.
    push_back_pb(dq, x) {
        // Increment the size of the deque
        dq.size++;
        // Add the element to the end of the deque array
        dq.arr.push(x);
    }

    /**
     * @param {Deque} dq - The deque object to operate on.
    */
    // Function to remove the element from the back of the deque.
    pop_back_ppb(dq) {
        // If the deque is empty, return -1
        if (dq.size === 0) return -1;

        // Decrease the size of the deque
        dq.size--;
        // Remove the element from the end of the deque array
        dq.arr.pop();
    }

    /**
     * @param {Deque} dq - The deque object to operate on.
    */
    // Function to return the element at the front of the deque.
    front_dq(dq) {
        // If the deque is empty, return -1
        if (dq.size === 0) return -1;

        // Return the first element in the deque array
        return dq.arr[0];
    }

    /**
     * @param {Deque} dq - The deque object to operate on.
     * @param {number} x - The element to be added to the front of the deque.
    */
    // Function to push element x to the front of the deque.
    push_front_pf(dq, x) {
        // Increment the size of the deque
        dq.size++;
        // Add the element to the front of the deque array
        dq.arr.unshift(x);
    }
}
