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


class Solution {
    /**
     * Function to print a pattern using uppercase letters.
     * Each row contains the same letter repeated, with the letter corresponding to the row number.
     * @param {number} N - The number of rows in the pattern.
     */
    printTriangle(N) {
        // Loop through each row from 1 to N
        for (let i = 1; i <= N; i++) {
            let row = '';  // Initialize an empty string for each row
            // Append the letter corresponding to row i, i times
            for (let j = 1; j <= i; j++) {
                row += String.fromCharCode(64 + i);  // Get the character from ASCII (A=65, B=66, ...)
            }
            console.log(row);  // Print the row
        }
    }
}
