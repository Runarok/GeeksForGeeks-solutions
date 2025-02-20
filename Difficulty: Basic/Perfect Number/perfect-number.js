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
        let res = obj.isPerfect(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @returns {boolean}
 */

class Solution {
    // Function to check whether the number is perfect
    isPerfect(N) {
        // Helper function to compute factorial of a digit (0-9)
        function factorial(num) {
            let fact = 1;
            for (let i = 2; i <= num; i++) {
                fact *= i; // Compute factorial iteratively
            }
            return fact;
        }

        let sum = 0, temp = N;

        // Calculate sum of the factorials of each digit
        while (temp > 0) {
            let digit = temp % 10; // Extract last digit
            sum += factorial(digit); // Add factorial of the digit to sum
            temp = Math.floor(temp / 10); // Remove last digit
        }

        // Return 1 if the sum of factorials equals the original number, otherwise return 0
        return sum === N ? 1 : 0;
    }
}
