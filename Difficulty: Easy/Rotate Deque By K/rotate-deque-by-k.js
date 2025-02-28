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

        // let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let rotateQuery = parseInt(readLine().trim());
        let k = parseInt(readLine().trim());

        let obj = new Solution();
        if (rotateQuery == 1) {
            obj.right_Rotate_Deq_ByK(deq, n, k);
        } else {
            obj.left_Rotate_Deq_ByK(deq, n, k);
        }

        let res = '';
        while (!deq.empty()) {
            res += deq.front() + " ";
            deq.pop_front();
        }
        console.log(res);
    }
}
// } Driver Code Ends


class Solution {
    
    /**
     * Rotates deque by k places in anti-clockwise direction.
     * @param {Deque} deq - The deque to rotate.
     * @param {number} n - The length of the deque.
     * @param {number} k - The number of positions to rotate.
     */
    left_Rotate_Deq_ByK(deq, n, k) {
        k = k % n; // Ensure k is within bounds of deque length
        if (k > 0) {
            const temp = deq.arr.slice(0, k); // Get first k elements
            deq.arr = deq.arr.slice(k).concat(temp); // Move the first k elements to the end
        }
    }
    
    /**
     * Rotates deque by k places in clockwise direction.
     * @param {Deque} deq - The deque to rotate.
     * @param {number} n - The length of the deque.
     * @param {number} k - The number of positions to rotate.
     */
    right_Rotate_Deq_ByK(deq, n, k) {
        k = k % n; // Ensure k is within bounds of deque length
        if (k > 0) {
            const temp = deq.arr.slice(-k); // Get last k elements
            deq.arr = temp.concat(deq.arr.slice(0, n - k)); // Move the last k elements to the front
        }
    }
}
