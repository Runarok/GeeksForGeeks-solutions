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

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);
        
        let obj = new Solution();
        let ans = obj.primeProduct(N);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
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
    // Function to calculate the product of first N prime numbers.
    primeProduct(N) {
        // Helper function to check if a number is prime
        function isPrime(num) {
            let count = 0;
            for (let i = 1; i * i <= num; i++) {
                if (num % i === 0) {
                    if (num / i == i) {
                        count++;
                    } else {
                        count += 2;
                    }
                }
                // If more than two factors are found, it's not prime
                if (count > 2) {
                    break;
                }
            }
            return !(count > 2); // True if prime, false otherwise
        }

        let prod = 1;  // Initialize product

        // Loop through numbers from 1 to N to find prime factors
        for (let i = 1; i * i <= N; i++) {
            if (N % i === 0) {
                if (N / i == i && isPrime(i)) {  // If i is prime and a perfect square
                    prod *= i;
                } else {
                    // Check if i is prime
                    if (isPrime(i)) {
                        prod *= i;
                    }
                    // Check if N/i is prime
                    if (isPrime(N / i)) {
                        prod *= (N / i);
                    }
                }
            }
        }

        // Return the final product of prime numbers
        return prod;
    }
}
