//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let V = parseInt(readLine());
        let E = parseInt(readLine());
        let adj = new Array(V);
        for (let j = 0; j < V; j++) {
            adj[j] = new Array();
        }

        for (let j = 0; j < E; j++) {
            let [u, v] = readLine().split(" ").map((x) => parseInt(x));
            adj[u].push(v);
            adj[v].push(u);
        }
        let obj = new Solution();
        let res = obj.criticalConnections(V, adj);
        let s = "";
        for (let j = 0; j < res.length; j++) {
            s = res[j][0] + " " + res[j][1];
            console.log(s);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @return {number[][]}
 */

class Solution {
    // Helper method for DFS traversal
    dfs(adj, visited, traversed, hmap, ans, cnt, idx, parent, edges) {
        visited[idx] = true;
        hmap[idx] = cnt;
        cnt++;
        traversed.push(idx);
        edges.add(parent + "," + idx);
        edges.add(idx + "," + parent);

        for (let node of adj[idx]) {
            if (visited[node] && node !== parent) {
                let start = hmap[node];
                let end = traversed.length;
                if (start <= end) {
                    for (let i = start; i < end - 1; i++) {
                        ans.add(traversed[i] + "," + traversed[i + 1]);
                        ans.add(traversed[i + 1] + "," + traversed[i]);
                    }
                    if (end - 1 > 0) {
                        ans.add(traversed[end - 1] + "," + traversed[hmap[node]]);
                        ans.add(traversed[hmap[node]] + "," + traversed[end - 1]);
                    }
                }
            } else {
                if (!visited[node]) {
                    this.dfs(adj, visited, traversed, hmap, ans, cnt, node, idx, edges);
                }
            }
        }

        cnt--;
        traversed.pop();
    }

    criticalConnections(v, adj) {
        let visited = Array(v).fill(false);
        let ans = new Set();

        for (let i = 0; i < v; i++) {
            if (!visited[i]) {
                let hmap = new Map();
                let traversed = [];
                let edges = new Set();
                let cnt = 0;
                this.dfs(adj, visited, traversed, hmap, ans, cnt, i, -1, edges);
            }
        }

        let finalAns = new Set();
        for (let i = 0; i < v; i++) {
            for (let j of adj[i]) {
                let edge = i + "," + j;
                if (!ans.has(edge)) {
                    if (!finalAns.has(edge) && !finalAns.has(j + "," + i)) {
                        finalAns.add(edge);
                    }
                }
            }
        }

        let result = [];
        for (let s of finalAns) {
            let parts = s.split(",");
            result.push([parseInt(parts[0]), parseInt(parts[1])]);
        }

        result.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });

        return result;
    }
}
