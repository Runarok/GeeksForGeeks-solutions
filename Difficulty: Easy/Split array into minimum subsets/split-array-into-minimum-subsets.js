//{ Driver Code Starts
// Initial Template for javascript

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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        console.log(obj.minSubsets(arr));
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr - Array of numbers
 * @return {number} - Minimum number of subsets such that each subset contains consecutive numbers
 */

class Solution {
    // Function to find the minimum number of subsets where each subset contains consecutive numbers
    minSubsets(arr) {
        // Sort the array in ascending order to make it easier to identify consecutive numbers
        arr.sort((a, b) => a - b);
        
        // Variable to keep track of the number of subsets
        let subsetCount = 0;

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            subsetCount++; // Start a new subset

            // Skip all consecutive numbers in the array
            while (i < arr.length - 1 && arr[i + 1] === arr[i] + 1) {
                i++; // Move to the next number in the sequence
            }
        }

        // Return the total number of subsets
        return subsetCount;
    }
}
