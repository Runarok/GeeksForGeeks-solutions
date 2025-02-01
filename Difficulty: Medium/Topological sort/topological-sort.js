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

function check(V, res, adj) {
    if (V != res.length) return 0;
    let map = new Array(V);
    map.fill(-1);
    for (let i = 0; i < V; i++) {
        map[res[i]] = i;
    }
    for (let i = 0; i < V; i++) {
        for (const v of adj[i]) {
            if (map[i] > map[v]) return 0;
        }
    }
    return 1;
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let adj = new Array(n);
        for (let i = 0; i < n; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < m; i++) {
            let input_line = readLine().split(' ');

            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
        }
        let obj = new Solution();
        let res = obj.topologicalSort(adj);
        console.log(check(n, res, adj));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} adj - Adjacency list representing the directed graph.
 * @returns {number[]} - The topological order of the graph nodes.
 */
class Solution {
    topologicalSort(adj) {
        let v = adj.length; // Number of vertices
        let indegree = new Array(v).fill(0); // Array to track in-degree of each vertex
        let queue = []; // Queue for BFS-based Kahn’s algorithm
        let result = []; // Stores the final topological order

        // Step 1: Calculate the in-degree for each node
        for (let i = 0; i < v; i++) {
            for (let neighbor of adj[i]) {
                indegree[neighbor]++; // Increase in-degree for each incoming edge
            }
        }

        // Step 2: Enqueue all nodes with in-degree 0 (i.e., no dependencies)
        for (let i = 0; i < v; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Step 3: Process nodes in BFS order
        while (queue.length > 0) {
            let node = queue.shift(); // Dequeue a node
            result.push(node); // Append node to topological order

            // Step 4: Reduce the in-degree of its neighbors
            for (let neighbor of adj[node]) {
                indegree[neighbor]--;

                // If a neighbor’s in-degree becomes 0, add it to the queue
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // If all nodes are processed, return the topological order
        // If not, the graph contains a cycle (topological sorting is not possible)
        return result.length === v ? result : [];
    }
}
