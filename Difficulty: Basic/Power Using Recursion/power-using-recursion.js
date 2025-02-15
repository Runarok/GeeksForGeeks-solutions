//{ Driver Code Starts
//Initial Template for javascript

//Initial Template for javascript

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
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar[0];
        let p = input_ar[1];
        let obj = new Solution();
        console.log(obj.RecursivePower(n,p));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The base number
 * @param {number} p - The exponent
 * @returns {number} - The result of n raised to the power of p
 */
class Solution {
  
    RecursivePower(n, p) {
        // Base case: any number raised to the power of 0 is 1
        if (p === 0) return 1;
        
        // Recursive case: multiply base 'n' with the result of the function called with reduced exponent
        return n * this.RecursivePower(n, p - 1);
    }
}
