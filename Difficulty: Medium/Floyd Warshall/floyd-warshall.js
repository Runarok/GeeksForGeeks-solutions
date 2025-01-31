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
        let N;
        N = parseInt(readLine());
        let matrix = [];
        for (let i = 0; i < N; ++i) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            matrix.push(row);
        }
        let obj = new Solution();
        obj.shortestDistance(matrix);
        for (let i = 0; i < N; i++) {
            let s = "";
            for (let j = 0; j < N; j++) s += matrix[i][j] + " ";
            console.log(s);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function template for javascript
/**
 * @param {number[][]} matrix
 * @returns {number}
 */

class Solution {
    // Function to find the shortest distance matrix
    shortestDistance(matrix) {
        let n = matrix.length;
        let INF = Math.pow(10, 9); // Large number representing infinity

        // Step 1: Replace -1 with INF (except for diagonal elements)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === -1) {
                    matrix[i][j] = INF;
                }
                if (i === j) {
                    matrix[i][j] = 0; // Distance to itself is always 0
                }
            }
        }

        // Step 2: Floyd-Warshall Algorithm
        for (let k = 0; k < n; k++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (matrix[i][k] !== INF && matrix[k][j] !== INF) {
                        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
                    }
                }
            }
        }

        // Step 3: Convert INF values back to -1 (for unreachable paths)
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === INF) {
                    matrix[i][j] = -1;
                }
            }
        }

        return matrix; // Return the updated matrix
    }
}
