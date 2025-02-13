//{ Driver Code Starts
// Initial Template for javascript

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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    let obj = new Solution();
    obj.sieve(10000);
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let lst = new Array(n);
        let sz = 0;
        let res = obj.findPrimeFactors(n);
        printList(res,res.length);
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends



class Solution {
    
    /**
     * This function performs the sieve of Eratosthenes to find all prime numbers up to a given number `n`.
     * @param {number} n - The upper limit for finding prime numbers.
     * @returns {number[]} - An array where each index represents whether the number is prime (1) or not (0).
    */
    sieve(n) {
        // Initialize an array to mark all numbers as prime (1) initially
        let prime = new Array(n+1).fill(1);

        // Start iterating from 2 to sqrt(n)
        for (let i = 2; i * i <= n; i++) {
            // If the current number is prime
            if (prime[i] === 1) {
                // Mark all multiples of `i` as not prime
                for (let j = i * i; j <= n; j += i) {
                    prime[j] = 0;
                }
            }
        }
        // Return the array where prime[i] is 1 if `i` is prime, otherwise 0
        return prime;
    }
    
    /**
     * This function finds all prime factors of a given number `N`.
     * @param {number} N - The number for which to find the prime factors.
     * @returns {number[]} - An array of prime factors of `N`.
    */
    findPrimeFactors(N) {
        // Get the array of primes up to N using the sieve method
        let primes = this.sieve(N);
        let factors = [];  // Array to store prime factors of N
        
        // Iterate through the prime numbers up to sqrt(N)
        for (let i = 2; i * i <= N; i++) {
            // If `i` is prime, check if it divides `N`
            if (primes[i] === 1) {
                // While `i` divides `N`, add `i` as a factor and reduce `N`
                while (N % i === 0) {
                    factors.push(i);
                    N = N / i;
                }
            }
        }
        
        // If `N` is still greater than 1, it must be a prime number
        if (N !== 1) factors.push(N);
        
        // Return the array of prime factors
        return factors;
    }
}
