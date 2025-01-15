//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = [];
        for (let i = 0; i < n; i++) {
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            let arr1 = new Array(n);
            for (let j = 0; j < n; j++) {
                arr1[j] = input_ar1[j];
            }
            arr.push(arr1);
        }
        let obj = new Solution();
        console.log(obj.minimumCostPath(arr, n));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to return the minimum cost to reach the bottom
    // right cell from the top left cell.
    minimumCostPath(grid, n) {
        // Directions for moving up, down, left, right
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        // 2D array to keep track of the minimum cost to reach each cell
        let cost = Array.from({ length: n }, () => Array(n).fill(Infinity));
        cost[0][0] = grid[0][0];

        // Min-Heap for Dijkstra's algorithm to pick the cell with the minimum cost
        let pq = new MinHeap();
        pq.push([0, 0, grid[0][0]]); // Push initial position with its cost

        while (pq.size() > 0) {
            const [x, y, currentCost] = pq.pop(); // Pop the cell with minimum cost

            // If we have already found a cheaper way to this cell, skip it
            if (currentCost > cost[x][y]) continue;

            // Explore the four neighbors (up, down, left, right)
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                // If the new position is valid, update the cost and push to queue
                if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                    const newCost = currentCost + grid[nx][ny];
                    if (newCost < cost[nx][ny]) {
                        cost[nx][ny] = newCost;
                        pq.push([nx, ny, newCost]);
                    }
                }
            }
        }

        // Return the minimum cost to reach the bottom-right corner
        return cost[n - 1][n - 1];
    }
}

// MinHeap class to implement priority queue for Dijkstra's algorithm
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent[2] <= element[2]) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[2] < element[2]) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[2] < element[2]) ||
                    (swap !== null && rightChild[2] < leftChild[2])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}
