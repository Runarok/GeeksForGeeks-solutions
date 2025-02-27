//{ Driver Code Starts
// Initial Template for JavaScript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.minEnergy(input_ar1));
    }
}

// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} a
 * @returns {number}
 */

class Solution {
    // Function to calculate minimum energy needed.
    minEnergy(arr) {
        let initMin = 0, curr = 0;

        // Iterating over the array.
        for (let i = 0; i < arr.length; i++) {
            curr += arr[i];

            // If current energy becomes negative or zero, adjust the initial minimum energy.
            if (curr <= 0) {
                initMin += Math.abs(curr) + 1;
                curr = 1;  // Reset current energy to 1
            }
        }

        // If no adjustment was made, at least 1 unit of energy is required.
        return initMin > 0 ? initMin : 1;
    }
}
