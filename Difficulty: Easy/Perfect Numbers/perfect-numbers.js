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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isPerfectNumber(n);
        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {

    // Function to check if a number is a perfect number
    isPerfectNumber(n) {
        if (n <= 1) {
            return false;  // Numbers less than or equal to 1 cannot be perfect numbers
        }

        let sum = 1;  // 1 is always a divisor of any number
        // Loop through all numbers from 2 to the square root of n to find divisors
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (i === (n / i)) {
                    sum += i;  // If i and n/i are the same, add only once
                } else {
                    sum += i + (n / i);  // Add both divisors
                }
            }
        }

        // Return true if the sum of divisors equals the original number (perfect number), otherwise false
        return sum === n;
    }
}
