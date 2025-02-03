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
        let M = [];
        
        for(let i=0;i<n;i++){
            let arr = new Array(n);
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<n;j++){
                arr[j] = input_ar1[j];
            }
            M.push(arr);
        }
        let obj = new Solution();
        let res = obj.columnWithMaxZeros(M, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends

class Solution {
    /**
     * Function to find the column with the maximum number of zeros in a given matrix.
     * 
     * @param {number[][]} M - The matrix
     * @param {number} n - The size of the matrix (n x n)
     * @returns {number} - Index of the column with the maximum zeros, or -1 if no zeros are found
     */
    columnWithMaxZeros(M, n) {
        let columnIndex = -1;  // Variable to store the index of the column with maximum zeros
        let maxZeroCount = 0;  // Variable to track the maximum number of zeros in any column
        
        // Iterate over each column in the matrix
        for (let col = 0; col < n; col++) {
            let zeroCount = 0;  // Variable to count zeros in the current column

            // Iterate over each row in the current column
            for (let row = 0; row < n; row++) {
                if (M[row][col] === 0) {
                    zeroCount++;  // Increment zeroCount if the current element is 0
                }
            }

            // Update the column index if the current column has more zeros than previous columns
            if (zeroCount > maxZeroCount) {
                maxZeroCount = zeroCount;
                columnIndex = col;
            }
        }

        // Return -1 if no zeros are found, otherwise return the column index with maximum zeros
        return maxZeroCount === 0 ? -1 : columnIndex;
    }
}
