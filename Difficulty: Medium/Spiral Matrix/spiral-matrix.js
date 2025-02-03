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
        let k = input_ar1[2];
        let arr = [];
        let p=0;
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            let temp = [];
            for(let j=0;j<m;j++){
                temp.push(input_ar1[p++]);
            }
            arr.push(temp);
        }
        let obj = new Solution();
        let res = obj.findK(arr, n, m, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} a
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
*/

class Solution {
    /**
     * Function to find the k-th element in the spiral order traversal of a matrix.
     * 
     * @param {number[][]} a - The matrix
     * @param {number} n - Number of rows in the matrix
     * @param {number} m - Number of columns in the matrix
     * @param {number} k - The k-th position in the spiral order
     * @returns {number} - The k-th element in the spiral order
     */
    findK(a, n, m, k) {
        // Initialize boundary pointers
        let rowStart = 0;
        let rowEnd = n - 1;
        let colStart = 0;
        let colEnd = m - 1;
        let ans = [];
        
        // Traverse the matrix in spiral order
        while (rowStart <= rowEnd && colStart <= colEnd) {
            
            // Traverse from left to right along the top row
            for (let i = colStart; i <= colEnd; i++) {
                ans.push(a[rowStart][i]);
            }
            rowStart++;
            
            // Traverse from top to bottom along the rightmost column
            for (let i = rowStart; i <= rowEnd; i++) {
                ans.push(a[i][colEnd]);
            }
            colEnd--;
            
            // Traverse from right to left along the bottom row (if still within bounds)
            if (rowStart <= rowEnd) {
                for (let i = colEnd; i >= colStart; i--) {
                    ans.push(a[rowEnd][i]);
                }
                rowEnd--;
            }
            
            // Traverse from bottom to top along the leftmost column (if still within bounds)
            if (colStart <= colEnd) {
                for (let i = rowEnd; i >= rowStart; i--) {
                    ans.push(a[i][colStart]);
                }
                colStart++;
            }
        }
        
        // Return the k-th element in the spiral order (k is 1-based, so we subtract 1)
        return ans[k - 1];
    }
}
