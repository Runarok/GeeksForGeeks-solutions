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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let matrix = [];

        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            let a = input_line.slice(0);
            matrix.push(a);
        }

        let obj = new Solution();

        obj.transpose(matrix, n);

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
 * @param {number[][]} mat
 * @param {number} n
 * @returns {number[][]}
 */

class Solution {
    // Function to find transpose of a mat.
    transpose(mat, n) {
        // Loop through the matrix to swap the elements at [i][j] and [j][i]
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                // Swap the elements at (i, j) and (j, i)
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
    }
}
