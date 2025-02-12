//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine()), M = parseInt(readLine());
        let obj = new Solution();
        let res = obj.closestNumber(N, M);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The given number
 * @param {number} m - The multiple to find the closest number to
 * @return {number} - The closest multiple of m to n
 */

class Solution {
    closestNumber(n, m) {
        // Find the closest lower or equal multiple of m
        let lowerMultiple = Math.floor(n / m) * m;
        
        // Find the closest higher multiple of m
        let higherMultiple = lowerMultiple + m;

        // Determine which multiple is closer to n
        if (Math.abs(n - lowerMultiple) < Math.abs(n - higherMultiple)) {
            return lowerMultiple;
        } else if (Math.abs(n - lowerMultiple) > Math.abs(n - higherMultiple)) {
            return higherMultiple;
        } else {
            // If both are equally distant, return the one with the greater absolute value
            return (Math.abs(lowerMultiple) > Math.abs(higherMultiple)) ? lowerMultiple : higherMultiple;
        }
    }
}
