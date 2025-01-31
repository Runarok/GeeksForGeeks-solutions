//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n").map((string) => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // For the linked list next pointer
    }
}

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.data);
        node = node.next;
    }
    console.log(result.join(" "));
}

function main() {
    let t = parseInt(readLine());
    for (let test = 0; test < t; test++) {
        const n = parseInt(readLine());
        const lists = [];

        // Read n linked lists
        for (let i = 0; i < n; i++) {
            const values = readLine().split(" ").map(Number);
            let dummy = new Node(0);
            let temp = dummy;

            // Create a linked list from the input values
            for (let val of values) {
                temp.next = new Node(val);
                temp = temp.next;
            }

            lists.push(dummy.next);
        }

        const solution = new Solution();
        const mergedHead = solution.mergeKLists(lists);
        printList(mergedHead);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node[]} arr
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    mergeKLists(arr) {
        const pq = new MinHeap();
        const n = arr.length;
        
        // Initialize the min-heap with the head nodes of each list
        for (let l of arr) {
            if (l) {
                pq.push(l);
            }
        }

        // Dummy node to simplify the merging process
        let dummy = new Node(-1);
        let curr = dummy;

        // Merge the lists
        while (pq.size() > 0) {
            let node = pq.pop();

            // Add the node to the merged list
            curr.next = node;
            curr = curr.next;

            // If there's a next node, push it to the min-heap
            if (node.next) {
                pq.push(node.next);
            }
        }

        return dummy.next;
    }
}

// MinHeap implementation (for handling priority queue)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;

        const root = this.heap[0];
        const last = this.heap.pop();
        
        if (this.size() > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }

        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].data <= this.heap[index].data) break;

            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const size = this.size();
        while (index < size) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < size && this.heap[left].data < this.heap[smallest].data) {
                smallest = left;
            }
            if (right < size && this.heap[right].data < this.heap[smallest].data) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
