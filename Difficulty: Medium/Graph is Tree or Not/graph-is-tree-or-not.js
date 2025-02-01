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
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);
        
        let adj = new Array(V);
        
        for(let i=0;i<V;i++)
        {
            adj[i] = new Array();
        }
        
        for(let i=0;i<E;i++)
        {
            input_line = readLine().split(' ');
            let a = parseInt(input_line[0]);
            let b = parseInt(input_line[1]);
            adj[a].push(b);
            adj[b].push(a);
        }
        let obj = new Solution();
        let ans = obj.isTree(V, adj);
        if(ans)
            console.log("1");
        else
            console.log("0");
    
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} adj
     * @returns {boolean}
     */
    // Function to check whether the given graph is a tree or not.
    isTree(n, adj) {
        let vis = new Array(n).fill(false);

        // Step 1: Check if the graph contains a cycle using DFS
        if (this.detectCycle(0, -1, adj, vis)) return false;

        // Step 2: Check if the graph is connected (all nodes should be visited)
        for (let i = 0; i < n; i++) {
            if (!vis[i]) return false;
        }
        return true;
    }

    /**
     * @param {number} node
     * @param {number} parent
     * @param {Array<Array<number>>} adj
     * @param {Array<boolean>} vis
     * @returns {boolean} - True if there's a cycle, false otherwise
     */
    detectCycle(node, parent, adj, vis) {
        vis[node] = true;  // Mark current node as visited

        for (const neighbor of adj[node]) {
            // If the neighbor is not visited, do a DFS recursively
            if (!vis[neighbor]) {
                if (this.detectCycle(neighbor, node, adj, vis)) {
                    return true;  // Cycle found
                }
            }
            // If the neighbor is visited and is not the parent, a cycle exists
            else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
}
