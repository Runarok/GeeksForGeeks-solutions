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
    let i = 0;
    for(;i<t;i++)
    {
        let [n,m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let adj = [];
        for(let i = 0;i<n;i++){
            adj[i] = new Array();
        }
        
        for(let j = 0;j<m;j++){
            let [u,v] =  readLine().trim().split(" ").map((x) => parseInt(x));
            adj[u].push(v);
            adj[v].push(u);
        }
        let obj = new Solution();
        let res = obj.detectCycle(n,adj);
        console.log(res);
    }
}

// } Driver Code Ends

/**
 * @param {number} n
 * @param {number[][]} adj
 * @return {number} 
 */
class Solution {
    detectCycle(n, adj) {
        // Initialize arrays for union-find: rank and parent
        let rank = new Array(n).fill(1);
        let parent = new Array(n).fill(0).map((_, idx) => idx);
        
        // Iterate over all edges to check for cycles
        for (let i = 0; i < n; i++) {
            for (let v of adj[i]) {
                // Only process each edge once
                if (i < v) {
                    let parentU = find(i, parent);
                    let parentV = find(v, parent);
                    
                    // If both vertices have the same parent, a cycle is detected
                    if (parentU === parentV) {
                        return 1;
                    }

                    // Union the two sets
                    union(i, v, rank, parent);
                }
            }
        }
        
        return 0;  // No cycle detected
    }
}

// Find the representative of the set to which x belongs
function find(x, parent) {
    if (x === parent[x]) {
        return x;
    }
    // Path compression
    return parent[x] = find(parent[x], parent);
}

// Union of two sets
function union(x, y, rank, parent) {
    let xParent = find(x, parent);
    let yParent = find(y, parent);

    if (xParent === yParent) {
        return;
    }

    // Union by rank
    if (rank[xParent] > rank[yParent]) {
        parent[yParent] = xParent;
    } else if (rank[xParent] < rank[yParent]) {
        parent[xParent] = yParent;
    } else {
        parent[xParent] = yParent;
        rank[yParent]++;
    }
}
