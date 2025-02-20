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
        let obj = new Solution();
        let res = obj.getSmallestDivNum(n);
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    // Helper function to calculate the Greatest Common Divisor (GCD) using the Euclidean algorithm
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Helper function to calculate the Least Common Multiple (LCM)
    lcm(a, b) {
        return (a * b) / this.gcd(a, b);
    }

    // Function to find the smallest number that is evenly divisible by all numbers from 1 to n
    getSmallestDivNum(n) {
        let lcmResult = 1;
        
        // Iteratively compute the LCM of numbers from 1 to n
        for (let i = 2; i <= n; i++) {
            lcmResult = this.lcm(lcmResult, i);
        }
        
        return lcmResult;
    }
}
