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
        let R = parseInt(readLine());
        let C = parseInt(readLine());
        let matrix = new Array(R);
        for (let j = 0; j < R; j++) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            matrix[j] = new Array(C);
            for (let y = 0; y < C; y++) {
                matrix[j][y] = row[y];
            }
        }
        let obj = new Solution();
        let res = obj.median(matrix);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} matrix
 * @param {number} R
 * @param {number} C
 * @returns {number}
 */

class Solution {
    // Function to find median of the matrix.
    median(mat) {
        const R = mat.length;  // Number of rows
        const C = mat[0].length;  // Number of columns

        let minVal = Infinity, maxVal = -Infinity;
        
        // Find the global minimum and maximum values in the matrix
        for (let i = 0; i < R; i++) {
            minVal = Math.min(minVal, mat[i][0]);
            maxVal = Math.max(maxVal, mat[i][C - 1]);
        }

        const target = Math.floor((R * C) / 2);

        while (minVal < maxVal) {
            const midVal = Math.floor((minVal + maxVal) / 2);
            let count = 0;

            // Count how many numbers in the matrix are <= midVal
            for (let i = 0; i < R; i++) {
                let left = 0, right = C - 1;
                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);
                    if (mat[i][mid] <= midVal) {
                        left = mid + 1;  // Move left pointer to find more elements <= midVal
                    } else {
                        right = mid - 1;  // Move right pointer to avoid larger elements
                    }
                }
                count += left;  // left is the count of elements <= midVal in the row
            }

            // If count <= target, move minVal to midVal + 1
            // Otherwise, move maxVal to midVal
            if (count <= target) {
                minVal = midVal + 1;
            } else {
                maxVal = midVal;
            }
        }

        // When minVal == maxVal, we have found the median
        return minVal;
    }
}
