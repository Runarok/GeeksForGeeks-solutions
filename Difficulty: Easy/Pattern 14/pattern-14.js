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


// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @returns {void}
 */

class Solution {
    // Function to print N rows of Pascal's Triangle.
    printTriangle(N) {
        // Initializing the starting character
        let startChar = "A";
        const startCharCode = startChar.charCodeAt(0);

        // Loop through rows of the triangle
        for (let i = 0; i < N; i++) {
            let pattern = '';
            
            // Loop to add characters in each row
            for (let j = 0; j <= i; j++) {
                pattern += String.fromCharCode(startCharCode + j);
            }
            
            // Print the pattern for the current row
            console.log(pattern);
        }
    }
}
