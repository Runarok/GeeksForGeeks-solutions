//{ Driver Code Starts
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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine()); // Read number of test cases
    for (let i = 0; i < t; i++) {
        let N = parseInt(readLine()); // Number of nodes
        let M = parseInt(readLine()); // Number of edges
        let V = [];

        // Reading the edges
        for (let j = 0; j < M; j++) {
            let edge = readLine().split(' ').map(x => parseInt(x));
            V.push(edge);
        }

        // Creating an instance of Solution class and calling captainAmerica method
        let ob = new Solution();
        let ans = ob.captainAmerica(N, V);

        // Printing the result
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} gates
     * @return {number}
     */
    captainAmerica(n, gates) {
        // Step 1: Build the graph and the reversed graph
        let graph = Array.from({ length: n + 1 }, () => []);
        let revGraph = Array.from({ length: n + 1 }, () => []);
        
        for (let [u, v] of gates) {
            graph[u].push(v);
            revGraph[v].push(u);
        }

        // Step 2: Kosaraju's Algorithm (First DFS to get finishing order)
        let visited = new Array(n + 1).fill(false);
        let stack = [];
        
        function dfs1(node) {
            visited[node] = true;
            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs1(neighbor);
                }
            }
            stack.push(node);
        }

        // Perform DFS on the original graph to fill the stack
        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                dfs1(i);
            }
        }

        // Step 3: Second DFS on the reversed graph to find SCCs
        visited.fill(false);
        let sccs = [];

        function dfs2(node, scc) {
            visited[node] = true;
            scc.push(node);
            for (let neighbor of revGraph[node]) {
                if (!visited[neighbor]) {
                    dfs2(neighbor, scc);
                }
            }
        }

        // Perform DFS on the reversed graph in the order of finishing times
        while (stack.length) {
            let node = stack.pop();
            if (!visited[node]) {
                let scc = [];
                dfs2(node, scc);
                sccs.push(scc);
            }
        }

        // Step 4: Identify the "sink" SCCs
        let outgoing = Array(sccs.length).fill(0);
        let nodeToSCC = new Array(n + 1).fill(-1);

        // Map each node to its SCC
        for (let i = 0; i < sccs.length; i++) {
            for (let node of sccs[i]) {
                nodeToSCC[node] = i;
            }
        }

        // Count outgoing edges from each SCC
        for (let [u, v] of gates) {
            let scc_u = nodeToSCC[u];
            let scc_v = nodeToSCC[v];
            if (scc_u !== scc_v) {
                outgoing[scc_u]++;
            }
        }

        // Step 5: Check if the sink SCC is reachable from all other SCCs
        let sinkSCCs = outgoing.map((out, index) => out === 0 ? index : -1).filter(index => index !== -1);

        // If there's no single sink SCC, return 0
        if (sinkSCCs.length !== 1) {
            return 0;
        }

        // Find the only sink SCC
        let sinkSCC = sinkSCCs[0];

        // Step 6: Check if this sink SCC is reachable from all nodes in the graph
        let reachableFromSink = new Array(n + 1).fill(false);
        let dfsFromSink = (node) => {
            reachableFromSink[node] = true;
            for (let neighbor of revGraph[node]) {
                if (!reachableFromSink[neighbor]) {
                    dfsFromSink(neighbor);
                }
            }
        };

        // Start DFS from any node in the sink SCC
        dfsFromSink(sccs[sinkSCC][0]);

        // Step 7: Check if all nodes in the sink SCC are reachable
        let canHideRooms = sccs[sinkSCC].filter(node => reachableFromSink[node]).length;

        return canHideRooms;
    }
}
