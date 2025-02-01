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
        let obj = new Solution();
        let res = obj.evaluate_exp(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to evaluate the given expression
    evaluate_exp(n) {
        // If n is even, return 1
        if (n % 2 === 0) return 1;
        
        // If n is odd, return -1
        return -1;
    }
}
