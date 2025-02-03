//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [V,E] = readLine().split(" ").map((x) => parseInt(x));
    let adj = new Array(V);
    for(let j = 0;j<V;j++) adj[j] = new Array();
    for(let j = 0;j<E;j++){
      let [u,v] = readLine().split(" ").map((x) => parseInt(x));
      adj[u].push(v);
      adj[v].push(u);
    }
    let [c,d]= readLine().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.isBridge(V,adj,c,d);
    console.log(res);
    
  
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @param {number} c
 * @param {number} d
 * @returns {number}
*/

class Solution {
    // Depth First Search function
    DFS(adj, u, visited) {
        visited[u] = true;

        for (let v of adj[u]) {
            if (!visited[v]) {
                this.DFS(adj, v, visited);
            }
        }
    }

    // Function to check if the graph is still connected after removing an edge
    isConnected(V, adj, one, two) {
        let visited = new Array(V).fill(false);
        this.DFS(adj, one, visited);

        return visited[two];
    }

    // Function to determine if the given edge (c, d) is a bridge in the graph
    isBridge(V, adj, c, d) {
        if (!this.isConnected(V, adj, c, d)) {
            return 0;
        }

        // Remove edge (c, d) from adjacency list
        let indexC = adj[d].indexOf(c);
        let indexD = adj[c].indexOf(d);

        adj[c].splice(indexD, 1);
        adj[d].splice(indexC, 1);

        // Check if the graph remains connected after edge removal
        let res = this.isConnected(V, adj, c, d);

        // Restore the edge (c, d)
        adj[c].push(d);
        adj[d].push(c);

        return res ? 0 : 1;
    }
}
