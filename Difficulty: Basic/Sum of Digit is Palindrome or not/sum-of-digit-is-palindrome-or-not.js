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
        const ans = obj.isDigitSumPalindrome(N);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }

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
    isDigitSumPalindrome(n) {
        var sum = 0;  // Variable to store the sum of digits
        var rev = 0;  // Variable to store the reverse of the sum

        // Loop to calculate the sum of digits of the number
        while (n >= 1) {
            var num = n % 10;  // Extract the last digit of the number
            sum += num;        // Add the digit to sum
            n = Math.floor(n / 10);  // Remove the last digit
        }

        // Copy of sum to compare later
        var cpy = sum;

        // Loop to reverse the sum of digits
        while (sum >= 1) {
            var num = sum % 10;       // Extract the last digit of the sum
            rev = (rev * 10) + num;   // Build the reverse number
            sum = Math.floor(sum / 10); // Remove the last digit
        }

        // Return 1 if the original sum is equal to its reverse, else return 0
        return cpy == rev;
    }
}
