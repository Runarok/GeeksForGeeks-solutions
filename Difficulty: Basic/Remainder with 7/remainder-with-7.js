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
        let n = readLine().trim();
        let obj = new Solution();
        let res=obj.remainderWith7(n);
        console.log(res);
    
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} n - Large number as a string
 * @return {number} - Remainder when divided by 7
 */

class Solution {
    remainderWith7(n) {
        // Initialize remainder to 0
        let remainder = 0;
        
        // Iterate through each digit of the number
        for (let i = 0; i < n.length; i++) {
            // Convert character to integer and update remainder
            remainder = (remainder * 10 + parseInt(n[i])) % 7;
        }
        
        // Return the computed remainder
        return remainder;
    }
}
