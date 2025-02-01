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
        let X = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.matSearch(matrix, X);
        if (ans)
            console.log("true");
        else
            console.log("false");
        console.log("~")
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} mat - 2D matrix
 * @param {number} x - Target element to search
 * @returns {boolean} - Returns true if found, otherwise false
 */
class Solution {
    matSearch(mat, x) {
        let n = mat.length; // Number of rows
        let m = mat[0].length; // Number of columns

        let i = 0; // Start row index
        let j = m - 1; // Start from the last column of the first row

        // Traverse the matrix
        while (i < n && j >= 0) {
            if (x < mat[i][j]) {
                // Move left if target is smaller than the current element
                j--;
            } else if (x > mat[i][j]) {
                // Move down if target is greater than the current element
                i++;
            } else {
                // Found the target element
                return true;
            }
        }

        return false; // Target not found
    }
}
