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
    for(; i<t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        obj.printTriangle(N);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @returns {void}
 */

class Solution {
    // Function to print triangle pattern with N lines.
    printTriangle(N) {
        for (let i = N; i > 0; i--) {
            let row = '';
            // Constructing each row with stars and spaces
            for (let j = 1; j <= i; j++) {
                row += '*';
                if (j < i) {
                    row += ' '; // Adding space between stars
                }
            }
            console.log(row);
        }
    }
}
