//{ Driver Code Starts
// Initial Template for javascript
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
        let a = new Array(n);
        for(let i=0;i<n;i++)
        {
            a[i] = new Array(m);
            let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<m;j++){
                a[i][j] = input_ar2[j];
            }
        }
        let obj = new Solution();
        let res = obj.findK(a, n, m, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
*/


class Solution {
    // Function to find the kth element in the spiral order of a matrix.
    findK(a, n, m, k) {
        let top = 0, left = 0;
        let bottom = n - 1;
        let right = m - 1;
        let res = [];
        
        // Traverse the matrix in spiral order
        while (top <= bottom && left <= right) {
            // Traverse from left to right along the top row
            for (let i = left; i <= right; i++) {
                res.push(a[top][i]);
            }
            top++;  // Move the top boundary down
            
            // Traverse from top to bottom along the right column
            for (let i = top; i <= bottom; i++) {
                res.push(a[i][right]);
            }
            right--;  // Move the right boundary left
            
            // If there are still rows left, traverse from right to left along the bottom row
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    res.push(a[bottom][i]);
                }
                bottom--;  // Move the bottom boundary up
            }
            
            // If there are still columns left, traverse from bottom to top along the left column
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    res.push(a[i][left]);
                }
                left++;  // Move the left boundary right
            }
        }
        
        // Return the kth element (1-based index)
        return res[k - 1];
    }
}
