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
        let input_line = readLine().split(" ");
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);
        let adj =  new Array();
        for(let i=0;i<V;i++)
            adj[i] = new Array();
        for(let i=0;i<E;i++)
        {
            input_line = readLine().split(" ");
            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
        }
        
        let obj = new Solution();
        let ans = obj.findMotherVertex(V, adj);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number}
*/
class Solution {
    
    // Function to find a Mother Vertex in the Graph
    findMotherVertex(V, adj) {
        this.time = 0;
        this.starttime = new Array(V).fill(0);
        this.max = 0;
        this.node = 0;
        let v = new Array(V).fill([0, 0]);
        let visited = new Array(V).fill(false);

        // Perform DFS on each node if it has not been visited
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.dfs(i, adj, visited);
            }
        }

        // Reset the visited array
        visited.fill(false);
        let answer = this.node;

        // Perform DFS starting from the potential mother vertex
        this.dfs(this.node, adj, visited);

        // Check if all nodes are reachable from the potential mother vertex
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                return -1; // If any node is not reachable, return -1
            }
        }

        // Return the mother vertex
        return answer;
    }

    // Helper function to perform DFS and track the finishing time
    dfs(source, adj, visited) {
        visited[source] = true;
        this.time++;

        this.starttime[source] = this.time;
        
        // Visit all the adjacent nodes
        for (let x of adj[source]) {
            if (!visited[x]) {
                this.dfs(x, adj, visited);
            }
        }

        // Track the finishing time and update the mother vertex
        this.time++;
        if (this.max < this.time) {
            this.node = source;
            this.max = this.time;
        }
    }
}
