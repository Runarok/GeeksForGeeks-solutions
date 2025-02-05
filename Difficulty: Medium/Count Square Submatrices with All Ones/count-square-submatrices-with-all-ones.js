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
        
        let grid = [];
        for(let i=0;i<n;i++)
        {
            let input_line = readLine().split(' ');
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[j]);
            }
            grid.push(a);
        }
        
        
        
        let obj = new Solution();
        let ans = obj.countSquares(n, m, grid);
        console.log(ans);
        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} matrix
 * @returns {number}
 */

class Solution {
    // Function to count the number of squares in a given matrix
    countSquares(N, M, matrix) {
        // Create a 2D DP array initialized with 0
        let dp = Array.from({ length: N }, () => Array(M).fill(0));
        
        let cnt = 0; // To keep track of the total count of squares

        // Iterate over the entire matrix
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                // For the first row or first column, directly take the value from the matrix
                if (i == 0 || j == 0) {
                    dp[i][j] = matrix[i][j];
                }
                // If the current element is 0, no square can end here
                else if (matrix[i][j] == 0) {
                    dp[i][j] = 0;
                }
                // If the current element is 1, calculate the maximum square size
                else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                }
                // Add the current square size to the total count
                cnt += dp[i][j];
            }
        }

        // Return the total count of squares
        return cnt;
    }
}
