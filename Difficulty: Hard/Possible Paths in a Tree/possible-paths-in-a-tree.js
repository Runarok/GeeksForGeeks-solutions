//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let edges = [];
        for(let i=0;i<n-1;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            edges.push(a);
        }
        
        
        let q = parseInt(readLine());
        
        
        let queries = new Array(q);
        let input_queries = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<q;i++){
            queries[i] = input_queries[i];
        }
        
        let obj = new Solution();
        let res = obj.maximumWeight(n, edges, q, queries);
        
        let S_res = '';
        for(let i=0;i<res.length;i++)
        {
            S_res+=(res[i]);
            S_res+=' ';
        }
        console.log(S_res);
        
    }
}

// } Driver Code Ends



class Solution {
    constructor() {
        this.parent = []; // Array to keep track of the parent node for each node
        this.size = []; // Array to store the size of each set (for union by size)
    }

    /**
    * @param number x
    * @returns number
    * Find the representative (root) of the set containing x
    */
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    /**
    * @param number x
    * @param number y
    * @returns number
    * Merge the sets containing x and y, if they are different, and return the number of new paths
    */
    union(x, y) {
        let rootX = this.find(x), rootY = this.find(y);
        
        // If x and y are not in the same set, merge the sets
        if (rootX !== rootY) {
            // Union by size: attach the smaller tree under the larger tree
            if (this.size[rootX] < this.size[rootY]) [rootX, rootY] = [rootY, rootX];
            this.parent[rootY] = rootX; // Set rootX as the new parent of rootY
            let newPaths = this.size[rootX] * this.size[rootY]; // Number of new paths formed by merging
            this.size[rootX] += this.size[rootY]; // Update the size of the new root set
            return newPaths; // Return the number of new paths
        }
        return 0; // No new paths if they are already in the same set
    }

    /**
    * @param number n
    * @param number[][] edges
    * @param number q
    * @param number[] queries
    * @returns number[]
    * Find the maximum weight of paths that can be formed for each query
    */
    maximumWeight(n, edges, q, queries) {
        // Sort edges by their weight in ascending order
        edges.sort((a, b) => a[2] - b[2]);
        
        // Create an array of queries with their original indices to output answers in correct order
        let queryWithIndex = queries.map((val, idx) => [val, idx]);
        // Sort queries in increasing order of their limits
        queryWithIndex.sort((a, b) => a[0] - b[0]);
        
        // Initialize parent and size arrays for the union-find structure
        this.parent = Array(n + 1).fill(0).map((_, i) => i); // Initially, each node is its own parent
        this.size = Array(n + 1).fill(1); // Initially, each set has size 1
        
        let result = Array(q).fill(0); // Array to store the results of each query
        let edgeIdx = 0, pathCount = 0; // Initialize edge index and path count
        
        // Process each query
        for (let [limit, idx] of queryWithIndex) {
            // Add all edges with weight <= limit to the union-find structure
            while (edgeIdx < edges.length && edges[edgeIdx][2] <= limit) {
                let [u, v] = edges[edgeIdx].slice(0, 2); // Get nodes u and v from the edge
                pathCount += this.union(u, v); // Union the sets containing u and v, and add the new paths formed
                edgeIdx++; // Move to the next edge
            }
            result[idx] = pathCount; // Store the result for the current query
        }
        
        return result; // Return the results for all queries
    }
}
