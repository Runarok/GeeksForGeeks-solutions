//{ Driver Code Starts

// Initial Template for JavaScript

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
        let V = parseInt(readLine()), E = parseInt(readLine());

        // Construct adjacency list
        let adj = Array.from({length : V}, () => []);
        for (let j = 0; j < E; j++) {
            let [a, b] = readLine().split(' ').map(Number);
            adj[a].push(b);
        }

        let obj = new Solution();
        let ans = obj.kosaraju(adj);
        console.log(ans);
    }
}

// } Driver Code Ends


class Solution {
    // Function to find the number of strongly connected components (SCCs)
    kosaraju(adj) {
        let n = adj.length;
        let stack = [];
        
        // Helper function for DFS traversal on the original graph
        function dfs(i, vis, adjp) {
            vis[i] = 1;
            for (let j of adjp[i]) {
                if (vis[j] === 0) {
                    dfs(j, vis, adjp);
                }
            }
            stack.push(i);
        }

        // Helper function for DFS traversal on the transposed graph
        function dfs3(i, vis, adjp) {
            vis[i] = 1;
            for (let j of adjp[i]) {
                if (vis[j] === 0) {
                    dfs3(j, vis, adjp);
                }
            }
            stack.push(i);
        }

        // Step 1: Do DFS and fill the stack with finishing times of nodes
        let vis = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            if (vis[i] === 0) {
                dfs(i, vis, adj);
            }
        }

        // Step 2: Create the transpose of the graph
        let adjt = Array.from({ length: n }, () => []);
        for (let i = 0; i < n; i++) {
            for (let j of adj[i]) {
                adjt[j].push(i);
            }
        }

        // Step 3: Do DFS on the transposed graph to find SCCs
        vis = Array(n).fill(0);
        let scc = 0;
        while (stack.length) {
            let i = stack.pop();
            if (vis[i] === 0) {
                scc++;
                dfs3(i, vis, adjt);
            }
        }

        return scc;
    }
}
