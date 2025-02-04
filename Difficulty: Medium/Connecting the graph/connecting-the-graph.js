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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        let adj = new Array();
        for(let i=0;i<m;i++)
        {
            input_line = readLine().split(' ');
            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj.push([u,v]);
        }
        

        let obj = new Solution();
        let ans = obj.Solve(n,adj);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[][]} adj
 * @returns {number}
*/
class Solution {
    Solve(n, adj) {
        // Edge case: if no edges and more than 1 vertex, return -1
        if (adj.length === 0 && n > 1) {
            return -1;
        }

        // Helper function to perform DFS and mark all nodes in the same component
        function dfs(node, visited, adj) {
            visited[node] = true;
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor, visited, adj);
                }
            }
        }

        // Step 1: Create adjacency list for the graph
        let graph = Array.from({ length: n }, () => []);
        for (let edge of adj) {
            graph[edge[0]].push(edge[1]);
            graph[edge[1]].push(edge[0]);
        }

        // Step 2: Find connected components
        let visited = Array(n).fill(false);
        let components = 0;

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                // Start DFS from an unvisited node
                dfs(i, visited, graph);
                components++;
            }
        }

        // If there are already no disconnected components, return 0
        if (components === 1) {
            return 0;
        }

        // Step 3: Check if we can connect all components
        // To connect `components` components, we need at least `components - 1` edges
        // If we have fewer than `n - 1` edges, it's impossible to connect the graph
        if (adj.length < n - 1) {
            return -1;
        }

        return components - 1;
    }
}
