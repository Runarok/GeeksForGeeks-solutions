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

class Node {
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        let grid = new Array();
        for (let i = 0; i < n; i++) {
            input_line = readLine().split(" ");
            let g = new Array(m);
            for (let j = 0; j < m; j++) {
                g[j] = parseInt(input_line[j]);
            }
            grid.push(g);
        }

        let obj = new Solution();
        let ans = obj.nearest(grid);
        for (let i = 0; i < ans.length; i++) {
            let s = "";
            for (let j = 0; j < ans[i].length; j++) s += ans[i][j] + " ";
            console.log(s);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} grid
 * @returns {number[][]}
 */

class Solution {
    constructor() {
        this.dx = [ 1, -1, 0, 0 ]; // Directions for row movement: down, up, right, left
        this.dy = [ 0, 0, 1, -1 ]; // Directions for column movement: down, up, right, left
    }

    // Function to check whether the cell is within the matrix bounds.
    isValid(x, y, n, m) { 
        return (x >= 0 && x < n && y >= 0 && y < m);  // Ensure (x, y) is within the grid boundaries
    }

    nearest(grid) {
        let n = grid.length;
        let m = grid[0].length;

        // We will use a deque (double-ended queue) to store the coordinates of cells with grid value 1.
        let q = [];

        // dp array to store the minimum distance for each cell, initialized to a large value.
        let dp = Array.from({length: n}, () => Array(m).fill(Number.MAX_SAFE_INTEGER));

        // Traversing all the cells in the matrix to find the cells that contain 1.
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) {
                    dp[i][j] = 0;  // Distance of cells with value 1 is 0
                    q.push([i, j]);  // Add the coordinates of the 1's to the deque
                }
            }
        }

        // BFS traversal from all cells containing 1 to compute the nearest distance to 1 for each cell.
        let front = 0; // Pointer to the front of the deque

        while (front < q.length) {
            let [x, y] = q[front++]; // Get the current cell

            // Iterate over the four possible directions (up, down, left, right)
            for (let i = 0; i < 4; i++) {
                let n_x = x + this.dx[i];
                let n_y = y + this.dy[i];

                // Check if the new position is valid and whether updating the dp table results in a shorter distance
                if (this.isValid(n_x, n_y, n, m) && dp[n_x][n_y] > dp[x][y] + 1) {
                    dp[n_x][n_y] = dp[x][y] + 1;  // Update the distance to the nearest 1
                    q.push([n_x, n_y]);  // Add to the back of the deque
                }
            }
        }

        // Return the dp array, which contains the minimum distances from each cell to the nearest 1
        return dp;
    }
}
