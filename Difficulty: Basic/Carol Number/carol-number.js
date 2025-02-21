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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nthCarol(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to find the nth Carol number.
 * @param {number} n - The position of the Carol number to find
 * @returns {number} - The nth Carol number
 */
class Solution {
    nthCarol(n) {
        // Calculate the nth Carol number using the formula: 4^n - 2^(n+1) - 1
        return 4 ** n - 2 ** (n + 1) - 1;
    }
}
