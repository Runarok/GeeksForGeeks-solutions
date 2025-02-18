//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((string) => {
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
    for (; i < t; i++) {
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.MaximumIntegerValue(str);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    // Function to find the maximum integer value possible by inserting one '*' in the given string.
    MaximumIntegerValue(S) {
        let result = null; // Stores the cumulative result of operations

        for (let char of S) {
            if (result === null) {
                result = parseInt(char); // Initialize result with the first character
            } else {
                let addition = result + parseInt(char); // Compute sum
                let multiplication = result * parseInt(char); // Compute product
                
                // Choose the operation that yields the maximum value
                result = Math.max(addition, multiplication);
            }
        }

        return result;
    }
}
