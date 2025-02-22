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
        let res = obj.jumpingGeek(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to determine if a given number N is a "jumping geek".
 * A "jumping geek" is determined based on the remainder when N is divided by 6.
 * @param {number} N - The input number to check.
 * @returns {string} - Returns "yes" if the number is a jumping geek, otherwise "no".
*/

class Solution {
    // Function to check if N is a "jumping geek" based on modulus with 6
    jumpingGeek(N) {
        // Calculate the remainder of N when divided by 6
        const m = N % 6;

        // If the remainder is 1, 0, or 3, return "yes", otherwise "no"
        return (m == 1 || m == 0 || m == 3) ? "yes" : "no";
    }
}
