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
        let Str = readLine().trim();
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.convert(Str,n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} Str
 * @param {number} numRows
 * @returns {string}
 */

class Solution {
    // Function to convert a given string into a zigzag pattern with specified rows.
    convert(s, numRows) {
        if (numRows === 1) return s; // If there's only one row, return the string as is.

        // Initialize an array to store characters for each row.
        const rows = Array(Math.min(numRows, s.length)).fill("");

        let currentRow = 0; // Track the current row index.
        let movingDown = false; // Direction flag to control movement.

        // Iterate through each character in the input string.
        for (let char of s) {
            rows[currentRow] += char; // Append character to the corresponding row.

            // Reverse direction at the first or last row.
            if (currentRow === 0 || currentRow === numRows - 1) {
                movingDown = !movingDown;
            }

            // Move up or down based on the direction flag.
            currentRow += movingDown ? 1 : -1;
        }

        // Join all rows to construct the final transformed string.
        return rows.join("");
    }
}
