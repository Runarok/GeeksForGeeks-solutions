//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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
        let k = parseInt(readLine());
        let ob = new Solution();
        ob.nearlySorted(arr, k);
        console.log(arr.join(' '));
        // console.log("~");
        tc--;
    }
}
// } Driver Code Ends


class Solution {
    nearlySorted(arr, k) {
        // Importing the required heap module
        const heap = new MinHeap();
        
        // Initial filling of the heap with the first k+1 elements
        for (let i = 0; i <= k; i++) {
            heap.push(arr[i]);
        }
        
        // Index for placing the sorted elements back into arr
        let index = 0;
        
        // Traverse the rest of the array
        for (let i = k + 1; i < arr.length; i++) {
            // Extract the smallest element from the heap and place it in the result
            arr[index++] = heap.pop();
            // Add the next element from the array into the heap
            heap.push(arr[i]);
        }
        
        // After the loop, we may still have elements in the heap that need to be placed in the array
        while (heap.size() > 0) {
            arr[index++] = heap.pop();
        }
    }
}

// MinHeap class to manage the heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Function to add a value to the heap
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    // Function to remove and return the minimum value from the heap
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const minVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return minVal;
    }

    // Function to check the size of the heap
    size() {
        return this.heap.length;
    }

    // Helper function to maintain heap properties after pushing a value
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Helper function to maintain heap properties after popping a value
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;
            
            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
