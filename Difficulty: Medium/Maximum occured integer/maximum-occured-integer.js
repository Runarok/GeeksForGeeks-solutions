//{ Driver Code Starts
// Initial Template for javascript

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
        let l = new Array(n);
        let r = new Array(n);
        let maxx = 0;
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) l[i] = input_ar0[i];
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            r[i] = input_ar1[i];
            if (r[i] > maxx) {
                maxx = r[i];
            }
        }
        let obj = new Solution();
        console.log(obj.maxOccured(n, l, r, maxx));
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} L
 * @param {number[]} R
 * @param {number} n
 * @param {number} maxx
 * @returns {number}
 */

class Solution {
    // Function to find the maximum occurred integer in all ranges.
    maxOccured(n, l, r, maxx) {
        // Initialize an array to count the frequency of integers.
        let count = new Array(maxx + 1).fill(0);

        // Loop through the ranges and mark the beginning and end of each range.
        for (let i = 0; i < n; i++) {
            count[l[i]] += 1;  // Increment the count at the start of the range.
            if (r[i] + 1 <= maxx) {
                count[r[i] + 1] -= 1;  // Decrement the count just after the end of the range.
            }
        }

        // Variables to track the maximum frequency and the corresponding integer.
        let maxFreq = 0;
        let result = -1;
        let currentFreq = 0;

        // Traverse through the count array to calculate the actual frequencies.
        for (let i = 0; i <= maxx; i++) {
            currentFreq += count[i];  // Update the current frequency at each index.

            // If the current frequency is higher than the previous max frequency, update result.
            if (currentFreq > maxFreq) {
                maxFreq = currentFreq;
                result = i;
            }
        }

        // Return the integer that occurred the most across all ranges.
        return result;
    }
}
