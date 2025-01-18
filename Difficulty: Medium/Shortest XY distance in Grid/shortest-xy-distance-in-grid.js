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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let grid = new Array();
        for(let i=0;i<n;i++)
        {
            let input_row = readLine().split(' ').map(x=>x);
            grid.push(input_row);
        }
        let obj = new Solution();
        let ans = obj.shortestXYDist(grid, n, m);
        if(ans == -0){
            ans = 0;
        }
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} grid
 * @param {number} N
 * @param {number} M
 * @returns {number}
*/
class Solution {
    // Function to find the shortest distance between two cells of the grid.
    shortestXYDist(grid, N, M) {
        let xPositions = [];
        let yPositions = [];
        
        // Step 1: Collect positions of 'X' and 'Y'
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (grid[i][j] === 'X') {
                    xPositions.push([i, j]);
                } else if (grid[i][j] === 'Y') {
                    yPositions.push([i, j]);
                }
            }
        }
        
        let minDistance = Infinity;
        
        // Step 2: Compute the minimum Manhattan distance between 'X' and 'Y'
        for (let i = 0; i < xPositions.length; i++) {
            for (let j = 0; j < yPositions.length; j++) {
                let xRow = xPositions[i][0];
                let xCol = xPositions[i][1];
                let yRow = yPositions[j][0];
                let yCol = yPositions[j][1];
                
                // Calculate the Manhattan distance
                let distance = Math.abs(xRow - yRow) + Math.abs(xCol - yCol);
                
                // Track the minimum distance
                minDistance = Math.min(minDistance, distance);
            }
        }
        
        return minDistance;
    }
}
