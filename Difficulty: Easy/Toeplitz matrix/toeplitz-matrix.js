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

function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let inputArr = readLine().trim().split(" ").map((x) => parseInt(x));

        let [n, m] = inputArr;
        let A = [];
        inputArr = readLine().trim().split(" ").map((x) => parseInt(x));
        for (let j = 0; j < n * m; j += m) {
            let row = [];
            for (let k = 0; k < m; k++) {
                row.push(inputArr[j + k]);
            }
            A.push(row);
        }
        let obj = new Solution();
        let res = obj.isToeplitz(A);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} edges
 * @param {number} N
 * @param {number} M
 * @return {boolean}
 */

class Solution {
    /**
     * Function to check if a matrix is a Toeplitz matrix
     * @param {number[][]} mat - The matrix to check
     * @return {boolean} - Return true if the matrix is Toeplitz, false otherwise
     */
    isToeplitz(mat) {
        const rows = mat.length;
        const cols = mat[0].length;
    
        // Loop through each element, except the last row and last column
        for (let i = 0; i < rows - 1; i++) {
            for (let j = 0; j < cols - 1; j++) {
                // Check if the current element is equal to the element diagonally down-right
                if (mat[i][j] !== mat[i + 1][j + 1]) {
                    return false;  // Return false if not equal
                }
            }
        }
    
        return true;  // Return true if all diagonal elements match
    }

}
