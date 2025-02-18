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
        let res = obj.checkSquares(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to check if the given number N can be expressed as the sum of two perfect squares.
    checkSquares(N) {
        // Iterate over all numbers from 0 to N
        for (let i = 0; i < N; i++) {
            // Calculate the square root of the remaining value after subtracting i^2 from N
            const root = Math.sqrt(N - i ** 2);
            
            // Check if the root is a whole number (i.e., the remaining value is a perfect square)
            if (root === Math.floor(root)) {
                // If a valid pair of squares is found, return 1
                return 1;
            }
        }
        
        // If no valid pair of squares is found, return 0
        return 0;
    }
}
