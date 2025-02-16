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
        let [N,X] = readLine().trim().split(" ").map((x)=>parseInt(x));
        let A = readLine().trim().split(" ").map((x)=>parseInt(x));
        let obj = new Solution();
        let res = obj.factorOrMultiple(N,X,A);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} N - Size of the array
 * @param {number} X - Divisor/multiple to check against
 * @param {number[]} A - Input array
 * @returns {number}
 */

class Solution {
    // Function to find the smallest divisor or multiple
    factorOrMultiple(N, X, A) {
        // Variable to store the result using bitwise OR operation
        let result = 0;

        // Loop through the array to find elements that are multiples of X
        for (let i = 0; i < N; i++) {
            // If the current element is a multiple of X
            if (A[i] % X === 0) {
                // Perform bitwise OR operation with result
                result |= A[i];
            }
        }

        // Return the final computed result
        return result;
    }
}
