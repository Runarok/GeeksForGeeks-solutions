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
        let m = parseInt(readLine());
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.posOfRightMostDiffBit(m, n));

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to find the position of the rightmost bit that is different in two numbers
 * @param {Number} m - The first number to compare
 * @param {Number} n - The second number to compare
 * @returns {Number} - The position of the rightmost different bit (1-based index), or -1 if the numbers are the same
 */
class Solution {
    // Function to find the first position with different bits
    posOfRightMostDiffBit(m, n) {
        // If m and n are the same, return -1 as there are no different bits
        if (m === n) return -1;

        // XOR operation will set bits to 1 where the corresponding bits in m and n are different
        let xor = m ^ n;

        // Position of the rightmost different bit (1-based index)
        let position = 1;

        // Keep shifting xor to the right until we find the rightmost 1 bit
        // which indicates the rightmost different bit
        while ((xor & 1) === 0) {
            xor = xor >> 1;  // Right shift to check the next bit
            position++;      // Increment the position counter
        }

        // Return the position of the rightmost different bit
        return position;
    }
}
