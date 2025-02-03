//{ Driver Code Starts


// Input Handling
function main() {
    const input = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let t;
    let inputs = [];
    input.on('line', line => { inputs.push(line.trim()); });

    input.on('close', () => {
        let idx = 0;
        t = parseInt(inputs[idx++]);
        while (t--) {
            let n = parseInt(inputs[idx++]);
            let m = parseInt(inputs[idx++]);
            let edges = [];
            for (let i = 0; i < m; i++) {
                edges.push(inputs[idx++].split(' ').map(Number));
            }

            const solution = new Solution();
            const result = solution.shortestPath(n, m, edges);
            console.log(result.join(' '));
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

class Solution {
    shortestPath(n, E, edges) {
        // Create an adjacency list for the graph
        let adj = new Array(n).fill().map(() => new Set());

        for (let [n1, n2, wt] of edges) {
            adj[n1].add([n2, wt]);
        }

        // Perform DFS to get the topological order
        let visited = new Array(n).fill(false);
        let topo = [];

        const dfs = (node) => {
            for (let [neighbor, _] of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    dfs(neighbor);
                }
            }
            topo.unshift(node);
        };

        dfs(0);

        // Initialize the distance array with infinity and set the source node distance to 0
        let distance = new Array(n).fill(Infinity);
        distance[0] = 0;

        // Relax the edges in topological order
        while (topo.length) {
            let node = topo.shift();
            
            for (let [neighbor, wt] of adj[node]) {
                distance[neighbor] = Math.min(distance[neighbor], distance[node] + wt);
            }
        }

        // Replace infinity with -1 for unreachable nodes
        for (let i = 0; i < n; i++) {
            if (distance[i] === Infinity) {
                distance[i] = -1;
            }
        }

        return distance;
    }
}
