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
            let x = parseInt(input_line[0]);
            let y = parseInt(input_line[1]);
            adj[x].push(y);
            adj[y].push(x);
        }

        let obj = new Solution();
        let ans = obj.isCycle(adj);
        if (ans)
            ans = 1;
        else
            ans = 0;
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(adj) {
        let visited = new Array(adj.length).fill(false);
        
        // Helper function for DFS
        function dfs(v, parent) {
            // Mark the current node as visited
            visited[v] = true;
            
            // Explore all the neighbors of v
            for (let neighbor of adj[v]) {
                // If the neighbor is not visited, do DFS for it
                if (!visited[neighbor]) {
                    if (dfs(neighbor, v)) {
                        return true;
                    }
                }
                // If the neighbor is visited and is not the parent, we found a cycle
                else if (neighbor !== parent) {
                    return true;
                }
            }
            
            return false;
        }

        // We need to check all disconnected components of the graph
        for (let i = 0; i < adj.length; i++) {
            if (!visited[i]) {
                // If a cycle is found starting from vertex i, return true
                if (dfs(i, -1)) {
                    return 1; // Cycle found
                }
            }
        }
        
        return 0; // No cycle found
    }
}
