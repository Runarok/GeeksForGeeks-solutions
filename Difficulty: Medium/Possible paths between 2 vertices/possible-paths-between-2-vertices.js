//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);
        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');

            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
        }
        input_line = readLine().split(' ');
        let source = parseInt(input_line[0]);
        let destination = parseInt(input_line[1]);
        let obj = new Solution();
        let res = obj.countPaths(V, adj, source, destination);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @param {number} source
 * @param {number} destination
 * @returns {number}
*/
class Solution {
    // Recursive utility function to count paths from 'u' to 'd'
    countPathsUtil(adj, u, d, visited) {
        // Mark the current node as visited
        visited[u] = true;

        // If the current node is the destination, increment path count
        if (u == d) {
            this.pathCount++;
        } else {
            // Recurse for all adjacent nodes that are not visited
            for (let i of adj[u]) {
                if (!visited[i]) {
                    this.countPathsUtil(adj, i, d, visited);
                }
            }
        }

        // Backtrack and unmark the current node as visited
        visited[u] = false;
    }

    // Function to count all paths from source to destination
    countPaths(V, adj, source, destination) {
        this.pathCount = 0; // Initialize path count
        let visited = new Array(V + 1); // Array to track visited nodes
        visited.fill(false); // Initialize all nodes as unvisited

        // Start counting paths from source to destination
        this.countPathsUtil(adj, source, destination, visited);
        
        return this.pathCount; // Return the total number of paths found
    }
}
