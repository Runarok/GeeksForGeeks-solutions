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
        let N =  parseInt(readLine());
        let K =  parseInt(readLine());
        let A =  readLine().split(' ').map(x=>parseInt(x)
);
        let obj = new Solution();
        let res = obj.totalCuts(N, K, A);
        console.log(res);
    
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N - The size of the array A
 * @param {number} K - The minimum required sum for the cut to be valid
 * @param {number[]} A - The array of integers
 * @returns {number} - The total number of valid cuts
 */
class Solution {
    totalCuts(N, K, A) {
        // Initialize two arrays to store the maximum values from the left and the minimum values from the right
        let leftMax = Array(N).fill(0), rightMin = Array(N).fill(0), cuts = 0;
        
        // Populate the leftMax array where each element at index i holds the maximum value from A[0] to A[i]
        leftMax[0] = A[0];
        for (let i = 1; i < N; i++) 
            leftMax[i] = Math.max(leftMax[i - 1], A[i]);
        
        // Populate the rightMin array where each element at index i holds the minimum value from A[i] to A[N-1]
        rightMin[N - 1] = A[N - 1];
        for (let i = N - 2; i >= 0; i--) 
            rightMin[i] = Math.min(rightMin[i + 1], A[i]);
        
        // Count the number of valid cuts where the sum of leftMax[i] and rightMin[i+1] is greater than or equal to K
        for (let i = 0; i < N - 1; i++) 
            if (leftMax[i] + rightMin[i + 1] >= K) cuts++;
        
        return cuts;  // Return the total number of valid cuts
    }
}
