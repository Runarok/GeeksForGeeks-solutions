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
        let m = parseInt(input_line[0]);
        let n = parseInt(input_line[1]);
        
        let obj = new Solution();
        let res = obj.minCut(m, n);
        
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} M
 * @param {number} N
 * @returns {number}
*/

class Solution {
    minCut(M, N) {
        // Create a DP table to store minimum number of squares for each sub-rectangle
        let dp = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));
        
        // Fill the DP table for all sub-rectangles
        for (let i = 1; i <= M; i++) {
            for (let j = 1; j <= N; j++) {
                // If it's a square, only 1 square is needed
                if (i === j) {
                    dp[i][j] = 1;
                } else {
                    let minSquares = Infinity;
                    // Try cutting horizontally and vertically
                    // Horizontal cuts
                    for (let k = 1; k < i; k++) {
                        minSquares = Math.min(minSquares, dp[k][j] + dp[i - k][j]);
                    }
                    // Vertical cuts
                    for (let k = 1; k < j; k++) {
                        minSquares = Math.min(minSquares, dp[i][k] + dp[i][j - k]);
                    }
                    dp[i][j] = minSquares;
                }
            }
        }
        
        // Return the minimum squares required for the M x N rectangle
        return dp[M][N];
    }
}
