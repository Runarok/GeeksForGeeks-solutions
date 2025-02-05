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
        
        let A = new Array(n);
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            A[i] = parseInt(input_line[i]);
        }
        
        input_line = readLine().split(' ');
        let B = new Array(n);
        for(let i=0;i<n;i++)
        {
            B[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        
        let ans = obj.MaxSum(A, B, n);
        
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to find the maximum sum without selecting adjacent elements.
     * This function matches elements from two arrays A and B, computes a sum by multiplying 
     * the largest elements from both arrays, and returns the result.
     * 
     * @param {number[]} A - First array of integers
     * @param {number[]} B - Second array of integers
     * @param {number} N - Size of the arrays (both arrays are of size N)
     * @returns {number} - The maximum sum of products of corresponding elements
     */
    MaxSum(A, B, N) {
        // Sort both arrays in ascending order
        A.sort((a, b) => a - b);
        B.sort((a, b) => a - b);
        
        let sum = 0;  // Variable to hold the sum of products
        
        // While both arrays have elements, pop the largest element from each and add the product to sum
        while (A.length && B.length) {
            sum += A.pop() * B.pop();  // Multiply the largest elements from A and B
        }
        
        return sum;  // Return the final sum of products
    }
}
