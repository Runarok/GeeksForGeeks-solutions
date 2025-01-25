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
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
            adj[y].push(x);
        }
        let obj = new Solution();
        let ans = obj.articulationPoints(V, adj);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            s += ans[i];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
    // Function to find articulation points in an undirected graph.
    articulationPoints(V, adj) {
        // Initialize required arrays
        let disc = new Array(V).fill(-1); // Discovery time of each node
        let low = new Array(V).fill(-1);  // Lowest point reachable
        let parent = new Array(V).fill(-1); // Parent of each node in DFS
        let ap = new Array(V).fill(false);  // Mark if node is an articulation point
        let time = 0;  // Global time for DFS
        let result = [];

        // Helper function for DFS
        const dfs = (u) => {
            // Initialize discovery time and low value for node u
            disc[u] = low[u] = time++;
            let children = 0; // Count of children in the DFS tree

            for (let v of adj[u]) {
                // Ignore the edge to parent node
                if (v === parent[u]) continue;

                if (disc[v] === -1) { // If v is not visited
                    parent[v] = u;
                    children++;

                    // Recur for the child v
                    dfs(v);

                    // Check if the subtree rooted at v has a back connection to an ancestor of u
                    low[u] = Math.min(low[u], low[v]);

                    // u is an articulation point in the following cases:
                    // 1. u is the root and has more than one child
                    if (parent[u] === -1 && children > 1) {
                        ap[u] = true;
                    }
                    // 2. u is not the root and low[v] >= disc[u]
                    if (parent[u] !== -1 && low[v] >= disc[u]) {
                        ap[u] = true;
                    }
                } else {
                    // If v is already visited, it's a back edge, update low[u]
                    low[u] = Math.min(low[u], disc[v]);
                }
            }
        };

        // Call DFS from every unvisited node (to handle disconnected components)
        for (let i = 0; i < V; i++) {
            if (disc[i] === -1) {
                dfs(i);
            }
        }

        // Collect articulation points
        for (let i = 0; i < V; i++) {
            if (ap[i]) {
                result.push(i);
            }
        }

        // If no articulation points, return [-1]
        if (result.length === 0) {
            return [-1];
        }

        // Return sorted list of articulation points
        return result.sort((a, b) => a - b);
    }
}
