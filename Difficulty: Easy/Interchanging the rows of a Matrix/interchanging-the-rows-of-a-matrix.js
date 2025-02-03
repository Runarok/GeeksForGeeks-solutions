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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(m);
            for(let j=0;j<m;j++)
            {
                a[j] =parseInt(input_line[i*m+j]);
            }
            matrix[i] = a;
        }
        
        let obj = new Solution();
        obj.interchangeRows(matrix);
        let s = "";
        for(let i = 0 ; i < n ;i++)
        {
            for(let j = 0; j < m; j++)
            {
                s+=matrix[i][j];
                s+=" ";   
            }
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} matrix
*/
class Solution {
    /**
     * Function to interchange the rows of a matrix.
     * 
     * @param {number[][]} matrix - The input matrix
     * @returns {number[][]} - The matrix with rows interchanged
     */
    interchangeRows(matrix) {
        let firstRowIdx = 0, lastRowIdx = matrix.length - 1;
        
        // Swap rows until the first row index is less than the last row index
        while (firstRowIdx < lastRowIdx) {
            // Swap the rows at firstRowIdx and lastRowIdx
            const temp = matrix[firstRowIdx];
            matrix[firstRowIdx] = matrix[lastRowIdx];
            matrix[lastRowIdx] = temp;
            
            // Move the pointers towards the center
            firstRowIdx++;
            lastRowIdx--;
        }
        
        // Return the matrix with rows interchanged
        return matrix;
    }
}
