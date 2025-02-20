//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let nums = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.getMedian(nums);
        console.log(ans.map(x => x.toFixed(1)).join(" "));
    }
}
// } Driver Code Ends


/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // This function returns the list of medians after each number in the stream is processed.
    getMedian(arr) {
        let maxHeap = new MaxHeap();  // Max Heap to store the smaller half of the numbers
        let minHeap = new MinHeap();  // Min Heap to store the larger half of the numbers
        let result = [];  // This will store the resulting medians for each element in arr.

        // Loop through the stream of numbers in the input array `arr`
        for (let num of arr) {
            // Step 1: Add the new number to either the max heap or the min heap
            if (maxHeap.size() === 0 || num <= maxHeap.peek()) {
                // If maxHeap is empty or the number is smaller than or equal to the max element of the max heap
                // It goes to the max heap (the smaller half of the data)
                maxHeap.push(num);
            } else {
                // Otherwise, the number goes to the min heap (the larger half of the data)
                minHeap.push(num);
            }

            // Step 2: Balance the heaps to maintain the size property (size of the heaps can differ by at most 1)
            if (maxHeap.size() > minHeap.size() + 1) {
                // If max heap has more than one extra element, move the root of max heap to min heap
                minHeap.push(maxHeap.pop());
            } else if (minHeap.size() > maxHeap.size()) {
                // If min heap has more elements than max heap, move the root of min heap to max heap
                maxHeap.push(minHeap.pop());
            }

            // Step 3: Calculate the median
            if (maxHeap.size() > minHeap.size()) {
                // If max heap has more elements, the median is the root of max heap
                result.push(maxHeap.peek());
            } else {
                // If both heaps have the same size, the median is the average of both roots
                result.push((maxHeap.peek() + minHeap.peek()) / 2);
            }
        }

        // Return the list of medians after processing each element
        return result;
    }
}

// Max Heap class to store the smaller half of the numbers
class MaxHeap {
    constructor() {
        this.heap = [];  // Array to store the heap elements
    }

    // Insert a number into the max heap
    push(num) {
        this.heap.push(num);  // Add the number to the heap
        this.heapifyUp();  // Ensure the heap property is maintained (i.e., root is largest)
    }

    // Remove and return the root (maximum) element from the max heap
    pop() {
        if (this.size() === 0) return null;  // If the heap is empty, return null
        let root = this.heap[0];  // Store the root element
        this.heap[0] = this.heap.pop();  // Replace root with the last element
        this.heapifyDown();  // Ensure the heap property is maintained (i.e., root is largest)
        return root;  // Return the old root
    }

    // Peek the root element of the max heap
    peek() {
        return this.heap[0];  // The root is the largest element
    }

    // Return the number of elements in the max heap
    size() {
        return this.heap.length;  // Size of the heap
    }

    // Maintain the max heap property by moving up the element at the last index if necessary
    heapifyUp() {
        let index = this.size() - 1;  // Start from the last element in the heap
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);  // Calculate the index of the parent node
            if (this.heap[parentIndex] >= this.heap[index]) break;  // If the parent is larger or equal, stop
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];  // Swap
            index = parentIndex;  // Move up to the parent
        }
    }

    // Maintain the max heap property by moving down the element at index 0 if necessary
    heapifyDown() {
        let index = 0;  // Start from the root
        while (2 * index + 1 < this.size()) {  // While the node has at least one child
            let left = 2 * index + 1;  // Left child index
            let right = 2 * index + 2;  // Right child index
            let largest = index;  // Start with the current index as the largest

            // Find the largest among the node and its two children
            if (left < this.size() && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.size() && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;  // If the current node is the largest, stop

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];  // Swap
            index = largest;  // Move down to the largest child
        }
    }
}

// Min Heap class to store the larger half of the numbers
class MinHeap {
    constructor() {
        this.heap = [];  // Array to store the heap elements
    }

    // Insert a number into the min heap
    push(num) {
        this.heap.push(num);  // Add the number to the heap
        this.heapifyUp();  // Ensure the heap property is maintained (i.e., root is smallest)
    }

    // Remove and return the root (minimum) element from the min heap
    pop() {
        if (this.size() === 0) return null;  // If the heap is empty, return null
        let root = this.heap[0];  // Store the root element
        this.heap[0] = this.heap.pop();  // Replace root with the last element
        this.heapifyDown();  // Ensure the heap property is maintained (i.e., root is smallest)
        return root;  // Return the old root
    }

    // Peek the root element of the min heap
    peek() {
        return this.heap[0];  // The root is the smallest element
    }

    // Return the number of elements in the min heap
    size() {
        return this.heap.length;  // Size of the heap
    }

    // Maintain the min heap property by moving up the element at the last index if necessary
    heapifyUp() {
        let index = this.size() - 1;  // Start from the last element in the heap
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);  // Calculate the index of the parent node
            if (this.heap[parentIndex] <= this.heap[index]) break;  // If the parent is smaller or equal, stop
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];  // Swap
            index = parentIndex;  // Move up to the parent
        }
    }

    // Maintain the min heap property by moving down the element at index 0 if necessary
    heapifyDown() {
        let index = 0;  // Start from the root
        while (2 * index + 1 < this.size()) {  // While the node has at least one child
            let left = 2 * index + 1;  // Left child index
            let right = 2 * index + 2;  // Right child index
            let smallest = index;  // Start with the current index as the smallest

            // Find the smallest among the node and its two children
            if (left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;  // If the current node is the smallest, stop

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];  // Swap
            index = smallest;  // Move down to the smallest child
        }
    }
}
