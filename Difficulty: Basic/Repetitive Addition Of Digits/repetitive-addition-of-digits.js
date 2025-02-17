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
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.singleDigit(n);
        if (res === -0) res = 0;
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    /**
     * Function to find the repeated sum of digits until a single digit is obtained.
     * @param {number} n - The input number.
     * @returns {number} - The single digit result of the repeated sum of digits.
     */
    singleDigit(n) {
        // If the number is 0, return 0
        if (n === 0) {
            return n;
        }

        // If the number is divisible by 9, return 9
        if (n % 9 === 0) {
            return 9;
        }

        // Otherwise, return the remainder when n is divided by 9
        return n % 9;
    }
}
