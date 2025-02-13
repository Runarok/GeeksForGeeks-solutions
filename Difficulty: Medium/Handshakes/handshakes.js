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
        let res = obj.count(N);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @return {number}
 */

class Solution {
    count(n){
        // c0 = 1, c1 = 1
        // c2 = c0 * c1 + c1 * c0
        // c3 = c0 * c2 + c1 * c1 + c2 * c0
        
        let memo = new Array(n + 1).fill(-1);  // Memoization array to store computed values
        memo[0] = 1; 
        memo[1] = 1;  // Base cases: c0 and c1 are both 1
        
        // Function to calculate Catalan number using memoization
        const catalanNumber = function (n) {
            // If the value has already been computed, return it from memo
            if (memo[n] != -1) {
                return memo[n];
            } else {
                let val = 0;
                // Recursively calculate the Catalan number
                for (let start = 0; start < n; start++) {
                    val += catalanNumber(start) * catalanNumber(n - start - 1);
                }
                // Store the computed value in memo for future use
                memo[n] = val;
                return memo[n];
            }
        }
        // Return the Catalan number for half of N
        return catalanNumber(n / 2);
    }
}
