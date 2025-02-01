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
    if(arr[i] == -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let ob = new MinHeap();
    let Q = parseInt(readLine());
    let s = "";
    let qs = readLine().split(" ").map((x)=>parseInt(x));
    let j = 0;
    while(j<qs.length){
     if(qs[j]===1){
      ob.insertKey(qs[j+1]);
      j++;
     } else if(qs[j]===2){
      ob.deleteKey(qs[j+1]);
      j++;
     }else{
      s=s+ob.extractMin()+" ";
     }
     j++;
    }
    console.log(s);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

// User function Template for JavaScript

class MinHeap { 
    constructor(capacity) {
        this.heap_size = 0;       // Current size of the heap
        this.capacity = capacity; // Maximum capacity of the heap
        this.heapArray = new Array(capacity); // Array to store heap elements
    }

    // Returns the index of the parent of the element at index i
    parent(i) {
        return Math.floor((i - 1) / 2); 
    }

    // Returns the index of the left child of the element at index i
    left(i) { 
        return (2 * i + 1);
    }

    // Returns the index of the right child of the element at index i
    right(i) { 
        return (2 * i + 2); 
    }

    // Function to extract the minimum element from the heap
    extractMin() {
        if (this.heap_size <= 0) {
            return -1;  // Return -1 if the heap is empty
        }
        
        if (this.heap_size === 1) {
            this.heap_size--; // Reduce heap size if there's only one element
            return this.heapArray[0];
        }
        
        // Swap the root with the last element and reduce heap size
        const root = this.heapArray[0];
        this.heapArray[0] = this.heapArray[this.heap_size - 1];
        this.heap_size--;
        
        // Call MinHeapify to restore the heap property
        this.MinHeapify(0);
        
        return root;
    }

    // Function to insert a new key into the heap
    insertKey(key) {
        if (this.heap_size === this.capacity) {
            return; // No space left in heap
        }
        
        // Insert the new key at the end of the heap and increase heap size
        this.heap_size++;
        let i = this.heap_size - 1;
        this.heapArray[i] = key;
        
        // Fix the min-heap property if it's violated
        while (i !== 0 && this.heapArray[this.parent(i)] > this.heapArray[i]) {
            const temp = this.heapArray[i];
            this.heapArray[i] = this.heapArray[this.parent(i)];
            this.heapArray[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    // Function to delete the key at index i
    deleteKey(i) {
        if (i < 0 || i >= this.heap_size) {
            return; // Invalid index
        }
        
        // Decrease key to negative infinity and extract the minimum element
        this.decreaseKey(i, -Infinity);
        this.extractMin();
    }

    // Function to decrease the value of the element at index i to new_val
    decreaseKey(i, new_val) {
        this.heapArray[i] = new_val;
        
        // Fix the min-heap property by moving the element up
        while (i !== 0 && this.heapArray[this.parent(i)] > this.heapArray[i]) {
            let temp = this.heapArray[i];
            this.heapArray[i] = this.heapArray[this.parent(i)];
            this.heapArray[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    // Function to maintain the min-heap property at index i
    MinHeapify(i) {
        let leftChild = this.left(i);
        let rightChild = this.right(i);
        let smallest = i;

        // Compare the current element with its left and right children
        if (leftChild < this.heap_size && this.heapArray[leftChild] < this.heapArray[i]) {
            smallest = leftChild;
        }
        
        if (rightChild < this.heap_size && this.heapArray[rightChild] < this.heapArray[smallest]) {
            smallest = rightChild;
        }

        // Swap if necessary and recursively heapify the affected subtree
        if (smallest !== i) {
            let temp = this.heapArray[i];
            this.heapArray[i] = this.heapArray[smallest];
            this.heapArray[smallest] = temp;
            this.MinHeapify(smallest);
        }
    }
}
