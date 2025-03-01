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
        let res = obj.noOfDigits(N);
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
    // Function to count the number of digits in the Nth Fibonacci number
    noOfDigits(N) {
        // Initialize an array to store Fibonacci numbers
        let fib = [0, 1];
        
        // Compute Fibonacci numbers up to N
        for (let i = 2; i <= N; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        
        // Return the number of digits in the Nth Fibonacci number
        // Using logarithm to find the number of digits: log10(fib[N]) + 1
        return Math.log(fib[N]) * Math.LOG10E + 1 | 0;
    }
}
