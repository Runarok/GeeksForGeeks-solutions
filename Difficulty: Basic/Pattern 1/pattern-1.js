//{ Driver Code Starts
//Initial Template
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
        obj.printSquare(N);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} N
 * @returns {null}
 */

class Solution {
    // Function to print square of N
    printSquare(N) {
        // Loop for rows
        for(let i = 0; i < N; i++) {
            // Loop for columns
            for(let j = 0; j < N; j++) {
                // Printing asterisk without new line
                process.stdout.write('* ');
            }
            // Printing new line after each row
            console.log();
        }
    }
}
