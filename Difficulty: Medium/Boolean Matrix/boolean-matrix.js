//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);

        // Reading the matrix
        for (let i = 0; i < n; i++) {
            let input_line = readLine().split(' ');
            let a = new Array(m);
            for (let j = 0; j < m; j++) {
                a[j] = parseInt(input_line[j]);
            }
            matrix[i] = a;
        }

        // Create the object and call the method
        let obj = new Solution();
        obj.booleanMatrix(matrix); // No 'new' before method call

        // Printing the modified matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                process.stdout.write(matrix[i][j] + " "); // Output the matrix row-wise
            }
            console.log();
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} matrix
 */
class Solution {
    /**
     * Function to modify the matrix such that if a matrix cell matrix[i][j]
     * is 1 then all the cells in its ith row and jth column will become 1.
     * 
     * @param {number[][]} mat
     */
    booleanMatrix(mat) {
        // Get the number of rows and columns in the matrix
        let rows = mat.length;
        let cols = mat[0].length;
        
        // Arrays to keep track of which rows and columns need to be changed
        let rowMarker = new Array(rows).fill(false);
        let colMarker = new Array(cols).fill(false);
        
        // Traverse through the matrix to find the 1s and mark their rows and columns
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (mat[i][j] === 1) {
                    // Mark the row and column to be updated
                    rowMarker[i] = true;
                    colMarker[j] = true;
                }
            }
        }
        
        // Modify the matrix based on the row and column markers
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // If the row or column is marked, set the cell to 1
                if (rowMarker[i] || colMarker[j]) {
                    mat[i][j] = 1;
                }
            }
        }
    }
}
