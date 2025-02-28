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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let A = input_ar1;
        let obj = new Solution();
        console.log(obj.printMinimumProduct(A));
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} a
 * @returns {number}
 */

class Solution {
    // Function to print minimum product
    printMinimumProduct(arr) {
        // Initialize variables to hold the smallest and second smallest numbers
        let min1 = Infinity, min2 = Infinity;

        // Iterate through each number in the array
        for (let n of arr) {
            if (n < min1) {
                // If current number is smaller than the smallest, update the smallest and second smallest
                min2 = min1;
                min1 = n;
            } else if (n < min2) {
                // If current number is not smaller than the smallest but smaller than the second smallest, update the second smallest
                min2 = n;
            }
        }

        // Return the product of the two smallest numbers
        return min1 * min2;
    }
}
