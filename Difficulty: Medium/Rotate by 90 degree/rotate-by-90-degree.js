//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());
        let mat = [];
        for (let i = 0; i < n; i++) {
            let row = readLine().split(" ").map((x) => parseInt(x));
            mat.push(row);
        }

        let obj = new Solution();
        obj.rotate(mat);

        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < n; j++) {
                s = s + mat[i][j] + " ";
            }
            console.log(s);
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
    rotate(mat) {
        // Get the number of rows and columns in the matrix
        const rows = mat.length;
        const cols = mat[0].length;
        
        // Transpose the matrix: convert rows to columns
        for (let row = 0; row < rows; row++) {
            for (let col = row + 1; col < cols; col++) {
                // Swap the elements at position (row, col) and (col, row)
                [mat[row][col], mat[col][row]] = [mat[col][row], mat[row][col]]; 
            }
        }
        
        // Reverse each row of the matrix
        for (let row = 0; row < rows; row++) {
            mat[row].reverse();
        }

        // Return the rotated matrix
        return mat;
    }
}
