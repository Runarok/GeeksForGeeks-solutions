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
        let ans = obj.determinantOfMatrix(matrix, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[][]} matrix
 * @param {number} n
 * @returns {number}
*/
class Solution 
{
    //Function for finding determinant of matrix.
    determinantOfMatrix(matrix, n)
    {
        if(n === 1) {
            return matrix[0][0];
        }
        // code here
        if(n === 2) {
            return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];
        }
        
        let mat = [];
        let res = 0;
         mat[0] = [];
        for (let col = 0; col < n; col++) {
            
            for (let i = 1; i < n; i++) {
                mat[i - 1] = [];
                for (let j = 0; j < n; j++) {
                    mat[i - 1][j > col ? j -1: j] = matrix[i][j];
                }
            }
            
            if(col % 2 === 0) {
                res += matrix[0][col]*(this.determinantOfMatrix(mat, n - 1))
            } else {
                res -= matrix[0][col]*(this.determinantOfMatrix(mat, n - 1))
            }
        }
        return res;
    }
}