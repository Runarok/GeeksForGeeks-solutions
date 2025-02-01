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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < m; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix);
        printArray(ans, ans.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number[]}
 */

class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(mat) {
        // Initialize the result array to store the spiral order
        let output = [];
        
        // Get the number of rows (m) and columns (n)
        let m = mat.length;
        let n = mat[0].length;
        
        // Define boundaries for the traversal
        let top = 0, left = 0, right = n - 1, bottom = m - 1;
        
        // Continue traversing as long as the current top-left corner is within the matrix
        while (top <= bottom && left <= right) {
            // Traverse from left to right along the top row
            for (let i = left; i <= right; i++) {
                output.push(mat[top][i]);
            }
            top++; // Move the top boundary down
            
            // Traverse from top to bottom along the right column
            for (let i = top; i <= bottom; i++) {
                output.push(mat[i][right]);
            }
            right--; // Move the right boundary left
            
            // Check if there are remaining rows to traverse
            if (top <= bottom) {
                // Traverse from right to left along the bottom row
                for (let i = right; i >= left; i--) {
                    output.push(mat[bottom][i]);
                }
                bottom--; // Move the bottom boundary up
            }
            
            // Check if there are remaining columns to traverse
            if (left <= right) {
                // Traverse from bottom to top along the left column
                for (let i = bottom; i >= top; i--) {
                    output.push(mat[i][left]);
                }
                left++; // Move the left boundary right
            }
        }
        
        return output; // Return the result array containing spiral traversal
    }
}
