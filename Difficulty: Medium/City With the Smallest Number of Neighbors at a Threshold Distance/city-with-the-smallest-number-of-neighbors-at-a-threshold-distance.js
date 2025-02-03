//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let edges = [];
        for (let i = 0; i < m; i++) {
            let inputLine = readLine().trim().split(" ").map((x) => parseInt(x));
            edges.push(inputLine);
        }
        let d = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findCity(n, m, edges, d);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for JavaScript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @returns {number}
*/

class Solution {
    findCity(n, m, edges, distanceThreshold) {
        // Initialize adjacency matrix with infinity
        let adj = new Array(n).fill().map(() => new Array(n).fill(Infinity));

        // Populate the adjacency matrix with edge weights
        for (let [u, v, wei] of edges) {
            adj[u][v] = wei;
            adj[v][u] = wei;
        }

        // Set the distance from each node to itself as 0
        for (let x = 0; x < n; x++) {
            adj[x][x] = 0;
        }

        // Apply Floyd-Warshall algorithm to find the shortest paths between all pairs of nodes
        for (let via = 0; via < n; via++) {
            for (let x = 0; x < n; x++) {
                for (let y = 0; y < n; y++) {
                    adj[x][y] = Math.min(adj[x][via] + adj[via][y], adj[x][y]);
                }
            }
        }

        let ans = 0;
        let co = Infinity;

        // For each city, count how many cities are reachable within the distance threshold
        for (let x = 0; x < n; x++) {
            let s1 = 0;
            for (let y = 0; y < n; y++) {
                if (adj[x][y] <= distanceThreshold) {
                    s1++;
                }
            }

            // If the current city has fewer reachable cities, update the answer
            if (s1 <= co) {
                ans = x;
                co = s1;
            }
        }

        return ans;
    }
}
