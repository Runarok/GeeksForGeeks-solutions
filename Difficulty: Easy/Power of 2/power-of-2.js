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
        let input_line = readLine().split(' ').map(x => parseInt(x));
        let n = input_line[0];
        let obj = new Solution();
        if (obj.isPowerofTwo(n)) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number} n
 * @returns {boolean}
 */

class Solution {
    /**
     * Function to check if a number is a power of two.
     * @param {number} n - The number to check.
     * @returns {boolean} - Returns true if n is a power of two, false otherwise.
     */
    isPowerofTwo(n) {
        // Edge case: numbers less than or equal to 0 are not powers of two.
        if (n <= 0) return false;
        
        // Iterate over powers of two starting from 2^0
        let i = 0;
        while (true) {
            let result = 2 ** i; // Calculate 2 raised to the power of i
            
            // If we find that result equals n, n is a power of two
            if (result === n) {
                return true;
            }
            
            // If result exceeds n, n is not a power of two
            if (result > n) {
                return false;
            }
            
            i++; // Move to the next power of two
        }
    }
}
