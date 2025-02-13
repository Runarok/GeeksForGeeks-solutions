//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let arr1 = new Array(n);
        let input_arr1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr1[i] = input_arr1[i];
        }

        let arr2 = new Array(n);
        let input_arr2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr2[i] = input_arr2[i];
        }

        let obj = new Solution();
        let res = obj.maximizeArray(n, arr1, arr2);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    
console.log("~");
}
}

// } Driver Code Ends

class MinPriorityQueue {
    constructor(comparator) {
        this._heap = []; // Array representing the heap
        this._comparator = comparator || ((a, b) => a[0] - b[0]); // Default comparator (min-heap based on first element)
    }

    isEmpty() {
        return this._heap.length === 0; // Returns true if heap is empty
    }

    size() {
        return this._heap.length; // Returns the number of elements in the heap
    }

    peek() {
        return this._heap[0]; // Returns the top (smallest) element of the heap
    }

    enqueue(value) {
        this._heap.push(value); // Add the new element at the end
        this._siftUp(); // Restore heap order by moving the element up if necessary
        return this.size();
    }

    dequeue() {
        const topValue = this.peek(); // Store the top element to return
        const lastIndex = this.size() - 1;
        if (lastIndex > 0) {
            this._swap(0, lastIndex); // Swap top with the last element
        }
        this._heap.pop(); // Remove the last element
        this._siftDown(); // Restore heap order by moving the new top down if necessary
        return topValue;
    }

    _parent(index) {
        return Math.floor((index - 1) / 2); // Returns the parent index of the given index
    }

    _leftChild(index) {
        return index * 2 + 1; // Returns the left child index of the given index
    }

    _rightChild(index) {
        return index * 2 + 2; // Returns the right child index of the given index
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]; // Swaps two elements in the heap
    }

    _siftUp() {
        let index = this.size() - 1; // Start from the last element
        while (
            index > 0 &&
            this._comparator(this._heap[index], this._heap[this._parent(index)]) < 0
        ) {
            this._swap(index, this._parent(index)); // Swap with parent if order is violated
            index = this._parent(index); // Move up
        }
    }

    _siftDown() {
        let index = 0; // Start from the root
        while (
            (this._leftChild(index) < this.size() &&
                this._comparator(this._heap[this._leftChild(index)], this._heap[index]) < 0) ||
            (this._rightChild(index) < this.size() &&
                this._comparator(this._heap[this._rightChild(index)], this._heap[index]) < 0)
        ) {
            const smallerChild =
                this._rightChild(index) < this.size() &&
                this._comparator(this._heap[this._rightChild(index)], this._heap[this._leftChild(index)]) < 0
                    ? this._rightChild(index) // Choose right child if it is smaller
                    : this._leftChild(index); // Otherwise, choose left child
            this._swap(index, smallerChild); // Swap with the smaller child
            index = smallerChild; // Move down
        }
    }
}

class Solution {
    constructor() {
        this.compare = (a, b) => {
            if (a[0] !== b[0]) {
                return b[0] - a[0]; // Higher value first (max heap behavior)
            }
            if (a[1] === b[1]) {
                return a[2] - b[2]; // If values are equal, prioritize smaller index
            }
            return b[1] - a[1]; // Prioritize elements from the second array
        };
    }

    maximizeArray(n, arr1, arr2) {
        let pq = new MinPriorityQueue(this.compare); // Priority queue with custom comparator
        
        // Insert elements from arr1 with metadata: [value, array identifier (1), index]
        for (let i = 0; i < n; i++) {
            pq.enqueue([arr1[i], 1, i]);
        }

        // Insert elements from arr2 with metadata: [value, array identifier (2), index]
        for (let i = 0; i < n; i++) {
            pq.enqueue([arr2[i], 2, i]);
        }

        let result = []; // Final output array
        let arr1Selection = [], arr2Selection = []; // Stores selected elements from arr1 and arr2
        let lastSeen = -1; // Tracks the last added element to ensure uniqueness

        while (!pq.isEmpty()) {
            let current = pq.dequeue(); // Extract the highest priority element

            // Ensure uniqueness: skip if this element was already added
            if (lastSeen === current[0]) {
                continue;
            }

            // Store element in the appropriate selection list
            if (current[1] === 1) {
                arr1Selection.push([current[2], current[0]]);
            } else {
                arr2Selection.push([current[2], current[0]]);
            }

            lastSeen = current[0]; // Update last seen value

            // Stop once we have selected n unique elements
            if (arr1Selection.length + arr2Selection.length === n) {
                break;
            }
        }

        // Sort selections by index to preserve original order
        arr1Selection.sort((a, b) => a[0] - b[0]);
        arr2Selection.sort((a, b) => a[0] - b[0]);

        // Construct the final array from arr2 selection first, followed by arr1
        for (let item of arr2Selection) {
            result.push(item[1]);
        }
        for (let item of arr1Selection) {
            result.push(item[1]);
        }

        return result;
    }
}
