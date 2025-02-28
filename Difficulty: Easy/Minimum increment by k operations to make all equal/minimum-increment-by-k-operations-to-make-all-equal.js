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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.minOps(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - An array of numbers representing the elements.
 * @param {number} x - The value by which the difference between the maximum element and each element must be divisible.
 * @return {number} - Returns the minimum number of operations to make all elements equal to the maximum element, or -1 if it's not possible.
 */
class Solution {
    // Function to calculate the minimum number of operations needed
    minOps(arr, x) {
        // Find the maximum value in the array
        let max = Math.max(...arr);
        
        // Initialize the result variable to count operations
        let res = 0;
        
        // Iterate through each element in the array
        for (let i = 0; i < arr.length; i++) {
            // If the difference between the max value and the current element is not divisible by x, return -1 (not possible)
            if ((max - arr[i]) % x !== 0) return -1;

            // Add the number of operations required to make arr[i] equal to max
            res += (max - arr[i]) / x;
        }

        // Return the total number of operations
        return res;
    }
}
