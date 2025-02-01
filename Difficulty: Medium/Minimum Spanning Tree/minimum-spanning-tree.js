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
    let i = 0;
    for (; i < t; i++) {
        let V = parseInt(readLine());
        let E = parseInt(readLine());
        const adj = Array.from({length : V}, () => []);
        for (let i = 1; i <= E; i++) {
            const [u, v, w] = readLine().split(' ').map(x => parseInt(x));
            adj[u].push([ v, w ]);
            adj[v].push([ u, w ]);
        }
        let obj = new Solution();
        let ans = obj.spanningTree(V, adj);
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */

class DisjointSet {
    constructor(n) {
        this.rank = new Array(n + 1).fill(0); // Used for Union by Rank
        this.size = new Array(n + 1).fill(1); // Used for Union by Size
        this.parent = new Array(n + 1);

        // Initialize each node as its own parent
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    // Find with Path Compression
    findUPar(node) {
        if (node === this.parent[node]) {
            return node;
        }
        return this.parent[node] = this.findUPar(this.parent[node]); // Path Compression
    }

    // Union by Rank
    unionByRank(u, v) {
        let rootU = this.findUPar(u);
        let rootV = this.findUPar(v);

        if (rootU === rootV) return; // Already in the same set

        if (this.rank[rootU] < this.rank[rootV]) {
            this.parent[rootU] = rootV;
        } else if (this.rank[rootV] < this.rank[rootU]) {
            this.parent[rootV] = rootU;
        } else {
            this.parent[rootV] = rootU;
            this.rank[rootU] += 1;
        }
    }

    // Union by Size
    unionBySize(u, v) {
        let rootU = this.findUPar(u);
        let rootV = this.findUPar(v);

        if (rootU === rootV) return; // Already in the same set

        if (this.size[rootU] < this.size[rootV]) {
            this.parent[rootU] = rootV;
            this.size[rootV] += this.size[rootU];
        } else {
            this.parent[rootV] = rootU;
            this.size[rootU] += this.size[rootV];
        }
    }
} 

class Solution {
    spanningTree(V, adj) {
        let edges = [];
        
        // Convert adjacency list to edge list with weights
        for (let u = 0; u < V; u++) {
            for (let [v, weight] of adj[u]) {
                if (u < v) { // Avoid duplicate edges
                    edges.push([weight, u, v]);
                }
            }
        }
        
        let ds = new DisjointSet(V); // Create Disjoint Set for Union-Find operations
        
        let mstWeight = 0; // To store the total weight of MST
        let edgeCount = 0; // To track number of edges included in MST
        
        // Sort edges based on weight (Kruskal's Algorithm)
        edges.sort((a, b) => a[0] - b[0]);
        
        // Iterate through sorted edges
        for (let [w, u, v] of edges) {
            // Check if adding this edge forms a cycle
            if (ds.findUPar(u) !== ds.findUPar(v)) {
                ds.unionBySize(u, v); // Merge components
                
                mstWeight += w; // Add edge weight to MST
                edgeCount++;
                
                // MST contains exactly V-1 edges
                if (edgeCount >= V - 1) break;
            }
        }
        
        return mstWeight; // Return the total weight of the Minimum Spanning Tree
    }
}
