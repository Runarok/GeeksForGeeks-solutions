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
        if(obj.isLucky(n)){
            console.log("1");   
        }
        else{
            console.log("0");   
        }
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {number} n - The number to check if it's lucky.
 * @param {number} jump - The current step used for elimination (default is 2).
 * @returns {boolean} - Returns true if the number is lucky, otherwise false.
 */
class Solution {
    
    isLucky(n, jump = 2) {
        // Base case: If n is smaller than the current jump value, it is lucky.
        if (n < jump) {
            return true;
        }
        
        // If n is divisible by the current jump, it is not lucky.
        if (n % jump === 0) {
            return false;
        }
        
        // Recursive call: Reduce n based on the elimination step and increase jump.
        return this.isLucky(n - Math.floor(n / jump), jump + 1);
    }
}
