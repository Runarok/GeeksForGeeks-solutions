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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
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
        let grid = new Array();
        for (let i = 0; i < n; i++) {
            let s2 = readLine().split(" ").map(x => parseInt(x));
            let a = new Array();
            for (let j = 0; j < m; j++) {
                a.push(s2[j]);
            }
            grid.push(a);
        }
        let obj = new Solution();
        obj.setMatrixZeroes(grid);
        let res = new Array();
        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < m; j++) {
                s += grid[i][j];
                s += " ";
            }
            res.push(s);
        }
        console.log(res.join("\n"));
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    /**
     * @param {number[][]} mat
     * @returns {number[][]}
     */
    setMatrixZeroes(mat) {
        // Flag to track if the first row needs to be zeroed
        let refRow = 0;
        // Flag to track if the first column needs to be zeroed
        let refCol = 0;
        
        // Check if the first row contains any zeros
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[0][j] == 0) {
                refRow = 1;
                break;
            }
        }
        
        // Check if the first column contains any zeros
        for (let i = 0; i < mat.length; i++) {
            if (mat[i][0] == 0) {
                refCol = 1;
                break;
            }
        }
        
        // Mark the rows and columns that need to be zeroed using the first row and column
        for (let i = 1; i < mat.length; i++) {
            for (let j = 1; j < mat[0].length; j++) {
                if (mat[i][j] == 0) {
                    mat[0][j] = 0;  // Mark the column
                    mat[i][0] = 0;  // Mark the row
                }
            }
        }
        
        // Zero out the cells based on the flags in the first row and column
        for (let i = 1; i < mat.length; i++) {
            for (let j = 1; j < mat[0].length; j++) {
                if (mat[0][j] == 0 || mat[i][0] == 0) {
                    mat[i][j] = 0;
                }
            }
        }
        
        // Zero out the first row if needed
        if (refRow) {
            for (let j = 0; j < mat[0].length; j++) {
                mat[0][j] = 0;
            }
        }
        
        // Zero out the first column if needed
        if (refCol) {
            for (let i = 0; i < mat.length; i++) {
                mat[i][0] = 0;
            }
        }
        
        // Return the modified matrix
        return mat;
    }
}
