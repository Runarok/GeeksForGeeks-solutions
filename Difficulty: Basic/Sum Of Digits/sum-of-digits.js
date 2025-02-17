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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.sumOfDigits(N);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The input number whose digits will be summed.
 * @return {number} - The sum of the digits of the given number.
 */

class Solution {
    sumOfDigits(n) {
        let sum = 0;

        // Loop through each digit of the number
        while (n > 0) {
            let digit = n % 10; // Extract the last digit
            sum += digit; // Add the digit to the sum
            n = Math.floor(n / 10); // Remove the last digit
        }

        return sum;
    }
}
