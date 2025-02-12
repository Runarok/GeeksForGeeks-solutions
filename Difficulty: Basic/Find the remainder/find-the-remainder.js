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
        let N = readLine();
        let obj = new Solution();
        let res = obj.findRemainder(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to find remainder when N is divided by 7
    findRemainder(N) {
        // Convert N to BigInt to handle large numbers, perform modulo operation, and return as string
        return (BigInt(N) % 7n).toString();
    }
}
