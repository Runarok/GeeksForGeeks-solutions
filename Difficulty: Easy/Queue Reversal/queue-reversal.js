//{ Driver Code Starts
// Initial Template for JavaScript
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

class Queue {
    constructor() {
        this.arr = [];
        this.front = 0;
    }

    push(element) {
        // Adds an element to the queue
        this.arr.push(element);
    }

    pop() {
        // Removes and returns the front element of the queue
        if (this.arr.length != this.front) {
            let element = this.arr[this.front];
            this.front++;
            return element;
        }
        return -1;
    }

    front_ele() {
        // Returns the front element without removing it
        return this.arr[this.front];
    }

    empty() {
        // Checks if the queue is empty
        return this.arr.length == this.front;
    }
}

function main() {
    let t = parseInt(readLine());
    // Read number of test cases

    for (let i = 0; i < t; i++) {
        let q = new Queue();
        // Create a new queue

        let inputArray = readLine().split(' ').map(x => parseInt(x));
        // Read and parse input array

        let n = inputArray.length;
        // Get the size of the array

        // Enqueue all elements into the queue
        for (let i = 0; i < n; i++) {
            q.push(inputArray[i]);
        }

        let obj = new Solution();
        let reversedQueue = obj.reversedQueue(q);
        let result = '';

        // Dequeue and build the result string
        while (!reversedQueue.empty()) {
            result += reversedQueue.front_ele() + " ";
            reversedQueue.pop();
        }

        // Output the result
        console.log(result);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Queue} q
 * @returns {Queue}
 */

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }

    push(a){
        this.arr.push(a);
    }

    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }

    front_ele(){
        return this.arr[this.front];
    }

    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/

// User function Template for JavaScript

/**
 * @param {Queue} q
 * @returns {Queue}
 */

class Solution {
    // Function to reverse the queue.
    reversedQueue(q) {
        // Base case: If the queue is empty, return the queue as is.
        if (q.empty()) {
            return q;
        }

        // Pop the front element from the queue.
        const frontElement = q.pop();

        // Recursively reverse the rest of the queue.
        this.reversedQueue(q);

        // Push the popped element back to the queue to reverse the order.
        q.push(frontElement);

        return q;
    }
}
