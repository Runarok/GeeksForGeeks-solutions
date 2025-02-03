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

// Position this line where user code will be pasted.
function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let [V, m] = readLine().split(" ").map(Number);
        let edges = [];
        for (let j = 0; j < m; j++) {
            let [u, v] = readLine().split(" ").map(Number);
            edges.push([ u, v ]);
        }
        let obj = new Solution();
        let A = obj.printGraph(V, edges);
        let empty = true;

        for (let i = 0; i < V; i++) {
            if (A[i].length === 0) continue;
            empty = false;
            break;
        }

        if (empty) {
            console.log("[]");
        } else {
            for (let i = 0; i < V; i++) {
                let st = new Set(A[i]);
                let sortedArr =
                    Array.from(st).sort((a, b) => a - b); // Sort and remove duplicates
                console.log(`[${sortedArr.join(" ")}]`);
            }
        }
    }
}

// } Driver Code Ends


class Solution {
    /**
     * Function to print the adjacency list representation of the graph.
     * 
     * @param {number} V - Number of vertices
     * @param {number[][]} edges - List of edges in the graph
     * @returns {number[][]} - Adjacency list of the graph
     */
    printGraph(V, edges) {
        // Initialize an empty adjacency list with V vertices
        const adjacencyList = Array.from({ length: V }, () => []);

        // Populate the adjacency list based on the given edges
        for (let i = 0; i < edges.length; i++) {
            const [u, v] = edges[i];
            adjacencyList[u].push(v);  // Add v to the adjacency list of u
            adjacencyList[v].push(u);  // Add u to the adjacency list of v
        }

        // Return the adjacency list representing the graph
        return adjacencyList;
    }
}
