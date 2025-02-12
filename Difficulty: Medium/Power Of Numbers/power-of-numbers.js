//{ Driver Code Starts
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
    let t = parseInt(readLine()); // number of test cases

    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine()); // input N
        let obj = new Solution();
        console.log(obj.ReverseExponentiation(n));
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    // Function to compute the number raised to the power of its reverse
    ReverseExponentiation(n) {
        // Reverse the digits of the number and convert it back to integer
        let reversed = parseInt(n.toString().split('').reverse().join(''), 10);
        
        // Compute n raised to the power of the reversed number
        return Math.pow(n, reversed);
    }
}
