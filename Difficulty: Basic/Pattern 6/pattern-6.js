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
    // Function to print the pattern.
    printTriangle(n) {
        // Loop through each row
        for (let i = 0; i < n; i++) {
            // Loop to print numbers in each row
            for (let j = 0; j <= (n - i - 1); j++) {
                process.stdout.write(`${j + 1} `);
            }
            // Move to the next line after printing each row
            console.log("");
        }
    }
}
