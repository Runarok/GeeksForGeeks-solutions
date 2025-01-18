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
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        let grid =  new Array();
        for(let i=0;i<n;i++)
        {
            let g = new Array();
            input_line = readLine().split(" ");
            for(let j=0;j<m;j++)
            {
                g.push(parseInt(input_line[j]));
            }
            grid.push(g);
        }
        
        let obj = new Solution();
        let ans = obj.findMaxArea(grid);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
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
    // Helper function to perform DFS
    dfs(grid, visited, i, j, n, m) {
        // Directions for 8 possible moves (horizontal, vertical, diagonal)
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1],  // up, down, left, right
            [-1, -1], [-1, 1], [1, -1], [1, 1]  // 4 diagonals
        ];

        // Stack for DFS
        let stack = [[i, j]];
        let area = 0;
        
        // Perform DFS
        while (stack.length > 0) {
            const [x, y] = stack.pop();
            if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === 1 && !visited[x][y]) {
                visited[x][y] = true;
                area++;
                // Check all 8 directions
                for (const [dx, dy] of directions) {
                    stack.push([x + dx, y + dy]);
                }
            }
        }
        return area;
    }
    
    // Function to find unit area of the largest region of 1s
    findMaxArea(grid) {
        const n = grid.length;
        const m = grid[0].length;
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        let maxArea = 0;

        // Traverse every cell in the grid
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // If the cell is a 1 and not visited, perform DFS to find the region
                if (grid[i][j] === 1 && !visited[i][j]) {
                    maxArea = Math.max(maxArea, this.dfs(grid, visited, i, j, n, m));
                }
            }
        }

        return maxArea;
    }
}
