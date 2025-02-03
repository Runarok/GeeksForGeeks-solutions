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
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countPairs(arr, k));
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

class Solution {
    countPairs(arr, target) {
        // Start & End Index, c: Counter for number of pairs
        let si = 0, ei = arr.sort((a, b) => a - b).length - 1, c = 0;

        // Loop through the array using two pointers
        while (si < ei) {
            // If the sum of the current pair is less than the target, count all possible pairs with the left index
            if (arr[si] + arr[ei] < target) {
                c += ei - si; // All pairs from si to ei are valid
                si++; // Move the left pointer to the right
            } else {
                ei--; // Move the right pointer to the left if the sum is greater than or equal to the target
            }
        }
        return c; // Return the total count of valid pairs
    }
}
