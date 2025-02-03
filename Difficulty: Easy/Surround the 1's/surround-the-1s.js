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
        
        let matrix = [];
        for(let i=0;i<n;i++)
        {
            let a = readLine().split(' ').map((x) => parseInt(x));
            matrix[i] = a;
        }
        
        let obj = new Solution();
        let ans = obj.Count(matrix);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} matrix
 * @returns {number}
*/

class Solution {
    /**
    * Function to count the number of 1s in the matrix with certain conditions.
    * 
    * @param {number[][]} mat - The 2D matrix.
    * @returns {number} - The count of 1s that have an even number of adjacent 0s.
    */
    valid(r, c, m, n) {
        // Check if the given position is within the bounds of the matrix
        if (r >= 0 && c >= 0 && r < m && c < n) return true;
        return false;
    }

    Count(mat) {
        let row = mat.length;  // Get number of rows in the matrix
        let col = mat[0].length;  // Get number of columns in the matrix
        let ans = 0;  // Variable to hold the count of valid 1s

        // Iterate over every cell in the matrix
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (mat[i][j] === 1) {
                    let cnt = 0;  // Count the adjacent 0s

                    // Check adjacent cells (left, right, top-left, top-right, bottom-left, bottom-right, top, bottom)
                    if (this.valid(i, j - 1, row, col) && mat[i][j - 1] === 0) cnt++;  // Left
                    if (this.valid(i, j + 1, row, col) && mat[i][j + 1] === 0) cnt++;  // Right
                    if (this.valid(i - 1, j - 1, row, col) && mat[i - 1][j - 1] === 0) cnt++;  // Top-left
                    if (this.valid(i - 1, j + 1, row, col) && mat[i - 1][j + 1] === 0) cnt++;  // Top-right
                    if (this.valid(i + 1, j - 1, row, col) && mat[i + 1][j - 1] === 0) cnt++;  // Bottom-left
                    if (this.valid(i + 1, j + 1, row, col) && mat[i + 1][j + 1] === 0) cnt++;  // Bottom-right
                    if (this.valid(i - 1, j, row, col) && mat[i - 1][j] === 0) cnt++;  // Top
                    if (this.valid(i + 1, j, row, col) && mat[i + 1][j] === 0) cnt++;  // Bottom

                    // If the count of adjacent 0s is even, increment the result count
                    if (cnt !== 0 && cnt % 2 === 0) ans++;
                }
            }
        }

        return ans;  // Return the count of valid 1s
    }
}
