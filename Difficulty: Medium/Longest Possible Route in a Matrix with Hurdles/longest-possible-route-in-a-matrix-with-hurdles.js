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
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = a[0];
        let m = a[1];
        let b = readLine().trim().split(" ").map((x) => parseInt(x));
        let xs = b[0];
        let ys = b[1];
        let xd = b[2];
        let yd = b[3];
        let mat = [];
        for(let j = 0;j<n;j++){
            let row = new Array(m);
            let input_row =  readLine().trim().split(" ").map((x) => parseInt(x));
            for(let k = 0;k<m;k++){
                row[k] = input_row[k];
            }
            mat.push(row);
        }
        let obj = new Solution();
        let res = obj.longestPath(mat, n, m, xs, ys, xd, yd);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} m
 * @param {number} xs
 * @param {number} ys
 * @param {number} xd
 * @param {number} yd
 * @returns {number}
*/

class Solution {
    /**
    * @param {number[][]} mat
    * @param {number} n
    * @param {number} m
    * @param {number} xs
    * @param {number} ys
    * @param {number} xd
    * @param {number} yd
    * @returns {number}
    */
    longestPath(mat, n, m, xs, ys, xd, yd) {
        // Directions: right, left, up, down
        const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        
        let mxpath = -1;  // Variable to store the maximum path length

        // DFS function to explore the matrix
        const dfs = (x, y, pathLen) => {
            // If we've reached the destination, update the max path length
            if (x === xd && y === yd) {
                mxpath = Math.max(mxpath, pathLen);
                return;
            }

            // Mark the current cell as visited (use 2 to mark visited cells)
            mat[x][y] = 2;  // Visited cells are marked as '2'

            // Explore all four possible directions
            for (const [dx, dy] of directions) {
                const xn = x + dx;
                const yn = y + dy;

                // If the new position is within bounds and unvisited (mat[xn][yn] === 1)
                if (xn >= 0 && xn < n && yn >= 0 && yn < m && mat[xn][yn] === 1) {
                    dfs(xn, yn, pathLen + 1);
                }
            }

            // Backtrack: Unmark the current cell as visited (mat[x][y] = 1)
            mat[x][y] = 1;
        };

        // Edge case: if the start or destination is blocked
        if (mat[xs][ys] === 0 || mat[xd][yd] === 0) {
            return -1;
        }

        // Start DFS only if the starting position is valid (mat[xs][ys] === 1)
        dfs(xs, ys, 0);  // Start DFS from the starting point with an initial path length of 0

        // Return the maximum path length found, or -1 if no path was found
        return mxpath;
    }
}
