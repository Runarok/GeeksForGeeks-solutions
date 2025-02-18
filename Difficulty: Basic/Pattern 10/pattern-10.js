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

class Solution {
    /**
     * Function to print a pattern of stars in a triangle shape.
     * The pattern first increases and then decreases in size.
     * 
     * @param {number} n - The height of the triangle (the number of rows for the increasing part).
     * @returns {void}
     */
    printTriangle(n) {
        // Print the increasing part of the triangle
        for (var i = 1; i <= n; i++) {
            console.log("* ".repeat(i)); // Repeat '*' i times for each row
        }

        // Print the decreasing part of the triangle
        for (var i = n - 1; i >= 1; i--) {
            console.log("* ".repeat(i)); // Repeat '*' i times for each row
        }
    }
}
