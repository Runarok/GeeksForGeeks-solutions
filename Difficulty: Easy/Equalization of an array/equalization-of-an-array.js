//{ Driver Code Starts
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
    const t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        const input_ar1 = readLine().split(' ').map(x => parseInt(x, 10));
        const obj = new Solution();
        console.log(obj.minOperations(input_ar1));
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to calculate the minimum number of operations to make all elements equal
    minOperations(arr) {
        // If there is only one element, no operations are needed
        if (arr.length === 1) return 0;

        // Calculate the total sum of the array
        let sum = arr.reduce((acc, curr) => acc + curr);

        // If the sum is not divisible by the number of elements, return -1 (impossible to make all elements equal)
        if (sum % arr.length !== 0) {
            return -1;
        }

        // Calculate the target value that all elements should equal
        let target = sum / arr.length;

        // Initialize the count for the minimum operations
        let count = 0;

        // Calculate the total number of operations needed by summing the absolute differences from the target
        for (let i = 0; i < arr.length; i++) {
            count += Math.abs(target - arr[i]);
        }

        // Since each operation involves two elements being adjusted, divide by 2
        return count / 2;
    }
}
