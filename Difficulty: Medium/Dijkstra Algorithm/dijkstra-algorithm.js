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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        if (arr[i] === -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_line = readLine().split(" ").map((x) => parseInt(x));
        let V = input_line[0];
        let E = input_line[1];
        let adj = new Array(V);
        for (let j = 0; j < V; j++) adj[j] = new Array();
        for (let j = 0; j < E; j++) {
            input_line = readLine().split(" ").map((x) => parseInt(x));
            let u = input_line[0];
            let v = input_line[1];
            let w = input_line[2];
            adj[u].push([ v, w ]);
            adj[v].push([ u, w ]);
        }

        let src = parseInt(readLine());
        let obj = new Solution();
        let res = obj.dijkstra(adj, src);
        printArray(res, res.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][][]} adj
 * @param {number} src
 * @return {number[]}
 */
// Custom MinHeap to handle priority queue operations efficiently
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Push an element into the heap and maintain heap property
    push(val) {
        this.heap.push(val);
        this.heapifyUp(); // Ensure the heap property is maintained upwards
    }

    // Pop the smallest element (root of the heap) and maintain heap property
    pop() {
        if (this.heap.length === 1) return this.heap.pop(); // If only one element, pop directly
        const min = this.heap[0]; // Root is the smallest element
        this.heap[0] = this.heap.pop(); // Replace root with last element
        this.heapifyDown(); // Ensure the heap property is maintained downwards
        return min;
    }

    // Helper method to maintain heap property after a push operation (moving up)
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // Calculate parent index
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break; // If parent is smaller or equal, stop
            // Swap parent and current node
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex; // Move up to parent
        }
    }

    // Helper method to maintain heap property after a pop operation (moving down)
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1; // Left child index
            let right = 2 * index + 2; // Right child index
            let smallest = index; // Assume current node is smallest

            // Check if left child is smaller than current
            if (left < length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            // Check if right child is smaller than current
            if (right < length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;

            // If smallest is still current node, the heap property is maintained
            if (smallest === index) break;

            // Swap smallest and current node
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest; // Move down to smallest child
        }
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Main class implementing Dijkstra's Algorithm using custom MinHeap
class Solution {
    // Function to find the shortest distance from source to all vertices
    dijkstra(adj, src) {
        let n = adj.length; // Number of nodes
        let distances = new Array(n).fill(Infinity); // Initialize distances with Infinity
        distances[src] = 0; // Distance to the source is 0

        let pq = new MinHeap(); // Initialize the priority queue (min heap)
        pq.push([0, src]); // Push source with 0 distance into the queue

        // Dijkstra's algorithm: process each node
        while (!pq.isEmpty()) {
            let [d, node] = pq.pop(); // Pop the node with the minimum distance

            // Explore all adjacent nodes of the current node
            for (let [neighbor, weight] of adj[node]) {
                // Relax the edge (if a shorter path is found)
                if (d + weight < distances[neighbor]) {
                    distances[neighbor] = d + weight; // Update the distance
                    pq.push([distances[neighbor], neighbor]); // Push the updated node into the priority queue
                }
            }
        }

        return distances; // Return the shortest distances from the source to all other nodes
    }
}
