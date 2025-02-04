//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let arr = [];
        for (let i = 0; i < input_ar0.length; i++) {
            arr.push(input_ar0[i]);
        }
        let obj = new Solution();
        console.log(obj.countDivisorsMult(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {

    /**
     * Function to calculate the prime factors of a given number.
     * 
     * @param {number} num - The number to find prime factors of
     * @return {Object} - A dictionary with prime factors as keys and their exponents as values
     */
    primeFactors(num) {
        let factors = {};
        
        // Divide by 2 as long as num is even
        while (num % 2 === 0) {
            factors[2] = (factors[2] || 0) + 1;  // Track the exponent for prime factor 2
            num /= 2;
        }
        
        // Check for odd prime factors starting from 3
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            while (num % i === 0) {
                factors[i] = (factors[i] || 0) + 1;  // Track the exponent for this prime factor
                num /= i;
            }
        }
        
        // If num is still greater than 2, it is a prime number
        if (num > 2) {
            factors[num] = (factors[num] || 0) + 1;  // Add the remaining prime factor
        }
        
        return factors;
    }

    /**
     * Function to calculate the total number of divisors of all numbers in the list.
     * 
     * @param {Array<number>} a - The list of numbers
     * @return {number} - The total number of divisors of all numbers combined
     */
    countDivisorsMult(a) {
        let totalFactors = {};

        // For each number in the list, accumulate its prime factors
        for (let num of a) {
            let factors = this.primeFactors(num);
            for (let prime in factors) {
                factors[prime] = factors[prime] || 0;
                totalFactors[prime] = (totalFactors[prime] || 0) + factors[prime];  // Sum exponents of each prime
            }
        }

        // Calculate the total number of divisors using accumulated prime factor exponents
        let divisorCount = 1;
        for (let exponent of Object.values(totalFactors)) {
            divisorCount *= (exponent + 1);  // Formula for divisors is (exponent + 1) for each prime
        }

        return divisorCount;
    }
}
