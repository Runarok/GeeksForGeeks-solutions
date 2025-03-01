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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.oddGame(N);
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
    // Function to find the winner of the game under the given rules.
    oddGame(N) {
        // Find the largest power of 2 less than or equal to N
        let powerOfTwo = 1;
        
        // Loop to find the largest power of 2 that is less than or equal to N
        while (powerOfTwo * 2 <= N) {
            powerOfTwo *= 2;
        }

        // Return the largest power of 2
        return powerOfTwo;
    }
}
