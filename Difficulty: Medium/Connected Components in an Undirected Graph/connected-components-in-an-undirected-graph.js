//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());

    for (let i = 0; i < t; i++) {
        let e = parseInt(readLine());
        let v = parseInt(readLine());

        let edges = [];
        for (let i = 0; i < e; i++) {
            let edge = readLine().split(' ').map(Number);
            edges.push(edge);
        }

        let obj = new Solution();
        let res = obj.connectedcomponents(v, edges);

        // Print each connected component on a new line
        res.forEach(component => {
            let ss = "";
            for (let j = 0; j < component.length; j++) {
                ss += component[j];
                ss += ' ';
            }
            console.log(ss);
        });
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param number v
    * @param number[][] edges
    * @returns number[][]
    */
    connectedcomponents(v, edges) {
        
        // Create a map to represent the graph (adjacency list)
        const graph = new Map();
        
        // Add edges to the graph
        for(let [u, v] of edges){
            const uNeighbors = graph.get(u) || [];
            const vNeighbors = graph.get(v) || [];
            
            uNeighbors.push(v);
            vNeighbors.push(u);
            
            graph.set(u, uNeighbors);
            graph.set(v, vNeighbors);
        }

        // Initialize visited array to track visited nodes
        const visited = new Array(v).fill(false);
        
        // To store the connected components
        const components = [];
        
        // Helper function to traverse a component using DFS
        function traverseComponent(node, currentComponent){
            if(!visited[node]){
                visited[node] = true;
                currentComponent.push(node);
            }

            if(graph.get(node)){
                for(let neighbor of graph.get(node)){
                    if(!visited[neighbor]){
                        traverseComponent(neighbor, currentComponent);
                    }
                }
            }
            return currentComponent;
        }
        
        // Traverse all nodes and find the connected components
        for(let i = 0; i < visited.length; i++){
            if(!visited[i]){
                // Sort each component for consistent order
                components.push([...traverseComponent(i, [])].sort((a, b) => a - b));
            }
        }
        
        return components;
    }
}
