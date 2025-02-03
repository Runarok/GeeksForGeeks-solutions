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
        let n = parseInt(readLine());
        let matrix = [];
        for(let i=0;i<n;i++)
        {
            let input_line = readLine().split(' ').map(x=>parseInt(x));
            matrix.push(input_line);
        }
        let obj = new Solution();
        let res = obj.MissingNo(matrix);
        console.log(res);
        
    
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
    * @param {number[][]} matrix
    * @returns {number}
    */
    MissingNo(matrix) {
        const n = matrix.length; // Get matrix size (n x n)
        const arr = []; // To store row sums without zero
        const arr0 = []; // To store row sums with zero

        // Loop through rows and columns to calculate sums
        for (let i = 0; i < n; i++) {
            const row = [];
            const col = [];
            for (let j = 0; j < n; j++) {
                row.push(matrix[i][j]);
                col.push(matrix[j][i]);
            }

            // If row has no zero, calculate and store sum
            if (row.indexOf(0) === -1) {
                arr.push(row.reduce((acc, val) => acc + val, 0));
            } else {
                arr0.push(row.reduce((acc, val) => acc + val, 0));
            }

            // If column has no zero, calculate and store sum
            if (col.indexOf(0) === -1) {
                arr.push(col.reduce((acc, val) => acc + val, 0));
            } else {
                arr0.push(col.reduce((acc, val) => acc + val, 0));
            }
        }

        // Ensure row sums are consistent
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr[i] !== arr[i + 1]) {
                return -1; // Inconsistent sums
            }
        }

        // Ensure column sums are consistent
        for (let i = 0; i < arr0.length - 2; i++) {
            if (arr0[i] !== arr[i + 1]) {
                return -1; // Inconsistent sums
            }
        }

        // Compare arr and arr0 to ensure no column sum exceeds row sum
        for (const i of arr) {
            for (const j of arr0) {
                if (j >= i) {
                    return -1; // Invalid comparison
                }
            }
        }

        // Check diagonals for consistency with row/column sums
        const d1 = [];
        const d2 = [];
        for (let i = 0; i < n; i++) {
            d1.push(matrix[i][i]); // Main diagonal
            d2.push(matrix[n - i - 1][i]); // Anti-diagonal
        }

        // Validate main diagonal sum
        if (d1.indexOf(0) !== -1) {
            if (d1.reduce((acc, val) => acc + val, 0) !== arr0[0]) {
                return -1; // Invalid diagonal sum
            }
        } else {
            if (d1.reduce((acc, val) => acc + val, 0) !== arr[0]) {
                return -1; // Invalid diagonal sum
            }
        }

        // Validate anti-diagonal sum
        if (d2.indexOf(0) !== -1) {
            if (d2.reduce((acc, val) => acc + val, 0) !== arr0[0]) {
                return -1; // Invalid anti-diagonal sum
            }
        } else {
            if (d2.reduce((acc, val) => acc + val, 0) !== arr[0]) {
                return -1; // Invalid anti-diagonal sum
            }
        }

        // Return the difference between row and column sums
        return arr[0] - arr0[0];
    }
}
