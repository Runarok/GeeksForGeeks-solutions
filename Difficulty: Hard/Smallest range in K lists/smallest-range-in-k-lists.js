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


function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [n,k] = readLine().split(" ").map((x) => parseInt(x));
    let arr = [];
    for(let j = 0;j<k;j++){
      let input_line = readLine().split(" ").map((x) => parseInt(x));
      let row = new Array(n);
      for(let l = 0;l<n;l++){
        row[l] = input_line[l];
      }
      arr.push(row);
    }
    let obj = new Solution();
    let res = obj.findSmallestRange(arr,n,k);
    let s = "";
    for(let it of res) s+=it+" ";
    console.log(s); 
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
*/

class Solution {
    findSmallestRange(KSortedArray, n, k) {
        // Min-Heap (Priority Queue) to store elements as [value, arrayIndex, elementIndex]
        let pq = [];
        let range = [Number.MIN_VALUE, Number.MAX_VALUE]; // To store the smallest range
        let currentMax = Number.MIN_VALUE;

        // Initialize the heap with the first element from each array
        for (let i = 0; i < k; i++) {
            pq.push([KSortedArray[i][0], i, 0]); // [value, array index, element index]
            currentMax = Math.max(currentMax, KSortedArray[i][0]); // Track the current maximum
        }

        // Convert pq array into a min-heap using heapify
        this.heapify(pq);

        // Continue the process until we run out of elements in one of the arrays
        while (true) {
            // Get the minimum element from the heap (root of the min-heap)
            let [currentMin, arrayIndex, elementIndex] = pq[0];
            
            // Update the range if we found a smaller range
            if (currentMax - currentMin < range[1] - range[0]) {
                range = [currentMin, currentMax];
            }

            // If we have reached the end of any array, break
            if (elementIndex + 1 >= n) break;

            // Move the pointer of the array from which we took the element
            let nextElement = KSortedArray[arrayIndex][elementIndex + 1];
            pq[0] = [nextElement, arrayIndex, elementIndex + 1]; // Replace the minimum element in heap

            // Update the current maximum if necessary
            currentMax = Math.max(currentMax, nextElement);

            // Re-heapify the heap after modification (this ensures the heap remains valid)
            this.siftDown(pq, 0, pq.length);
        }

        return range; // Return the smallest range
    }

    // Helper function to heapify the array (min-heapify)
    heapify(pq) {
        let n = pq.length;
        // Simple heapify implementation, you can also use a built-in heap library
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.siftDown(pq, i, n);
        }
    }

    // Helper function to perform sift down (to maintain heap property)
    siftDown(pq, i, n) {
        let minIndex = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && pq[left][0] < pq[minIndex][0]) {
            minIndex = left;
        }

        if (right < n && pq[right][0] < pq[minIndex][0]) {
            minIndex = right;
        }

        if (minIndex !== i) {
            [pq[i], pq[minIndex]] = [pq[minIndex], pq[i]];
            this.siftDown(pq, minIndex, n);
        }
    }
}

/** ---------------------------------67/81 TLE----------------------------------*/
/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
*/

class Solution {
    findSmallestRange(KSortedArray, n, k) {
        // Min-Heap (Priority Queue) to store elements as [value, arrayIndex, elementIndex]
        let pq = [];
        let range = [Number.MIN_VALUE, Number.MAX_VALUE]; // To store the smallest range
        let currentMax = Number.MIN_VALUE;

        // Initialize the heap with the first element from each array
        for (let i = 0; i < k; i++) {
            pq.push([KSortedArray[i][0], i, 0]); // [value, array index, element index]
            currentMax = Math.max(currentMax, KSortedArray[i][0]); // Track the current maximum
        }

        // Convert pq array into a min-heap using heapify
        this.heapify(pq);

        while (true) {
            // Get the minimum element from the heap (root of the min-heap)
            let [currentMin, arrayIndex, elementIndex] = pq[0];
            
            // Update the range if we found a smaller range
            if (currentMax - currentMin < range[1] - range[0]) {
                range = [currentMin, currentMax];
            }

            // If we have reached the end of any array, break
            if (elementIndex + 1 >= n) break;

            // Move the pointer of the array from which we took the element
            let nextElement = KSortedArray[arrayIndex][elementIndex + 1];
            pq[0] = [nextElement, arrayIndex, elementIndex + 1]; // Replace the minimum element in heap

            // Update the current maximum if necessary
            currentMax = Math.max(currentMax, nextElement);

            // Re-heapify the heap after modification
            this.heapify(pq);
        }

        return range; // Return the smallest range
    }

    // Helper function to heapify the array (min-heapify)
    heapify(pq) {
        let n = pq.length;
        // Simple heapify implementation, you can also use a built-in heap library
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.siftDown(pq, i, n);
        }
    }

    // Helper function to perform sift down (to maintain heap property)
    siftDown(pq, i, n) {
        let minIndex = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && pq[left][0] < pq[minIndex][0]) {
            minIndex = left;
        }

        if (right < n && pq[right][0] < pq[minIndex][0]) {
            minIndex = right;
        }

        if (minIndex !== i) {
            [pq[i], pq[minIndex]] = [pq[minIndex], pq[i]];
            this.siftDown(pq, minIndex, n);
        }
    }
}


/** ---------------------------------57/81 TLE----------------------------------*/

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @return {number[]}
*/

class Solution {
    findSmallestRange(KSortedArray, n, k) {
        // Priority Queue (Min-Heap) to store elements: [value, arrayIndex, elementIndex]
        let pq = [];
        let range = [Number.MIN_VALUE, Number.MAX_VALUE]; // To store the smallest range
        let currentMax = Number.MIN_VALUE;

        // Initialize the heap with the first element from each array
        for (let i = 0; i < k; i++) {
            pq.push([KSortedArray[i][0], i, 0]); // [value, array index, element index]
            currentMax = Math.max(currentMax, KSortedArray[i][0]); // Track the current maximum
        }

        // Convert pq array into a min-heap
        pq.sort((a, b) => a[0] - b[0]); 

        while (true) {
            // Get the minimum element from the heap
            let [currentMin, arrayIndex, elementIndex] = pq[0];
            
            // Update the range if we found a smaller range
            if (currentMax - currentMin < range[1] - range[0]) {
                range = [currentMin, currentMax];
            }

            // If we have reached the end of any array, break
            if (elementIndex + 1 >= n) break;

            // Move the pointer of the array from which we took the element
            let nextElement = KSortedArray[arrayIndex][elementIndex + 1];
            pq[0] = [nextElement, arrayIndex, elementIndex + 1]; // Replace the minimum element in heap

            // Update the current maximum if necessary
            currentMax = Math.max(currentMax, nextElement);

            // Re-sort the heap after modification
            pq.sort((a, b) => a[0] - b[0]);
        }

        return range; // Return the smallest range
    }
}
