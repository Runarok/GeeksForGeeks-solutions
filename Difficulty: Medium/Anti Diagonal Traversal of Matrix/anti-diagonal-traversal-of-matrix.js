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
/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(n);
            for(let j=0;j<n;j++)
            {
                a[j] =parseInt(input_line[i*n+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        let res = obj.antiDiagonalPattern(matrix, n);
        printArray(res, res.length);
    
console.log("~");
}
}
// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {number[][]} matrix
 * @param {number} n
 * @returns {number[]}
 */
class Solution {
    
    antiDiagonalPattern(matrix, n) {
        let result = [];

        // Traverse through all possible diagonals
        for (let diag = 0; diag < 2 * n - 1; diag++) {
            for (let row = 0; row < n; row++) {
                let col = diag - row;
                
                // Check if the column index is within bounds
                if (col >= 0 && col < n) {
                    result.push(matrix[row][col]);
                }
            }
        }

        return result;
    }
}
