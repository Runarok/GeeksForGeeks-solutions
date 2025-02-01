//{ Driver Code Starts
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        ob.heapSort(arr);
        console.log(arr.join(' '));
        // console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to sort an array using Heap Sort algorithm.
     * @param {number[]} arr - The array to be sorted.
     */
    heapSort(arr) {
        let n = arr.length;

        // Build a max-heap (rearrange the array into a heap)
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(arr, n, i); // Ensure the heap property is satisfied for each subtree
        }

        // Extract elements one by one from the heap
        for (let i = n - 1; i > 0; i--) {
            // Swap the root (maximum value) with the last element
            [arr[0], arr[i]] = [arr[i], arr[0]];

            // Heapify the reduced heap to maintain the heap property
            this.heapify(arr, i, 0); // Now arr[0] is the largest element in the remaining unsorted part
        }
    }

    /**
     * Function to maintain the heap property for a subtree rooted at index `i`.
     * @param {number[]} arr - The array representing the heap.
     * @param {number} n - The size of the heap (for heapifying).
     * @param {number} i - The index of the subtree root to heapify.
     */
    heapify(arr, n, i) {
        let largest = i; // Initialize largest as root
        let left = 2 * i + 1; // Left child index
        let right = 2 * i + 2; // Right child index

        // If left child is larger than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is larger than root
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root, swap and heapify the affected subtree
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements

            // Recursively heapify the affected subtree
            this.heapify(arr, n, largest);
        }
    }
}
