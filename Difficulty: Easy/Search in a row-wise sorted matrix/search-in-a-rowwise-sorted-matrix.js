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
        let ans = obj.searchRowMatrix(matrix, X);
        if (ans)
            console.log("true");
        else
            console.log("false");
        console.log("~")
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} x
 * @returns {bool}
 */
class Solution {
    
    // Function to search a given number in row-column sorted matrix.
    searchRowMatrix(mat, x) {
        const cols = mat[0].length - 1;
        const rows = mat.length - 1;

        // Iterate through each row in the matrix
        for (let i = 0; i < mat.length; i++) {
            
            // Check if the last element in the row matches the target
            if (mat[i][cols] === x) {
                return true;
            }
            // If the last element is greater than x, check the elements of the row
            else if (mat[i][cols] > x) {
                for (let j = 0; j <= cols; j++) {
                    if (mat[i][j] === x) {
                        return true;
                    }
                }
            }
        }

        // Return false if the number is not found
        return false;
    }
}
