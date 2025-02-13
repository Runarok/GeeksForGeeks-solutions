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
        let [n,m,k] = readLine().trim().split(" ").map((x) => parseInt(x));
        let blocked_cells = [];
        for(let j = 0;j<k;j++){
            let arr = readLine().trim().split(" ").map((x) => parseInt(x));
            blocked_cells.push(arr);
        }
        let obj = new Solution();
        let res = obj.FindWays(n,m,blocked_cells);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - Number of rows in the grid
 * @param {number} m - Number of columns in the grid
 * @param {number[][]} blocked_cells - List of blocked cell positions
 * @returns {number} - Number of unique paths from (0,0) to (n-1,m-1)
 */

class Solution {
  // Function to find the number of unique paths in a grid with blocked cells
  FindWays(n, m, blocked_cells) {
    // Initialize a grid with default values of 0
    let grid = new Array(n).fill().map(() => new Array(m).fill(0));

    // Mark blocked cells with '+'
    for (let i = 0; i < blocked_cells.length; i++) {
      let row = blocked_cells[i][0] - 1;
      let col = blocked_cells[i][1] - 1;
      grid[row][col] = '+';
    }

    // Memoization array to store results of subproblems
    let memo = new Array(n).fill().map(() => new Array(m).fill(-1));

    // Start exploring paths from (0,0)
    return this.explorePaths(grid, memo, 0, 0, n, m);
  }

  // Helper function to recursively explore all possible paths
  explorePaths(grid, memo, row, col, numRows, numCols) {
    // Define possible movement directions: Down (1,0) and Right (0,1)
    const directions = [
      [1, 0], // Move down
      [0, 1], // Move right
    ];

    // If out of bounds or at a blocked cell, return 0 (no path)
    if (row >= numRows || col >= numCols || grid[row][col] === '+') {
      return 0;
    }

    // If we reach the bottom-right corner, return 1 (valid path found)
    if (row === numRows - 1 && col === numCols - 1) {
      return 1;
    }

    // If this cell has already been computed, return the stored result
    if (memo[row][col] !== -1) {
      return memo[row][col];
    }

    let totalPaths = 0;

    // Explore possible movements (down and right)
    for (let i = 0; i < directions.length; i++) {
      let newRow = row + directions[i][0];
      let newCol = col + directions[i][1];
      totalPaths += this.explorePaths(grid, memo, newRow, newCol, numRows, numCols);
    }

    // Store the computed result in memoization array
    memo[row][col] = totalPaths % (1e9 + 7);

    return memo[row][col];
  }
}
