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
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.find(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - Input number
 * @return {number} - The largest number ≤ N with non-decreasing digits
 */
class Solution {
    find(N) {
        /**
         * Helper function to check if a number has non-decreasing digits.
         * @param {number} num - Number to check.
         * @return {boolean} - Returns true if digits are non-decreasing.
         */
        function hasNonDecreasingDigits(num) {
            let digits = String(num).split('').map(Number); // Convert number to an array of digits
            
            for (let i = 1; i < digits.length; i++) {
                if (digits[i] < digits[i - 1]) { // If a digit is smaller than the previous one, return false
                    return false;
                }
            }
            return true; // If all digits are in non-decreasing order, return true
        }

        // Iterate downwards from N to find the largest valid number
        for (let num = N; num >= 0; num--) {
            if (hasNonDecreasingDigits(num)) {
                return num; // Return the first valid number found
            }
        }
    }
}
