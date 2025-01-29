//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {   
        let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let [a, b] = readLine().trim().split(" ").map((x) => parseInt(x));
        let edges = [];
        for(let i = 0;i<m;i++){
            let inputLine = readLine().trim().split(" ").map((x) => parseInt(x));
            edges.push(inputLine);
        }
        let obj = new Solution();
        let res = obj.shortestPath(n, m, a, b, edges);
        console.log(res.toString());
    
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[][]} edges
 * @returns {number}
*/

class Solution {
    // Function to find the shortest path for a weighted graph.
    shortestPath(n, m, a, b, edges) {
        // Create adjacency list for the graph
        const adjList = this.getAdjacencyList(n, edges);

        // Get shortest distances from source node 'a' and 'b'
        const distFromA = this.getShortestPathsFromSource(a, adjList, n);
        const distFromB = this.getShortestPathsFromSource(b, adjList, n);

        let ans = distFromA[b]; // Initial shortest path from a to b
        
        // Check if using an alternative weighted edge gives a shorter path
        for (let edge of edges) {
            const [u, v, w1, w2] = edge;
            ans = Math.min(ans, distFromA[u] + w2 + distFromB[v]);
            ans = Math.min(ans, distFromA[v] + w2 + distFromB[u]);
        }
        
        // Return the shortest path or -1 if not reachable
        return ans < Number.MAX_VALUE ? ans : -1;
    }

    // Function to create an adjacency list representation of the graph
    getAdjacencyList(n, edges) {
        const adjList = {};
        for (let i = 1; i <= n; i++) adjList[i] = [];
        for (let edge of edges) {
            const [u, v, w1, w2] = edge;
            adjList[u].push([v, w1, w2]);
            adjList[v].push([u, w1, w2]);
        }
        return adjList;
    }

    // Function to find shortest paths from a given source node using Dijkstra's Algorithm
    getShortestPathsFromSource(src, adjList, n) {
        const dist = Array(n + 1).fill(Number.MAX_VALUE);
        dist[src] = 0;
        const pq = new PriorityQueue(); // Min-heap priority queue
        pq.insert([0, src]); // Insert source node

        while (pq.size()) {
            const [cost, node] = pq.getMin(); // Get the node with the smallest distance

            for (let [child, w1, w2] of adjList[node]) {
                if (dist[child] > cost + w1) {
                    dist[child] = cost + w1;
                    pq.insert([dist[child], child]);
                }
            }
        }
        return dist;
    }
}

// Min-heap priority queue implementation
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(item) {
        this.heap.push(item);
        if (this.size() > 1) {
            let index = this.size() - 1;
            let parent = Math.floor((index - 1) / 2);
            while (index !== 0 && this.heap[index][0] < this.heap[parent][0]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
                parent = Math.floor((parent - 1) / 2);
            }
        }
    }

    getMin() {
        if (this.size() === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        let parent = 0, minimum = parent;
        while (true) {
            const left = 2 * parent + 1;
            const right = 2 * parent + 2;
            if (left < this.size() && this.heap[left][0] < this.heap[minimum][0]) minimum = left;
            if (right < this.size() && this.heap[right][0] < this.heap[minimum][0]) minimum = right;
            if (minimum === parent) break;
            [this.heap[parent], this.heap[minimum]] = [this.heap[minimum], this.heap[parent]];
            parent = minimum;
        }
        return item;
    }
}
