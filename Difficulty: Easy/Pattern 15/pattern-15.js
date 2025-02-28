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

// User function Template for javascript
/**
 * @param {number} N
 * @returns {void}
 */
class Solution {
    // Function to print the triangle pattern
    printTriangle(N) {
        // Loop through each row
        let endCharCode = N + 65;  // Calculate the last character code
        let endCharCodeofJ = N + 65;
        
        // Loop through the rows
        for (let i = 65; i < endCharCode; i++) {
            let output = '';
            
            // Loop to print the characters in each row
            for (let j = 65; j < endCharCodeofJ; j++) {
                output += String.fromCharCode(j);  // Add character to output string
            }
            
            // Print the current row
            console.log(output);
            
            // Decrease the number of characters for the next row
            endCharCodeofJ = endCharCodeofJ - 1;
        }
    }
}
