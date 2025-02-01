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
        console.log(obj.floorSqrt(n));
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    // Function to find the floor of the square root of a number 'n'
    floorSqrt(n) {
        // Initialize low and high pointers for binary search
        let low = 0, high = n;
        // Variable to store the result (floor of the square root)
        let res = -1;

        // Perform binary search between low and high
        while (low <= high) {
            // Find the middle element in the current range
            let mid = Math.floor(low + (high - low) / 2);
            // Calculate the square of the mid element
            let sq = mid * mid;

            // If the square of mid is equal to n, mid is the exact square root
            if (sq === n) {
                return mid;
            } 
            // If the square of mid is less than n, we know that mid could be the floor value
            // of the square root, so we adjust the low pointer to search in the higher half
            else if (sq < n) {
                res = mid;  // Store mid as a potential result
                low = mid + 1;  // Move low pointer to the right side of mid
            } 
            // If the square of mid is greater than n, search in the lower half
            else {
                high = mid - 1;  // Move high pointer to the left side of mid
            }
        }

        // After the loop ends, res will contain the floor value of the square root of n
        return res;
    }
}
