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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        let adj = new Array(n);
        for(let i=0;i<n;i++)
        {
            adj[i] = new Array();
        }
        for(let i=0;i<n;i++)
        {
            input_line = readLine().split(' ');
            for(let j=0;j<m;j++)
            {
                adj[i][j] = input_line[0][j];
            }
        }
        let obj = new Solution();
        let res = obj.xShape(adj);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {character[][]} grid
 * @returns {number}
*/
class Solution {
    //Function to find the number of 'X' total shapes.
    xShape(grid) {
        const n = grid.length;
        const m = grid[0].length;
        let count = 0;
        
        // Directions for up, down, left, and right
        const directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1]   // right
        ];

        // Function to perform DFS and mark all connected 'X' as visited
        function dfs(x, y) {
            grid[x][y] = 'O';  // Mark as visited by changing 'X' to 'O'
            for (let [dx, dy] of directions) {
                let nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 'X') {
                    dfs(nx, ny);
                }
            }
        }

        // Traverse the entire grid
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 'X') {
                    count++;
                    dfs(i, j);  // Start DFS to mark all connected 'X's
                }
            }
        }
        
        return count;  // Return the number of shapes found
    }
}
