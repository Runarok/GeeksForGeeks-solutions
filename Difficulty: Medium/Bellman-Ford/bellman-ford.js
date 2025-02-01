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
        let [V, E] = readLine().trim().split(" ").map((x) => parseInt(x));
        let edges = new Array(E);
        for (let j = 0; j < E; j++) {
            let inputLine = readLine().split(" ").map((x) => parseInt(x));
            edges[j] = new Array(3);
            for (let k = 0; k < 3; k++) {
                edges[j][k] = inputLine[k];
            }
        }
        let S = parseInt(readLine());
        let obj = new Solution();
        let res = obj.bellmanFord(V, edges, S);
        let s = "";
        for (let val of res) {
            s += val + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * Function to implement Bellman Ford
 * @param {number} V
 * @param {number[][]} edges
 * @param {number} src
 * @returns {number[]}
 */

class Solution {
    bellmanFord(V, edges, src) {
        // Initialize distance array with infinity
        let bellmanF = Array(V).fill(Math.pow(10, 8));
        bellmanF[src] = 0;

        // Relax all edges V-1 times
        for (let i = 0; i < V - 1; i++) {
            for (let edge of edges) {
                let source = edge[0];
                let target = edge[1];
                let distance = edge[2];
                
                // If the source node's distance + edge weight is less than target's distance
                if (bellmanF[source] + distance < bellmanF[target] && bellmanF[source] !== Math.pow(10, 8)) {
                    bellmanF[target] = bellmanF[source] + distance;
                }
            }
        }

        // Check for negative weight cycle
        for (let edge of edges) {
            let source = edge[0];
            let target = edge[1];
            let distance = edge[2];
            
            // If the source node's distance + edge weight is still less than target's distance
            if (bellmanF[source] + distance < bellmanF[target] && bellmanF[source] !== Math.pow(10, 8)) {
                return [-1]; // Return -1 if there is a negative weight cycle
            }
        }

        // Return the shortest distance from source to all other vertices
        return bellmanF;
    }
}
