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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        
        let obj = new Solution();
        let ans = obj.maxUniquePrimeFactors(n);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the maximum number of unique prime factors
    maxUniquePrimeFactors(N) {
        // Array to mark prime numbers, initially assume all numbers are prime
        let prime = new Array(105).fill(true);
        let p = 2;  // Start from the smallest prime number
        let prod = 1;  // Initialize product of primes
        let res = 0;  // Result to store count of unique prime factors
        
        // Loop through all numbers up to 100 to check for prime factors
        while (p <= 100) {
            // If p is a prime number
            if (prime[p] == true) {
                // Mark multiples of p as non-prime
                for (let i = p * p; i < 105; i += p) {
                    prime[i] = false;
                }
                
                // Multiply prod by the prime number p
                prod *= p;
                
                // If the product exceeds N, return the result as it is
                if (prod > N) {
                    return res;
                }
                
                // Increment the count of unique prime factors
                res += 1;
            }
            p += 1;  // Move to the next number
        }
        
        // Return the total number of unique prime factors
        return res;
    }
}
