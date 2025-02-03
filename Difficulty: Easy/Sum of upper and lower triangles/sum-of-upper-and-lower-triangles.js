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
        let A = new Array(n);
        for(let i=0;i<n;i++)
        {
            let a = new Array(n);
            for(let j=0;j<n;j++)
            {
                a[j] =parseInt(input_line[i*n+j]);
            }
            A[i] = a;
        }
        
        
        let obj = new Solution();
        let ans = obj.sumTriangles(A, n);
        let s = "";
        for(let i=0;i < ans.length; i++)
        {
            if(ans[i]==-0)
                ans[i]=0;
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} N
 * @returns {number[]} 
 */
class Solution {
    // Function to return the sum of upper and lower triangles of the matrix.
    sumTriangles(matrix, size) {
        let upperSum = 0;
        let lowerSum = 0;

        // Loop through each element of the matrix
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (row <= col) {
                    upperSum += matrix[row][col]; // Upper triangular element
                }
                if (row >= col) {
                    lowerSum += matrix[row][col]; // Lower triangular element
                }
            }
        }
        return [upperSum, lowerSum]; // Return both sums
    }
}
