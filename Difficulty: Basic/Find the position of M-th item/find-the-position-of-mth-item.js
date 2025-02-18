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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar0[0];
        let M = input_ar0[1];
        let K = input_ar0[2];
        let obj = new Solution();
        console.log(obj.findPosition(N, M, K));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @param {number} M
 * @param {number} K
 * @returns {number}
 */

class Solution {
    // Function to find the position of person when a person
    // moves in clockwise and anticlockwise direction alternately.
    findPosition(N, M, K) {
        // If N, M, and K are all equal, the position is 1
        if (N == M && M == K) return 1;

        // Calculate the position after moving M steps and starting from K
        let a = (M % N + K - 1) % N;

        // If the calculated position is 0, it means we are at the last position (N)
        return a == 0 ? N : a;
    }
}
