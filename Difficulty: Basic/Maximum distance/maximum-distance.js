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
        console.log(obj.maxDist(N));
        
    
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
    // Function to calculate the sum of series 100/1 + 100/2 + ... + 100/N
    maxDist(N) {
        let sum = 0;

        // Loop to compute the sum of the series
        for (let i = 1; i <= N; i++) {
            sum += 100 / i;
        }

        // Return the floor value of the computed sum
        return Math.floor(sum);
    }
}
