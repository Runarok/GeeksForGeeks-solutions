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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let mat = [];
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let k=0;
        for(let i=0;i<n;i++){
            let b = [];
            for(let j=0;j<m;j++){
                b.push(input_ar1[k++]);
            }
            mat.push(b);
        }
        let obj = new Solution();
        let res = obj.maxOnes(mat, n, m);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    /**
     * Function to find the row with the maximum number of 1s.
     * @param {number[][]} mat - The matrix representing the binary values.
     * @param {number} n - The number of rows in the matrix.
     * @param {number} m - The number of columns in the matrix.
     * @returns {number} - The index of the row with the maximum number of 1s, or -1 if no 1 is found.
     */
    maxOnes(mat, n, m){
        // Traverse each column
        for (let i = 0; i < m; i++) {
            // Traverse each row in the current column
            for (let j = 0; j < n; j++) {
                // If a 1 is found in the current cell, return the row index
                if (mat[j][i] === 1) {
                    return j;
                }
            }
        }
        // If no 1 is found in the matrix, return -1
        return -1;
    }
}
