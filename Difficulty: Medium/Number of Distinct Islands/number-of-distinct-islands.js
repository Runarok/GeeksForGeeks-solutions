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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let grid = [];
        for(let i=0;i<n;i++)
        {   let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
            let row = input_ar2;
            grid.push(row);
        }
        let obj = new Solution();
        console.log(obj.countDistinctIslands(grid));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} grid
 * @returns {number}
*/

class Solution {
    /**
    * Performs depth-first search (DFS) to explore an island and record its shape relative to the starting point.
    * @param {number} startX - The initial x-coordinate of the island's starting point
    * @param {number} startY - The initial y-coordinate of the island's starting point
    * @param {number[][]} grid - The grid representing the map
    * @param {number} x - The current x-coordinate being explored
    * @param {number} y - The current y-coordinate being explored
    * @param {Array} islandShape - Array to record the relative positions of island cells
    * @param {boolean[][]} visited - 2D array to mark visited cells
    */
    dfs(startX, startY, grid, x, y, islandShape, visited) {
        const m = grid.length, n = grid[0].length;

        // Check boundaries and if the cell is unvisited and part of the island
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || grid[x][y] !== 1) {
            return;
        }

        visited[x][y] = true;
        islandShape.push([startX - x, startY - y]);

        // Explore all four directions
        this.dfs(startX, startY, grid, x + 1, y, islandShape, visited);
        this.dfs(startX, startY, grid, x, y + 1, islandShape, visited);
        this.dfs(startX, startY, grid, x - 1, y, islandShape, visited);
        this.dfs(startX, startY, grid, x, y - 1, islandShape, visited);
    }

    /**
    * Counts the number of distinct islands in the grid.
    * @param {number[][]} grid - The grid representing the map
    * @returns {number} - The number of distinct islands
    */
    countDistinctIslands(grid) {
        const m = grid.length, n = grid[0].length;
        const distinctIslands = new Set();  // Store unique island shapes
        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        // Iterate over all cells in the grid
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (!visited[i][j] && grid[i][j] === 1) {
                    const islandShape = [];
                    this.dfs(i, j, grid, i, j, islandShape, visited);
                    distinctIslands.add(JSON.stringify(islandShape));  // Store shape as a unique string
                }
            }
        }

        return distinctIslands.size;
    }
}
