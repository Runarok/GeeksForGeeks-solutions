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
        let N = parseInt(readLine());
        let A = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.smallestSumSubarray(A, N));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the subarray with the smallest sum.
    smallestSumSubarray(A, N) {
        let minSum = Infinity, currSum = 0;
        
        // Iterate through the array to find the subarray with the smallest sum
        for (let i = 0; i < N; i++) {
            currSum += A[i];  // Add current element to the running sum
            
            // Update minSum if current sum is smaller
            if (currSum < minSum) minSum = currSum;
            
            // If running sum becomes positive, reset it to 0
            // as starting a new subarray would give a smaller sum
            if (currSum > 0) currSum = 0;
        }
        
        return minSum;  // Return the smallest subarray sum found
    }
}
