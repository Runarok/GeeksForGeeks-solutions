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
        let grid = [];
        for(let i=0;i<n;i++)
        {
            let a = readLine().split(' ').map(x=>parseInt(x));
            grid.push(a);
        }
        let obj = new Solution();
        let res = obj.totalWays(n, m, grid);
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
    // Helper function to recursively calculate the number of ways to reach the bottom-right corner
    helper(x, y, n, m, grid, dp){
        // If we reach the destination and it's not blocked, return 1
        if( x == n-1 && y == m-1 && grid[x][y] != 1) return BigInt(1);
        // If out of bounds, return 0 (invalid path)
        if(x >= n || y >= m) return BigInt(0);
        // If the current cell is blocked, return 0 (can't move here)
        if(grid[x][y] == 1) return BigInt(0);
        
        // If already calculated, return the cached result
        if(dp[x][y] != -1) return dp[x][y];
        
        // Move down (x+1, y) and move right (x, y+1) and accumulate ways
        let p1 = this.helper(x+1, y, n ,m, grid, dp);
        let p2 = this.helper(x, y+1, n ,m, grid, dp);
        
        // Store and return the total number of ways
        return dp[x][y] = p1 + p2;
    }

    // Function to calculate the total number of ways to reach the bottom-right corner
    totalWays(n, m, grid) {
        // Initialize the DP table with -1
        let dp = new Array(n+1);
        for(let i =0 ;i < n+1; i++){
            dp[i] = Array(m+1).fill(BigInt(-1));
        }
        
        // Call helper function and return the result modulo 1000000007
        return Number(this.helper(0 ,0 , n, m, grid, dp) % BigInt(1000000007));
    }
}
