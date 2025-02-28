//{ Driver Code Starts
// Initial Template for javascript

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

class Solution {
    /**
     * Function to print a triangle pattern.
     * Each row will contain the row number printed multiple times.
     * @param {number} N - The number of rows in the pattern.
     */
    printTriangle(N) {
        // Loop through each row from 1 to N
        for (let i = 1; i <= N; i++) {
            let step = "";  // Initialize an empty string for each row
            // Append the row number i, i times to the string
            for (let j = 1; j <= i; j++) {
                step += i + " ";  // Add the number followed by a space
            }
            console.log(step);  // Print the row
        }
    }
}
