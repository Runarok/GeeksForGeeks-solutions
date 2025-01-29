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
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
            adj[y].push(x);
        }
        let obj = new Solution();
        let ans = obj.articulationPoints(V, adj);
        let s = "";
        for(let i=0;i<ans.length;i++)
        {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/

class Solution {
    articulationPoints(V, adj) {
        // Initialize arrays to keep track of visited nodes, discovery time, low time, parent, and articulation points
        let visited = new Array(V).fill(false); 
        let disc = new Array(V).fill(Number.MAX_SAFE_INTEGER);  // Discovery time of vertices
        let low = new Array(V).fill(Number.MAX_SAFE_INTEGER);   // Lowest point reachable from a vertex
        let parent = new Array(V).fill(-1);  // Parent of each vertex in the DFS tree
        let ap = new Array(V).fill(false);   // Boolean array to store articulation points
        let time = 0;  // Global timer used for discovery time

        // Function to perform DFS and find articulation points
        const APUtil = (u) => {
            let children = 0;  // Number of children of u in the DFS tree
            
            visited[u] = true;  // Mark the current vertex as visited
            
            disc[u] = time;  // Set discovery time of u
            low[u] = time;   // Set low value of u to the current time
            time++;  // Increment global time

            // Explore all the adjacent vertices of u
            for (let v of adj[u]) {
                if (!visited[v]) {  // If v is not visited, perform DFS on it
                    parent[v] = u;   // Set parent of v as u
                    children++;       // Increment the child count of u
                    APUtil(v);        // Recur for vertex v

                    // After returning from v, update the low value of u
                    low[u] = Math.min(low[u], low[v]);

                    // Check if u is an articulation point
                    if (parent[u] === -1 && children > 1) {
                        ap[u] = true;  // u is an articulation point if it's root and has more than one child
                    }

                    // If u is not the root, and the low value of v is greater than or equal to the discovery time of u,
                    // then u is an articulation point
                    if (parent[u] !== -1 && low[v] >= disc[u]) {
                        ap[u] = true;
                    }
                } else if (v !== parent[u]) {  // If v is already visited and is not the parent, update low value
                    low[u] = Math.min(low[u], disc[v]);
                }
            }
        }

        // Call the APUtil function for all unvisited vertices to ensure all connected components are covered
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                APUtil(i);  // Start DFS for each unvisited vertex
            }
        }

        // Collect all articulation points in the result array
        let flag = 0;  // Flag to check if there are any articulation points
        let ans = [];

        // Iterate through the ap array and collect indices of articulation points
        for (let index in ap) {
            if (ap[index]) {
                flag = 1;
                ans.push(parseInt(index));  // Add articulation point index to result
            }
        }

        // If no articulation points were found, return [-1]
        if (flag === 0) {
            return [-1];
        } else {
            // Sort and return the articulation points
            return ans.sort((a, b) => a - b);
        }
    }
}
