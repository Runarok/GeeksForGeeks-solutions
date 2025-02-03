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
    let i = 0;
    for (; i < t; i++) {

        let e = parseInt(readLine());

        let v = parseInt(readLine());

        let edges = [];
        for (let i = 0; i < e; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            edges.push(a);
        }

        let obj = new Solution();
        let res = obj.findNumberOfGoodComponent(e, v, edges);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param number e - The number of edges in the graph.
    * @param number v - The number of vertices in the graph.
    * @param number[][] edges - An array of edges, where each edge is a pair of vertices.
    * @returns number - The number of good (fully connected) components in the graph.
    */
    findNumberOfGoodComponent(e, v, edges) {
        // Step 1: Build the adjacency list for the graph.
        // The adjacency list will be a list of lists, where adj[i] contains all the neighbors of vertex i.
        let adj = new Array(v + 1).fill(null).map(() => []); // Initialize an empty adjacency list
        
        // Populate the adjacency list with edges
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u); // Since the graph is undirected, add both directions
        }
        
        // Step 2: Initialize a visited array to keep track of which vertices have been visited.
        // This helps to avoid revisiting the same vertex and to identify components.
        let visited = new Array(v + 1).fill(false);
        
        // Step 3: DFS (Depth-First Search) function to explore a component.
        // This function will traverse the graph starting from a node and return true if the component is fully connected.
        const dfs = (node) => {
            let stack = [node]; // Use a stack to simulate DFS
            let nodesInComponent = 0;  // Count the number of nodes in the current component
            let edgesInComponent = 0;  // Count the number of edges in the current component
            
            // Start the DFS traversal
            while (stack.length > 0) {
                let currentNode = stack.pop(); // Pop a node from the stack to process
                
                // Skip the node if it's already visited
                if (visited[currentNode]) continue;
                
                // Mark the node as visited
                visited[currentNode] = true;
                nodesInComponent++;  // Increment the node count for this component
                
                // Traverse all neighbors of the current node
                for (let neighbor of adj[currentNode]) {
                    edgesInComponent++;  // Count this edge
                    if (!visited[neighbor]) {
                        stack.push(neighbor);  // Add unvisited neighbors to the stack
                    }
                }
            }
            
            // In an undirected graph, each edge is counted twice (once for each direction)
            // So, we divide the number of edges by 2 to get the actual number of unique edges in the component
            edgesInComponent /= 2;
            
            // Step 4: Check if the component is fully connected.
            // A fully connected component with 'n' nodes should have exactly n * (n - 1) / 2 edges.
            let expectedEdges = nodesInComponent * (nodesInComponent - 1) / 2;
            return edgesInComponent === expectedEdges;  // Return true if it's fully connected, false otherwise
        };
        
        // Step 5: Traverse the graph and count good (fully connected) components.
        let goodComponents = 0;
        
        // Iterate over all vertices in the graph
        for (let i = 1; i <= v; i++) {
            if (!visited[i]) {  // If the vertex hasn't been visited, it marks the start of a new component
                // Perform DFS to explore the component
                if (dfs(i)) {
                    goodComponents++;  // If the component is fully connected, increment the counter
                }
            }
        }
        
        // Step 6: Return the number of good (fully connected) components
        return goodComponents;
    }
}
