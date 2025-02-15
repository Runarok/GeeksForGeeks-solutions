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
    // Function to print a pattern triangle using N as the parameter.
    printTriangle(N) {
        let patternArray = []; // Array to store pattern elements

        for (let i = 0; i < N; i++) {
            // Check the first element of the array to determine what to add next
            if (patternArray.length === 0 || patternArray[0] === 0) {
                patternArray.unshift(1); // Add 1 at the beginning
            } else {
                patternArray.unshift(0); // Add 0 at the beginning
            }

            // Print the current pattern as a space-separated string
            console.log(patternArray.join(" "));
        }
    }
}
