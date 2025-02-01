//{ Driver Code Starts
// Initial Template for JavaScript
'use strict';

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
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        const V = parseInt(readLine()); // Read V from one line
        const E = parseInt(readLine());

        let adj = new Array(V); // Initialize adjacency list
        for (let j = 0; j < V; j++) {
            adj[j] = [];
        }

        for (let j = 0; j < E; j++) {
            let input_line = readLine().split(' ').map(Number);
            let x = input_line[0], y = input_line[1];
            adj[x].push(y);
            adj[y].push(x); // Since it's an undirected graph
        }

        let obj = new Solution();
        let ans = obj.bfsOfGraph(adj); // Call BFS function

        console.log(ans.join(' ')); // Print the result as space-separated values
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to return Breadth First Traversal of the given graph.
    bfsOfGraph(adj) {
        // Array to keep track of visited nodes to avoid reprocessing the same node
        let visited = new Array(adj.length).fill(false);

        // Initialize the queue for BFS and the answer array to store the BFS traversal order
        let queue = [];
        let ans = [];

        // Mark the starting node (node 0) as visited and enqueue it
        visited[0] = true;
        queue.push(0);

        // While the queue is not empty, continue processing nodes
        while(queue.length) {
            // Dequeue the first node from the queue (FIFO)
            let curr = queue.shift();

            // Add the current node to the BFS traversal result
            ans.push(curr);

            // Explore all neighbors of the current node
            for (let x of adj[curr]) {
                // If a neighbor has not been visited, mark it as visited and enqueue it
                if (!visited[x]) {
                    visited[x] = true;
                    queue.push(x);
                }
            }
        }

        // Return the BFS traversal result
        return ans;
    }
}
