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
        let N = input_ar1[0];
        let M = input_ar1[1];
        let grid = [];
        for(let i=0;i<N;i++)
        {
            let a = [];
            let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<M;j++)
                a.push(input_ar2[j]);
            grid.push(a);
        }
        let obj = new Solution();
        console.log(obj.numberOfEnclaves(grid));
    
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
    // Function to count the number of enclaves.
    numberOfEnclaves(grid) {
        const n = grid.length;
        const m = grid[0].length;

        // Directions for 4-directional movement (up, down, left, right)
        const directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1]   // right
        ];

        // Helper function to perform DFS from a given cell
        function dfs(x, y) {
            // If out of bounds or not a land cell, return
            if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
                return;
            }

            // Mark the current cell as visited (set it to 0, which means water)
            grid[x][y] = 0;

            // Visit all 4 adjacent cells
            for (const [dx, dy] of directions) {
                dfs(x + dx, y + dy);
            }
        }

        // Perform DFS from all boundary cells that are land (1)
        // Top and bottom rows
        for (let j = 0; j < m; j++) {
            if (grid[0][j] === 1) dfs(0, j); // top row
            if (grid[n - 1][j] === 1) dfs(n - 1, j); // bottom row
        }

        // Left and right columns
        for (let i = 0; i < n; i++) {
            if (grid[i][0] === 1) dfs(i, 0); // left column
            if (grid[i][m - 1] === 1) dfs(i, m - 1); // right column
        }

        // Count remaining land cells (those that cannot reach the boundary)
        let enclaveCount = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    enclaveCount++;
                }
            }
        }

        return enclaveCount;
    }
}
