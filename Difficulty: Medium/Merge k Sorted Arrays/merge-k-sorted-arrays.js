//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let k = parseInt(readLine());
    let arr = readLine().split(" ").map((x) => parseInt(x));
    let arrays = [];
    for(let i =0;i<k*k;i+=k){
      let row = new Array(k);
      for(let j =0;j<k;j++){
        row[j] = arr[i+j];
      }
      arrays.push(row);
    }
    let obj = new Solution();
    let res = obj.mergeKArrays(arrays,k);
    printArray(res,res.length);

  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} arr - The input 2D array containing K sorted arrays.
 * @param {number} K - The number of arrays to merge.
 * @returns {number[]} - The merged and sorted array.
 */

class Heap {
    constructor() {
        // Initialize the heap with an empty array
        this.data = [];
    }

    // Insert an element into the heap while maintaining heap property
    insert(ele) {
        this.data.push(ele); // Add the element to the end of the heap
        let i = this.data.length - 1;
        let p = Math.floor((i - 1) / 2); // Parent index of the current element

        // Heapify upwards to maintain the min-heap property
        while (i > 0 && this.data[i].val < this.data[p].val) {
            [this.data[i], this.data[p]] = [this.data[p], this.data[i]]; // Swap with parent
            i = p;
            p = Math.floor((i - 1) / 2); // Update parent index
        }
    }

    // Remove the root element of the heap and maintain the heap property
    poll() {
        let ele = this.data[0]; // The root element (smallest value)
        this.data[0] = this.data[this.data.length - 1]; // Replace root with the last element
        this.data.pop(); // Remove the last element
        this.heapify(0); // Restore heap property
        return ele; // Return the removed root element
    }

    // Heapify the tree to maintain the min-heap property
    heapify(i) {
        let smallest = i; // Assume the current element is the smallest
        let l = i * 2 + 1; // Left child index
        let r = l + 1; // Right child index

        // Check if left child exists and is smaller than the current element
        if (l < this.data.length && this.data[l].val < this.data[smallest].val) {
            smallest = l;
        }

        // Check if right child exists and is smaller than the current element
        if (r < this.data.length && this.data[r].val < this.data[smallest].val) {
            smallest = r;
        }

        // If the smallest element is not the current one, swap and heapify further
        if (smallest != i) {
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            this.heapify(smallest); // Recursively heapify the affected subtree
        }
    }
}

// Class to represent a pair (array index, value, index in the array)
class Pair {
    constructor(arrName, val, ind) {
        this.name = arrName; // The array from which this element is taken
        this.val = val; // The value of the element
        this.ind = ind; // The index of the element in the array
    }
}

class Solution {
    /**
     * Function to merge K sorted arrays into a single sorted array.
     * @param {number[][]} arr - 2D array containing K sorted arrays
     * @param {number} K - Number of arrays to merge
     * @returns {number[]} - Merged and sorted array
     */
    mergeKArrays(arr, K) {
        // Initialize the heap and result array
        let h = new Heap();
        let r = [];

        // Add the first element of each array into the heap
        for (let i = 0; i < K; i++) {
            let p = new Pair(i, arr[i][0], 0); // Create a pair for each array
            h.insert(p); // Insert into the heap
        }

        // While the heap is not empty, extract the minimum and insert the next element from the same array
        while (h.data.length != 0) {
            let ele = h.poll(); // Get the smallest element
            r.push(ele.val); // Add it to the result array

            let newInd = ele.ind + 1; // Move to the next element in the same array
            if (arr[ele.name].length > newInd) {
                let p = new Pair(ele.name, arr[ele.name][newInd], newInd); // Create a new pair
                h.insert(p); // Insert the next element into the heap
            }
        }
        return r; // Return the merged sorted array
    }
}
