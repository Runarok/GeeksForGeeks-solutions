//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.KthLargest(arr, k);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The index of the largest element to find (kth largest).
 * @return {number} - The kth largest element in the array.
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the MinHeap
  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  // Remove and return the smallest element
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  // Peek at the smallest element without removing it
  getMin() {
    return this.heap[0];
  }

  // Get the size of the MinHeap
  size() {
    return this.heap.length;
  }

  // Bubble up the last element to maintain heap property
  _bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] >= this.heap[parentIdx]) break;
      [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
      idx = parentIdx;
    }
  }

  // Bubble down the root element to maintain heap property
  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) smallest = leftIdx;
      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) smallest = rightIdx;

      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}

class Solution {
    // Function to return kth largest element from an array.
    KthLargest(arr, k) {
        const minHeap = new MinHeap();

        // Iterate through the array
        for (const num of arr) {
          minHeap.insert(num);
    
          // If heap size exceeds k, remove the smallest element
          if (minHeap.size() > k) {
            minHeap.extractMin();
          }
        }
    
        // The root of the MinHeap is the kth largest element
        return minHeap.getMin();
    }
}
