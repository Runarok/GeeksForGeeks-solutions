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
    for(; i<t; i++) {
        let [N, M] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.rectNum(N, M);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - Number of rows
 * @param {number} M - Number of columns
 * @returns {number} - Total number of rectangles in an N x M grid modulo 10^9+7
 */

class Solution {
    // Function to calculate the total number of rectangles in a grid.
    rectNum(N, M) {
        const MOD = 1000000007;
        
        // Using the formula: (M * (M + 1) * N * (N + 1)) / 4
        let result = (M * (M + 1) * N * (N + 1)) / 4;
        
        // Returning the result modulo MOD
        return result % MOD;
    }
}
