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

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.maxAmount(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

class MaxHeap {
    constructor() { this.heap = []; }

    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] =
                [ this.heap[index], this.heap[parentIndex] ];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[largest], this.heap[index]] =
                [ this.heap[index], this.heap[largest] ];
            this.bubbleDown(largest);
        }
    }

    isEmpty() { return this.heap.length === 0; }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxAmount(arr, k) {
        // Initialize sum variable to store the total amount
        let sum = 0;

        // Loop until we have made k operations
        while (k > 0) {
            // Find the maximum value in the array
            let max = -Infinity;
            let maxIndex = -1;

            // Iterate through the array to find the maximum value and its index
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    maxIndex = i;
                }
            }

            // If the maximum value is zero, return the accumulated sum as no more amounts can be added
            if (max === 0) return sum;

            // Add the maximum value to the sum
            sum += max;

            // Decrement the value at the maxIndex position
            arr[maxIndex]--;

            // Decrease the number of operations left
            k--;
        }

        // Return the total sum after performing k operations
        return sum;
    }
}
