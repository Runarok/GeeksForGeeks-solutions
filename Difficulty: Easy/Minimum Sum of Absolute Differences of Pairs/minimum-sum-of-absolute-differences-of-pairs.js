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
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr1 = new Array(n);
        let arr2 = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr1[i] = input_ar1[i];
        for(let i=0;i<n;i++)
            arr2[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.findMinSum(arr1, arr2, n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} N
 * @returns {number}
 */

class Solution
{
    // Function to find the minimum sum of absolute differences between corresponding elements
    findMinSum(A, B, N)
    {
        // Sort both arrays in ascending order to minimize the absolute differences
        A.sort((a, b) => a - b);
        B.sort((a, b) => a - b);

        // Initialize the sum variable to store the result
        let sum = 0;

        // Iterate through the arrays and calculate the sum of absolute differences
        for (let i = 0; i < N; i++) {
            sum += Math.abs(A[i] - B[i]);  // Add the absolute difference between corresponding elements
        }

        // Return the calculated sum
        return sum;
    }
}
