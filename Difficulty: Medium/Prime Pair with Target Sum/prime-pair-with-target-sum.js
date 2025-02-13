//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.getPrimes(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n
    * @returns {number[]}
    */
    getPrimes(n) {
        // Helper function to generate all prime numbers up to the given limit
        const generatePrimes = limit => {
            // Array to track prime status (true if prime, false if not)
            const isPrime = Array(limit + 1).fill(true);
            isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes
            
            // Sieve of Eratosthenes algorithm to mark non-prime numbers
            for (let i = 2; i * i <= limit; i++) {
                if (isPrime[i]) {
                    // Mark all multiples of i as non-prime
                    for (let j = i * i; j <= limit; j += i) isPrime[j] = false;
                }
            }
            return isPrime;
        };

        // Get the prime status for numbers up to n
        const isPrime = generatePrimes(n);

        // Iterate to find two primes that sum up to n
        for (let i = 2; i <= n / 2; i++) {
            const j = n - i; // Find the complementary number to form the sum n
            if (isPrime[i] && isPrime[j]) return [i, j]; // Return the pair of primes
        }

        // If no such pair is found, return [-1, -1]
        return [-1, -1];
    }
}
