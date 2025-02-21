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
        let res = obj.isPowerOfFour(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to check if a number is a power of four
 * @param {number} N - The number to check
 * @return {number} - Returns 1 if N is a power of four, otherwise returns 0
 */
class Solution {

    isPowerOfFour(N) {
        
        // If the number is less than or equal to 0, it's not a power of 4
        if (N <= 0) {
            return 0;
        }
        
        // Keep dividing N by 4 as long as it's divisible by 4
        while (N % 4 === 0) {
            N /= 4;  // Reduce N by dividing it by 4
        }
        
        // If N has become 1, it means the original number was a power of 4
        return N === 1 ? 1 : 0;
    }
}
