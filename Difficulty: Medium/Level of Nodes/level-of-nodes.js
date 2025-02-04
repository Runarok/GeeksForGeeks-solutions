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
           
            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
            adj[v].push(u);
        }
        input_line = readLine().split(' ');
        let X = parseInt(input_line[0]);
        let obj = new Solution();
        let res = obj.nodeLevel(V, adj, X);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @param {number} X
 * @returns {number}
*/
class Solution {
    nodeLevel(V, adj, X) {
        // Initialize the visited array to keep track of visited nodes
        let visited = Array(V).fill(false);
        let level = Array(V).fill(-1);  // Array to store the level of each node
        let queue = [];
        
        // Start BFS from node 0
        queue.push(0);
        visited[0] = true;
        level[0] = 0;
        
        while (queue.length > 0) {
            let node = queue.shift();
            
            // Explore all neighbors of the current node
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    level[neighbor] = level[node] + 1;
                    queue.push(neighbor);
                    
                    // If we reached the target node X, return its level
                    if (neighbor === X) {
                        return level[neighbor];
                    }
                }
            }
        }
        
        // If BFS ends and X is not visited, return -1
        return -1;
    }
}
