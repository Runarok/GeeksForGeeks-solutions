//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let V = parseInt(readLine()), E = parseInt(readLine());

        const adj = Array.from({length : V}, () => []);

        for (let i = 0; i < E; i++) {
            const [u, v] = readLine().split(' ').map(Number);
            adj[u].push(v);
            adj[v].push(u); // Since the graph is undirected
        }

        const src = parseInt(readLine());

        const obj = new Solution();
        const res = obj.shortestPath(adj, src);

        console.log(res.join(' '));
    }
}

// } Driver Code Ends

class Solution {
  shortestPath(adj, src) {
    let n = adj.length;
    // Initialize distance array with -1 (indicating unvisited)
    let distance = new Array(n).fill(-1);
    let queue = new Array(n);
    let front = 0, rear = 0;

    // Start from the source node
    queue[rear++] = src;
    distance[src] = 0;

    // BFS to find the shortest path to each node
    while (front < rear) {
      let cur = queue[front++]; // Get the current node

      // Traverse all the neighbors of the current node
      for (let neighbor of adj[cur]) {
        if (distance[neighbor] === -1) { // If the neighbor hasn't been visited
          distance[neighbor] = distance[cur] + 1; // Update the distance
          queue[rear++] = neighbor; // Add the neighbor to the queue
        }
      }
    }

    // Return the shortest distance from the source to all other nodes
    return distance;
  }
}
