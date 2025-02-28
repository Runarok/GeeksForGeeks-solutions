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
        let n = parseInt(readLine());
        let S = readLine();
        let obj = new Solution();
        console.log(obj.cbaSubsequence(S, n))
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} s - The input string.
 * @param {number} n - The length of the input string.
 * @returns {string} - The string after sorting characters in ascending order.
*/

class Solution {
    cbaSubsequence(s, n) {
        // Step 1: Convert string into an array of character codes (ASCII values).
        let charCodeArray = Array.from(s).map(char => char.charCodeAt(0));
        
        // Step 2: Sort the character codes in ascending order.
        charCodeArray.sort((a, b) => a - b);
        
        // Step 3: Convert sorted character codes back to a string.
        return String.fromCharCode(...charCodeArray);
    }
}