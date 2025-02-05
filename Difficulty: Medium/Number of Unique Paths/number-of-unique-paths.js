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
        let a = parseInt(input_line[0]);
        
        let b = parseInt(input_line[1]);
    
        
        let obj = new Solution();
        let ans = obj.NumberOfPath(a, b);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} a (number of rows in the grid)
 * @param {number} b (number of columns in the grid)
 * @returns {number} (total number of unique paths from top-left to bottom-right)
*/

class Solution 
{
    // Function to find the total number of unique paths in a grid.
    NumberOfPath(a, b)
    {
        // Create a 1D array to store the number of ways to reach each column in the first row.
        let dp = new Array(b + 1).fill(1);  // Initially, all paths are set to 1.
        dp[0] = 0; // No valid path for the 0th column.

        // Start iterating from row 2 (i = 2) and column 2 (j = 2) since the first row and column are initialized.
        for (let i = 2; i <= a; i++) {
            for (let j = 2; j <= b; j++) {
                // Each cell's value is the sum of the value from the cell to the left and the cell above it.
                dp[j] += dp[j - 1];
            }
        }

        // The value in dp[b] will be the total number of unique paths to the bottom-right corner.
        return dp[b];
    }
}
