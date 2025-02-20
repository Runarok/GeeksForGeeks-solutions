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
        let a = parseInt(readLine());
        let obj = new Solution();
        obj.utility(a);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    /**
     * Function to check if a number is positive, negative, or zero.
     * @param {number} number - The input number.
     */
    utility(number) {
        // Check if the number is zero
        if (number === 0) {
            console.log("Zero");
        } 
        // Check if the number is positive
        else if (number > 0) {
            console.log("Positive");
        } 
        // If neither zero nor positive, it must be negative
        else {
            console.log("Negative");
        }
    }
}
