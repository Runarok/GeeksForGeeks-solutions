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
        let N = parseInt(readLine());
        let M = parseInt(readLine());
        let mat = new Array(N);
        for (let i = 0; i < N; i++) {
            mat[i] = new Array(M);
            let input_ar2 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < M; j++) {
                mat[i][j] = input_ar2[j];
            }
        }
        let obj = new Solution();
        let res = obj.minRow(mat);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


class Solution {
    /**
     * Function to find the row with the minimum number of 1s in the matrix.
     * 
     * @param {number} n - Number of rows in the matrix
     * @param {number} m - Number of columns in the matrix
     * @param {Array.<Array.<number>>} mat - The matrix
     * @returns {number} - The 1-based index of the row with the minimum number of 1s
     */
    minRow(mat) {
        // Create an array to store the count of 1s in each row
        const arr = mat.map((row, ind) => {
            let count = 0;
            // Count the number of 1s in the current row
            for (const cell of row) {
                if (cell === 1) {
                    count += 1;
                }
            }
            return count;  // Return the count of 1s for the current row
        });

        // Find the minimum number of 1s across all rows
        let result = Math.min(...arr);

        // Find the index of the row with the minimum number of 1s
        result = arr.indexOf(result);

        // Return the 1-based index of the row
        return result + 1;
    }
}
