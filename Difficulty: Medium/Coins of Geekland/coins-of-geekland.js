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
        let arr =[];
        for(let i=0;i<n;i++){
            let brr = new Array(n);
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<n;j++){
                brr[j] = input_ar1[j];
            }
            arr.push(brr);
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.Maximum_Sum(arr, n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to calculate the maximum sum of any K x K sub-grid
    Maximum_Sum(arr, n, k) {
        // Step 1: Create a prefix sum matrix to store cumulative sums
        let prefixSum = Array.from({ length: n }, () => Array(n).fill(0));
        
        // Compute the prefix sum for the entire matrix
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                prefixSum[row][col] = arr[row][col];  // Initialize with the matrix value
                if (row > 0) prefixSum[row][col] += prefixSum[row - 1][col];  // Add the sum from the row above
                if (col > 0) prefixSum[row][col] += prefixSum[row][col - 1];  // Add the sum from the column left
                if (row > 0 && col > 0) prefixSum[row][col] -= prefixSum[row - 1][col - 1];  // Subtract the double-counted top-left corner
            }
        }
        
        let maxSum = -Infinity;  // Initialize the maximum sum to a very small number
        
        // Step 2: Find the maximum sum of any K x K sub-grid using the prefix sum matrix
        for (let row = k - 1; row < n; row++) {
            for (let col = k - 1; col < n; col++) {
                let total = prefixSum[row][col];  // Start with the sum from (0,0) to (row, col)
                
                // Subtract the areas outside the KxK grid
                if (row - k >= 0) total -= prefixSum[row - k][col];  // Subtract the top area
                if (col - k >= 0) total -= prefixSum[row][col - k];  // Subtract the left area
                
                // Add back the top-left corner (double subtracted area)
                if (row - k >= 0 && col - k >= 0) total += prefixSum[row - k][col - k];
                
                // Update the maximum sum encountered
                maxSum = Math.max(maxSum, total);
            }
        }
        
        return maxSum;  // Return the maximum sum found
    }
}
