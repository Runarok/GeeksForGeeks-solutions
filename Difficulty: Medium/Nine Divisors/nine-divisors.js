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
        let res = obj.nineDivisors(N);
        if(res===-0)
            res = 0;
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Generates the smallest prime factor for each number up to len(primes)
    generatePrime(primes) {
        for (let i = 2; i < primes.length; i++) {
            primes[i] = i;
        }
        for (let i = 2; i <= Math.sqrt(primes.length); i++) {
            if (primes[i] === i) {
                for (let j = i * i; j < primes.length; j += i) {
                    if (primes[j] === j) {
                        primes[j] = i;
                    }
                }
            }
        }
    }

    // Counts the numbers with exactly 9 divisors up to N
    nineDivisors(N) {
        const primes = new Array(Math.floor(Math.sqrt(N)) + 1).fill(1);
        this.generatePrime(primes);
        
        let count = 0;
        for (let i = 2; i <= Math.sqrt(N); i++) {
            let a = primes[i];
            let b = primes[Math.floor(i / a)];
            
            // Check if i has exactly two distinct prime factors or if it is a prime and i^8 <= N
            if ((a !== b && primes[b] === b && b !== 1 && (a * b) === i) || (primes[i] === i && Math.pow(i, 8) <= N)) {
                count++;
            }
        }
        
        return count;
    }
}
