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
        let [X,Y,P] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.findValue(X, Y, P);;
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} X
 * @param {number} Y
 * @param {number} P
 * @returns {number}
 */

class Solution {
    // Function to find value of P such that each point (X, Y) is divisible by P or a multiple of P.
    findValue(X, Y, P) {
        // If P is odd, double the value of X
        if (P % 2 !== 0) {
            X = 2 * X;
        }

        // Return the integer division of the maximum value by the minimum value
        return Math.floor(Math.max(X, Y) / Math.min(X, Y));
    }
}
