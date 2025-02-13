//{ Driver Code Starts
//Initial Template for javascript
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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) 
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.minOperations(arr, n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
*/

// Custom class to implement a priority queue
class PQ {
    constructor() {
        this.arr = [undefined];  // Initialize with an undefined value at index 0 to make index-based calculation easier
    }
    
    // Method to insert a value into the priority queue
    insert(val) {
        this.arr.push(val);  // Add the value to the end of the array
        let idx = this.arr.length - 1;  // Get the index of the newly added element
        
        // Reorganize the array to maintain the min-heap property
        while (idx > 1) {
            const parentIdx = Math.floor(idx / 2);  // Find the parent index of the current element
            // If the current element is smaller than the parent, swap them
            if (this.arr[idx] < this.arr[parentIdx]) {
                this.arr[idx] += this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx] - this.arr[parentIdx];
                this.arr[idx] -= this.arr[parentIdx];
            }
            idx = parentIdx;  // Move up the tree
        }
    }
    
    // Method to get the size of the priority queue
    size() {
        return Math.max(0, this.arr.length - 1);  // Size is the length of the array minus 1, as the first element is undefined
    }
    
    // Method to get the top (smallest) element in the priority queue
    top() {
        if (this.size() > 0) return this.arr[1];  // The top element is at index 1
        return undefined;  // Return undefined if the queue is empty
    }
    
    // Method to remove the top element from the priority queue
    pop() {
        const lastItem = this.arr.pop();  // Get the last element of the queue
        if (this.size() > 0) {
            this.arr[1] = lastItem;  // Move the last element to the top
            let i = 1;  // Start at the root
            // Reorganize the array to maintain the min-heap property
            while (this.arr[i] > this.arr[i*2] || this.arr[i] > this.arr[i*2+1]) {
                let j = i;
                // Find the smaller child to swap with
                if (this.arr[i*2] && this.arr[i*2] < this.arr[i*2+1]) j = i*2;
                else j = i*2+1;
                
                // Swap the elements
                const temp = this.arr[i];
                this.arr[i] = this.arr[j];
                this.arr[j] = temp;
                
                i = j;  // Move to the next level
            }
        }
    }
}

class Solution {
    // Function to find minimum number of operations to make all elements equal.
    minOperations(a, n) {
        let sum = 0;  // To store the total number of operations
        const pq = new PQ();  // Initialize a priority queue
        for (let i = 0; i < n; i++) {
            // If the priority queue is not empty and the current element is greater than the smallest element in the queue
            if (pq.size() > 0 && pq.top() < a[i]) {
                sum += (a[i] - pq.top());  // Add the difference to the sum
                pq.pop();  // Remove the smallest element
                pq.insert(a[i]);  // Insert the current element into the queue
            }
            pq.insert(a[i]);  // Insert the current element into the queue
        }
        return sum;  // Return the total number of operations
    }
}
