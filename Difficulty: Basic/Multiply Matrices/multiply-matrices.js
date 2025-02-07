//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let b = new Array(n);
        let k=0;
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let temp = new Array(n);
            for(let j=0;j<n;j++){
                temp[j] = input_ar1[k];
                k++;
            }
            a[i] = temp;
        }
        k=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let temp = new Array(n);
            for(let j=0;j<n;j++){
                temp[j] = input_ar1[k];
                k++;
            }
            b[i] = temp;
        }
        let obj = new Solution();
        obj.multiply(a, b, n);
        
    }
}// } Driver Code Ends



// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {number[][]} a - First matrix
 * @param {number[][]} b - Second matrix
 * @param {number} n - Size of the matrices (n x n)
 * @returns {number[][]} - Resultant matrix after multiplication
 */
class Solution {
    multiply(a, b, n) {
        // Get the next power of two greater than or equal to n
        const N = getNextPowerOfTwo(n);

        // If the matrix size is not a power of two, pad it with zeros
        if (N !== n) {
            a = padMatrix(a, N, 0);
            b = padMatrix(b, N, 0);
        }

        // Perform recursive matrix multiplication
        const resultMatrix = shrinkMatrix(recMatMult(a, b), n);

        // Print the result matrix as a space-separated string
        console.log(arrayToString(resultMatrix));

        return resultMatrix;
    }
}

/**
 * Performs recursive matrix multiplication using divide and conquer.
 * @param {number[][]} X - First matrix
 * @param {number[][]} Y - Second matrix
 * @returns {number[][]} - Resultant matrix after multiplication
 */
const recMatMult = (X, Y) => {
    // Base case: If the matrix is of size 1x1, return the multiplication result
    if (X.length === 1) {
        return [[X[0][0] * Y[0][0]]];
    }

    const mid = Math.ceil(X.length / 2);

    // Divide matrices into quadrants
    const A = X.slice(0, mid).map(row => row.slice(0, mid));
    const B = X.slice(0, mid).map(row => row.slice(mid));
    const C = X.slice(mid).map(row => row.slice(0, mid));
    const D = X.slice(mid).map(row => row.slice(mid));

    const E = Y.slice(0, mid).map(row => row.slice(0, mid));
    const F = Y.slice(0, mid).map(row => row.slice(mid));
    const G = Y.slice(mid).map(row => row.slice(0, mid));
    const H = Y.slice(mid).map(row => row.slice(mid));

    // Compute sub-matrices recursively
    const AE = recMatMult(A, E);
    const BG = recMatMult(B, G);
    const AF = recMatMult(A, F);
    const BH = recMatMult(B, H);
    const CE = recMatMult(C, E);
    const DG = recMatMult(D, G);
    const CF = recMatMult(C, F);
    const DH = recMatMult(D, H);

    // Combine results
    const topLeft = matrixAddition(AE, BG);
    const topRight = matrixAddition(AF, BH);
    const bottomLeft = matrixAddition(CE, DG);
    const bottomRight = matrixAddition(CF, DH);

    // Construct final matrix by merging quadrants
    return topLeft.map((row, i) => row.concat(topRight[i]))
        .concat(bottomLeft.map((row, i) => row.concat(bottomRight[i])));
};

/**
 * Adds two matrices element-wise.
 * @param {number[][]} X - First matrix
 * @param {number[][]} Y - Second matrix
 * @returns {number[][]} - Resultant matrix after addition
 */
const matrixAddition = (X, Y) => {
    return X.map((row, i) => row.map((value, j) => value + Y[i][j]));
};

/**
 * Converts a 2D matrix into a space-separated string.
 * @param {number[][]} arr - Matrix to convert
 * @returns {string} - String representation of the matrix
 */
const arrayToString = (arr) => arr.flat().join(' ');

/**
 * Pads a matrix to a larger size with a given padding value.
 * @param {number[][]} matrix - Matrix to be padded
 * @param {number} targetSize - New size of the matrix
 * @param {number} padValue - Value to use for padding
 * @returns {number[][]} - Padded matrix
 */
const padMatrix = (matrix, targetSize, padValue) => {
    const extraCols = Array(targetSize - matrix.length).fill(padValue);
    const fullRow = Array(targetSize).fill(padValue);
    const extraRows = Array(targetSize - matrix.length).fill(fullRow);

    return matrix.map(row => row.concat(extraCols)).concat(extraRows);
};

/**
 * Shrinks a matrix back to the required size.
 * @param {number[][]} matrix - Padded matrix
 * @param {number} targetSize - Desired matrix size
 * @returns {number[][]} - Shrunk matrix
 */
const shrinkMatrix = (matrix, targetSize) => {
    return matrix.slice(0, targetSize).map(row => row.slice(0, targetSize));
};

/**
 * Finds the next power of two greater than or equal to a given number.
 * @param {number} n - Input number
 * @returns {number} - Next power of two
 */
const getNextPowerOfTwo = (n) => Math.pow(2, Math.ceil(Math.log2(n)));
