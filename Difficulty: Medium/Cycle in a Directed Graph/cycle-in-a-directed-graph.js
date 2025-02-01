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
        }

        let obj = new Solution();
        let ans = obj.isCyclic(V, adj);
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
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        let visited = new Array(V).fill(false);  // Track visited nodes
        let stack = new Array(V).fill(false);    // Track nodes in current DFS path
        
        // Iterate through all nodes
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {  // Start DFS only if the node is not visited
                if (this.dfs(adj, i, visited, stack)) {
                    return true;  // Cycle detected
                }
            }
        }
        return false;  // No cycle found
    }

    // Helper function for DFS traversal to detect cycle
    dfs(adj, currNode, visited, stack) {
        // If the node is already in the stack, a cycle is found
        if (stack[currNode]) {
            return true;
        }

        // If the node is already visited and not part of the current DFS path, no cycle
        if (visited[currNode]) {
            return false;
        }

        // Mark the node as visited and part of the current DFS path
        visited[currNode] = true;
        stack[currNode] = true;

        // Explore the neighbors
        for (let neighbor of adj[currNode]) {
            if (this.dfs(adj, neighbor, visited, stack)) {
                return true;  // Cycle found in the neighbor's DFS
            }
        }

        // Unmark the node as part of the current DFS path before returning
        stack[currNode] = false;
        return false;  // No cycle found for this path
    }
}
