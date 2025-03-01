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
        
        let [N,K] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.distributeTicket(N,K);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */

class Solution {
    // Function to distribute tickets.
    distributeTicket(N, K) {
        let L = 1;  // Initialize left pointer
        let R = N;  // Initialize right pointer
        
        while (L < R) {
            // If the left pointer plus K exceeds the right pointer, return the right pointer
            if (L + K > R) {
                return R;
            }
            L += K;  // Move the left pointer K steps forward

            // If the right pointer minus K is less than the left pointer, return the left pointer
            if (R - K < L) {
                return L;
            }
            R -= K;  // Move the right pointer K steps backward
        }
        
        return L;  // Return the final position of the left pointer
    }
}
