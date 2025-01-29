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

        let n = parseInt(readLine());

        let grid = [];
        for (let i = 0; i < n; i++) {
            let ar = readLine().trim().split(' ').map((x) => parseFloat(x));
            let a = [];
            for (let j = 0; j < n; j++) a.push(ar[j]);
            grid.push(a);
        }

        let obj = new Solution();
        let res = obj.MaxConnection(n, grid);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class UnionFind {
    constructor(size) {
        // Initialize the parent array where each element is its own parent (self-loop)
        this.parent = Array.from({ length: size }, (_, i) => i);
        // Initialize the rank array to keep track of tree depth (used for union by rank)
        this.rank = Array(size).fill(0);
        // Initialize the size array to track the size of each connected component
        this.size = Array(size).fill(1);
    }

    // Find the root of a set (with path compression for efficiency)
    find(x) {
        if (this.parent[x] !== x) {
            // Path compression: make each node point directly to the root
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    // Union two sets (union by rank and size for efficiency)
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            // Union by rank: attach the smaller tree under the larger one
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
                this.size[rootY] += this.size[rootX];
            } else if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
                this.size[rootX] += this.size[rootY];
            } else {
                // If both ranks are equal, choose one to be the root and increase the rank
                this.parent[rootY] = rootX;
                this.size[rootX] += this.size[rootY];
                this.rank[rootX]++;
            }
        }
    }

    // Get the size of the set that contains element x
    getSize(x) {
        return this.size[this.find(x)];
    }
}

class Solution {
    MaxConnection(n, grid) {
        // Directions for moving in the grid (right, down, left, up)
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        // Initialize UnionFind with n * n elements (representing the grid)
        let uf = new UnionFind(n * n);

        // Helper function to check if a position (x, y) is within the grid bounds
        const isValid = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

        // Step 1: Union the adjacent cells that have a value of 1 (i.e., connected cells)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    // For each '1' cell, check its four neighbors
                    for (let [dx, dy] of directions) {
                        let x = i + dx;
                        let y = j + dy;
                        // If the neighbor is within bounds and also a '1', union the two cells
                        if (isValid(x, y) && grid[x][y] === 1) {
                            uf.union(i * n + j, x * n + y);
                        }
                    }
                }
            }
        }

        // Step 2: Find the maximum size of any connected component of '1's
        let maxSize = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const id = i * n + j;  // Get the ID of the cell in the UnionFind structure
                    maxSize = Math.max(maxSize, uf.getSize(id));  // Update maxSize with the size of the component
                }
            }
        }

        // Step 3: Try flipping each '0' to '1' and calculate the new maximum size of a connected component
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    let uniqueGrid = new Set();  // Set to store the unique roots of neighboring '1' cells
                    let newSize = 1;  // We count the flipped '0' itself

                    // Check the four neighboring cells for '1's
                    for (let [dx, dy] of directions) {
                        let x = i + dx;
                        let y = j + dy;
                        
                        // If the neighbor is within bounds and is '1', add its root to the set
                        if (isValid(x, y) && grid[x][y] === 1) {
                             uniqueGrid.add(uf.find(x * n + y));
                        }
                    }

                    // For each unique neighboring root, add the size of its connected component
                    for (let root of uniqueGrid) {
                        newSize += uf.getSize(root);
                    }

                    // Update the maxSize with the new size after flipping the current '0' to '1'
                    maxSize = Math.max(maxSize, newSize);
                }
            }
        }

        // Return the maximum size of the connected component after flipping at most one '0' to '1'
        return maxSize;
    }
}
