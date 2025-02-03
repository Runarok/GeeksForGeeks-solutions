//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
let idx = 0;
function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputLine1 = readLine().split(' ');
        let n = parseInt(inputLine1[0]);
        let m = parseInt(inputLine1[1]);

        let grid = [];
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let inputLine2 = readLine().split(' ');
            for (let j = 0; j < m; j++) {
                a[j] = parseInt(inputLine2[j]);
            }
            grid.push(a);
        }
        let obj = new Solution();
        let res = obj.uniquePaths(n, m, grid);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} grid
 * @returns {number}
*/
class Solution {
    constructor() {
        this.mod = 1000000007; // The modulo value for results to avoid overflow
    }

    // Recursive helper function (Naive approach)
    helper(arr, r, c) {
        if (r == 0 && c == 0) {
            return 1; // If we reach the top-left cell, there's only one way to reach it
        }
        if (r < 0 || c < 0 || arr[r][c] == 0) {
            return 0; // Out of bounds or blocked cell
        }

        // Recursively calculate the number of paths from left and up
        let left = this.helper(arr, r, c - 1);
        let up = this.helper(arr, r - 1, c);
        return left + up; // Sum the paths from both directions
    }

    // Memoization approach to optimize the recursion
    helper1(arr, r, c, dparr) {
        if (r == 0 && c == 0) {
            return 1; // If we reach the top-left cell, return 1
        }
        if (r < 0 || c < 0 || arr[r][c] == 0) {
            return 0; // Out of bounds or blocked cell
        }

        if (dparr[r][c] != -1) {
            return dparr[r][c]; // Return already computed result if present
        }

        // Calculate paths from left and up, apply modulo to prevent overflow
        let left = this.helper1(arr, r, c - 1, dparr) % this.mod;
        let up = this.helper1(arr, r - 1, c, dparr) % this.mod;
        return (dparr[r][c] = (left + up) % this.mod); // Store and return result
    }

    // Tabulation approach (bottom-up dynamic programming)
    helper2(arr, r, c, dparr) {
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (arr[i][j] === 0) {
                    dparr[i][j] = 0; // Blocked cell, no paths
                } else if (i === 0 && j === 0) {
                    dparr[i][j] = 1; // Starting point, 1 way to be there
                } else {
                    let left = 0, up = 0;
                    if (i > 0) {
                        up = dparr[i - 1][j]; // Value from the cell above
                    }
                    if (j > 0) {
                        left = dparr[i][j - 1]; // Value from the cell to the left
                    }
                    dparr[i][j] = (left + up) % this.mod; // Sum the paths from both directions
                }
            }
        }
        return dparr[r - 1][c - 1]; // Return result from the bottom-right corner
    }

    // Main function to calculate the number of unique paths
    uniquePaths(n, m, grid) {
        // Initialize the dynamic programming table
        let dparr = new Array(n);
        for (let i = 0; i < n; i++) {
            dparr[i] = new Array(m).fill(0); // Initialize all cells as 0
        }

        // Use the tabulation method to find the number of unique paths
        return this.helper2(grid, n, m, dparr);
    }
}
