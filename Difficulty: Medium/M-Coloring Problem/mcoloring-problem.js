//{ Driver Code Starts
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
    let t = parseInt(readLine(), 10);
    let output = [];

    for (let i = 0; i < t; i++) {
        const [n] = readLine().split(' ').map(Number);
        const edgesInput = readLine().split(' ').map(Number);
        const [m] = readLine().split(' ').map(Number);
        const edges = [];

        // Populate the edges list with edge pairs
        for (let j = 0; j < edgesInput.length; j += 2) {
            edges.push([ edgesInput[j], edgesInput[j + 1] ]);
        }

        const solution = new Solution();
        output.push(solution.graphColoring(n, edges, m)
                        ? "true"
                        : "false"); // Call the graph coloring function
    }

    console.log(output.join("\n~\n")); // Output results
}

// } Driver Code Ends

class Solution {
    /**
     * Determines if a graph can be colored with at most M colors 
     * such that no two adjacent vertices have the same color.
     * 
     * @param {number} v - Number of vertices in the graph
     * @param {Array<Array<number>>} edges - List of edges representing the graph
     * @param {number} m - Maximum number of colors allowed
     * @return {boolean} True if a valid coloring exists, otherwise False
     */
    graphColoring(v, edges, m) {
        // Step 1: Create adjacency matrix from edge list
        let graph = Array.from({ length: v }, () => Array(v).fill(0));
        for (let [u, w] of edges) {
            graph[u][w] = 1;
            graph[w][u] = 1; // Since it's an undirected graph
        }

        // Step 2: Initialize color list
        let color = Array(v).fill(0);

        // Step 3: Call the recursive function to solve the problem
        return this.solve(0, color, m, v, graph);
    }

    /**
     * Check if it is safe to color the current node with the given color.
     * 
     * @param {number} node - Current node to check
     * @param {Array<number>} color - Array holding the color assignments
     * @param {Array<Array<number>>} graph - Adjacency matrix of the graph
     * @param {number} v - Number of vertices
     * @param {number} col - Color to check
     * @return {boolean} True if it's safe to color the node with the given color
     */
    isSafe(node, color, graph, v, col) {
        for (let k = 0; k < v; k++) {
            if (k !== node && graph[node][k] === 1 && color[k] === col) {
                return false;  // If adjacent node has the same color, return false
            }
        }
        return true;  // It's safe to color the node with the given color
    }

    /**
     * Recursive function to solve the M-Coloring problem using backtracking.
     * 
     * @param {number} node - Current node to color
     * @param {Array<number>} color - Array holding the color assignments
     * @param {number} m - Maximum number of colors
     * @param {number} v - Number of vertices
     * @param {Array<Array<number>>} graph - Adjacency matrix of the graph
     * @return {boolean} True if valid coloring exists for all nodes
     */
    solve(node, color, m, v, graph) {
        if (node === v) {
            return true;  // All nodes are successfully colored
        }

        for (let i = 1; i <= m; i++) {  // Try each color from 1 to m
            if (this.isSafe(node, color, graph, v, i)) {
                color[node] = i;  // Assign color
                
                if (this.solve(node + 1, color, m, v, graph)) {
                    return true;  // If valid solution exists, return true
                }

                color[node] = 0;  // Backtrack if no solution found
            }
        }

        return false;  // No valid coloring found
    }
}
