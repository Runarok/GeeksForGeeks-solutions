//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputLine = readLine().split(' ');
        let n = parseInt(inputLine[0]);
        let m = parseInt(inputLine[1]);

        let grid = new Array(n);
        for (let i = 0; i < n; i++) {
            inputLine = readLine().split(' ');
            grid[i] = new Array(m);
            for (let j = 0; j < m; j++) {
                grid[i][j] = parseInt(inputLine[j]);
            }
        }

        let obj = new Solution();
        let ans = obj.solve(n, m, grid);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the maximum possible sum for the two players, traversing the grid.
     * @param {number} n - Number of rows in the grid.
     * @param {number} m - Number of columns in the grid.
     * @param {number[][]} grid - 2D array representing the grid.
     * @returns {number} - The maximum possible sum both players can achieve.
     */
    solve(n, m, grid) {
        // Initialize a 3D memoization array to store results for subproblems
        let memo = Array.from({length: n}, () => Array.from({length: m}, () => new Array(m).fill(-1)));
        
        // Start the recursive function to calculate the result starting from the first row, with players at the first and last columns
        return this.helper(grid, memo, 0, 0, m-1);
    }
    
    /**
     * Helper function that uses dynamic programming and memoization to calculate the maximum sum recursively.
     * @param {number[][]} grid - 2D array representing the grid.
     * @param {number[][][]} memo - 3D array to memoize results for subproblems.
     * @param {number} i - Current row.
     * @param {number} j1 - Current column of the first player.
     * @param {number} j2 - Current column of the second player.
     * @returns {number} - The maximum sum both players can achieve from position (i, j1) and (i, j2).
     */
    helper(grid, memo, i, j1, j2) {
        // Base case: If the row or columns go out of bounds, return negative infinity to avoid invalid paths.
        if(i >= grid.length || j1 < 0 || j1 >= grid[i].length || j2 < 0 || j2 >= grid[i].length){
            return -Infinity;
        }
        
        // If we reached the last row, return the sum of the two players' positions
        if(i === grid.length - 1){
            if(j1 == j2) return grid[i][j1]; // If both players are at the same position, count it once.
            else return grid[i][j1] + grid[i][j2]; // Otherwise, sum the values from both players' positions.
        }
        
        // If this subproblem has already been solved, return the stored result.
        if(memo[i][j1][j2] != -1) return memo[i][j1][j2];
        
        // Directions in which the players can move (up, stay, down)
        const dir = [-1, 0, 1];
        
        let ans = -Infinity;
        
        // Try all possible moves for both players and choose the one that gives the maximum sum.
        for(const dj1 of dir){
            for(const dj2 of dir){
                let val = 0;
                
                // If both players are on the same cell, count that cell's value only once.
                if(j1 === j2){
                    val += grid[i][j1];
                } else {
                    // Otherwise, count both players' values from their respective positions.
                    val += grid[i][j1] + grid[i][j2];
                }
                
                // Recursively calculate the maximum sum for the next row with the new positions for both players.
                val += this.helper(grid, memo, i + 1, j1 + dj1, j2 + dj2);
                
                // Update the answer with the maximum sum.
                ans = Math.max(ans, val);
            }
        }
        
        // Store the result in the memo array for future reference.
        return memo[i][j1][j2] = ans;
    }
}
