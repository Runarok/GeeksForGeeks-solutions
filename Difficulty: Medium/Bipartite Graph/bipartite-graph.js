//{ Driver Code Starts
const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let inputLines = [];
let currentLine = 0;

rl.on("line", (line) => { inputLines.push(line.trim()); });
// Position this line where user code will be pasted.
rl.on("close", () => {
    let T = parseInt(inputLines[currentLine++]);
    while (T-- > 0) {
        let S = inputLines[currentLine++].split(" ");
        let V = parseInt(S[0]);
        S = inputLines[currentLine++].split(" ");
        let E = parseInt(S[0]);

        let adj = [];
        for (let i = 0; i < V; i++) {
            adj.push([]);
        }

        for (let i = 0; i < E; i++) {
            let s = inputLines[currentLine++].split(" ").map(Number);
            let u = s[0];
            let v = s[1];
            adj[u].push(v);
            adj[v].push(u);
        }

        const obj = new Solution();
        let ans = obj.isBipartite(adj);
        if (ans)
            console.log("true");
        else
            console.log("false");

        // console.log("~");
    }
});
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} adj - Adjacency list representing the graph
 * @returns {boolean} - Returns true if the graph is bipartite, otherwise false
 */

class Solution {
    isBipartite(adj) {
        let N = adj.length; // Number of vertices
        let colors = new Array(N).fill(0); // 0: unvisited, 1: color A, -1: color B

        // Helper function to explore the graph using DFS
        const explore = (u, color) => {
            colors[u] = color; // Assign color to the current node

            for (let nei of adj[u]) {
                if (colors[nei] !== 0) {
                    // If the neighbor has the same color, graph is not bipartite
                    if (colors[nei] === color) return false;
                } else {
                    // Recursively color the neighbor with opposite color
                    if (!explore(nei, -color)) return false;
                }
            }
            return true;
        };

        // Check each component of the graph
        for (let i = 0; i < N; i++) {
            if (colors[i] === 0) {
                if (!explore(i, 1)) return false;
            }
        }

        return true;
    }
}
