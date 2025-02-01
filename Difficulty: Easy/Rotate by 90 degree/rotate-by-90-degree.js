//{ Driver Code Starts
// Initial Template for javascript
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
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < n; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }

        let obj = new Solution();
        obj.rotateby90(matrix);

        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < n; j++) {
                s += matrix[i][j];
                s += " ";
            }
            console.log(s);
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[][]} matrix - The input 2D array (matrix) to be rotated
 */
class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(mat) {
        let n = mat.length; // Get the size of the matrix (assuming it's a square matrix)

        // Step 1: Transpose the matrix
        for (let i = 0; i < n; i++) {
            // Iterate over the upper triangle of the matrix (including the diagonal)
            for (let j = i; j < n; j++) {
                // Swap elements across the diagonal
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];  
            }
        }
        
        // Step 2: Reverse the columns
        for (let j = 0; j < n; j++) {
            // For each column, reverse the order of elements
            for (let i = 0; i < Math.floor(n / 2); i++) {
                // Swap elements from top and bottom of the column
                [mat[i][j], mat[n - 1 - i][j]] = [mat[n - 1 - i][j], mat[i][j]];
            }
        }
        
        // Return the rotated matrix
        return mat;
    }
}
