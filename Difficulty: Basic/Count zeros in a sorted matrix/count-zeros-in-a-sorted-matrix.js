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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let mat = [];
        for(let j = 0;j<n*n;j+=n){
            let row = [];
            for(let k=0;k<n;k++){
                row.push(arr[j+k]);
            }
            mat.push(row);
        }
        let obj = new Solution();
        let res=obj.countZeros(mat,n);
        console.log(res);
    
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} A - 2D square matrix of size N x N
 * @param {number} N - Size of the matrix
 * @return {number} - Count of zeros in the matrix
 */

class Solution {
    countZeros(A, N) {
        let zeroCount = 0; // Variable to store the count of zeros
        let row = 0, col = N - 1; // Start from the top-right corner of the matrix

        // Traverse the matrix diagonally from the top-right to bottom-left
        while (row < N && col >= 0) {
            if (A[row][col] === 0) {
                // If the current element is zero, all elements before it in the row are also zero
                zeroCount += col + 1;
                row++; // Move to the next row
            } else {
                col--; // Move left in the current row
            }
        }
        
        return zeroCount; // Return the total count of zeros
    }
}
