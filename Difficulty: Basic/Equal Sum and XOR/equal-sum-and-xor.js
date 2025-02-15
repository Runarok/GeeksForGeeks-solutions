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
        let res = obj.countValues(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @return {number} 
 */

class Solution {
    // Function to count values that satisfy the given condition
    countValues(n) {
        let count = 0;
        
        for (let i = 0; i <= n; i++) {
            if ((n + i) === (n ^ i)) {
                count++;
            }
        }
        
        return count;
    }
}
