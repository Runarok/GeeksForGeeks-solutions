//{ Driver Code Starts
//Initial Template for javascript

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
        let etmp=readLine().split(' ').map(x=>parseInt(x));
        let n = etmp[0];
        let m = etmp[1];
        let grid = new Array(n);
        for(let i=0;i<n;i++){
            let inputArray=readLine().split(' ').map(x=>parseInt(x));
            grid[i] = new Array(m);
            for(let j=0;j<m;j++){
                grid[i][j] = inputArray[j];
            }
        }
        
        etmp=readLine().split(' ').map(x=>parseInt(x));
        let source = etmp;
        
        etmp=readLine().split(' ').map(x=>parseInt(x));
        let destination = etmp;
        
        let obj = new Solution();
        let ans = obj.shortestPath(grid, source, destination);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} grid
 * @param {number[]} source
 * @param {number[]} destination
 * @return {number}
 */

class Solution {
    /**
    * @param {number[][]} grid
    * @param {number[]} source
    * @param {number[]} destination
    * @returns {number}
    */
    shortestPath(grid, source, destination) {
        const n = grid.length;
        const m = grid[0].length;
        const q = [];  // Queue for BFS
        q.push([0, source]);  // Initialize with distance 0 and source
        const sides = [[-1, 0], [0, 1], [1, 0], [0, -1]];  // Directions: up, right, down, left
        const dist = Array.from({ length: n }, () => Array(m).fill(10 ** 8));  // Initialize distance table with a large number
        dist[source[0]][source[1]] = 0;  // Start point distance is 0
        
        // BFS loop
        while (q.length) {
            const [dis, node] = q.shift();  // Dequeue the front element
            const [ni, nj] = node;
            
            // Check if we've reached the destination
            if (ni === destination[0] && nj === destination[1]) {
                return dist[ni][nj];
            }
            
            // Explore the 4 possible directions (up, right, down, left)
            for (const [sidei, sidej] of sides) {
                const newi = ni + sidei, newj = nj + sidej;
                
                // Check if the new position is valid and within bounds
                if (0 <= newi && newi < n && 0 <= newj && newj < m && grid[newi][newj] === 1 && dis + 1 < dist[newi][newj]) {
                    dist[newi][newj] = dis + 1;  // Update distance
                    q.push([dis + 1, [newi, newj]]);  // Enqueue the new position with updated distance
                }
            }
        }
        
        // If no path was found, return -1
        return -1;
    }
}
