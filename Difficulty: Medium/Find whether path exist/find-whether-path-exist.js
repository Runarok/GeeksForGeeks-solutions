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
        let grid = new Array(n);
        for(let i=0;i<n;i++)
        {
            grid[i] = new Array(n);
            input_line = readLine().split(' ');
            for(let j=0;j<n;j++)
            {
                grid[i][j] = parseInt(input_line[j]);
            }
        }
        let obj = new Solution();
        let ans = obj.is_Possible(grid)?1:0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} grid
 * @returns {boolean}
*/
class Solution
{
    // Function to find whether a path exists from the source to destination.
    is_Possible(grid)
    {
        // Find source (1) and destination (2)
        let n = grid.length;
        let source = [-1, -1], destination = [-1, -1];
        
        // Find the positions of source and destination
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    source = [i, j];
                } else if (grid[i][j] === 2) {
                    destination = [i, j];
                }
            }
        }
        
        // If the source or destination is not found
        if (source[0] === -1 || destination[0] === -1) {
            return false;
        }
        
        // BFS initialization
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
        let queue = [];
        let visited = Array.from({ length: n }, () => Array(n).fill(false));
        
        // Enqueue source and mark it visited
        queue.push(source);
        visited[source[0]][source[1]] = true;
        
        // BFS loop
        while (queue.length > 0) {
            let [x, y] = queue.shift();
            
            // If destination is reached, return true
            if (x === destination[0] && y === destination[1]) {
                return true;
            }
            
            // Explore all 4 possible directions
            for (let [dx, dy] of directions) {
                let nx = x + dx;
                let ny = y + dy;
                
                // Check if the new position is within bounds and not visited
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] !== 0) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        
        // If we exhaust all options without reaching destination
        return false;
    }
}
