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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getCount(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    constructor() {
        this.dp = null;
    }

    // Helper function for the recursive calculation
    helper(n, mat, i, j, dp) {
        // Base case: out of bounds or blocked cell
        if (i < 0 || j < 0 || i > 3 || j >= 3 || mat[i][j] === -1) {
            return 0;
        }
        // Base case: if n == 1, the current cell is a valid ending point
        if (n === 1) return 1;

        // If already calculated, return the result from dp
        if (dp[i][j][n] !== null) {
            return dp[i][j][n];
        }

        // Recursive calculation by exploring all possible directions
        dp[i][j][n] = this.helper(n - 1, mat, i, j, dp) 
                     + this.helper(n - 1, mat, i - 1, j, dp) 
                     + this.helper(n - 1, mat, i, j - 1, dp) 
                     + this.helper(n - 1, mat, i + 1, j, dp) 
                     + this.helper(n - 1, mat, i, j + 1, dp);

        return dp[i][j][n];
    }

    // Function to get the total number of paths of length n
    getCount(n) {
        // Initialize the matrix with values from 1 to 9
        let mat = Array.from({ length: 4 }, () => Array(3).fill(0));
        let k = 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                mat[i][j] = k++;
            }
        }

        // Set the values of the last row as specified
        mat[3][0] = -1;
        mat[3][1] = 0;
        mat[3][2] = -1;

        // Total number of valid paths
        let tot = 0;

        // Initialize a 3D dp array with null values
        this.dp = Array.from({ length: 4 }, () => 
                    Array.from({ length: 3 }, () => Array(n + 1).fill(null)));

        // Calculate the total valid paths by iterating through all cells
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (mat[i][j] !== -1) {
                    tot += this.helper(n, mat, i, j, this.dp);
                }
            }
        }

        return tot;
    }
}
