//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript
// Position this line where user code will be pasted.
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
    const t = parseInt(readLine(), 10); // Read the number of test cases
    const solution = new Solution();    // Create an instance of Solution

    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine(), 10); // Read the size of the array

        // Read array a
        const a = readLine().split(' ').map(Number);

        // Read array b
        const b = readLine().split(' ').map(Number);

        // Read array k
        const k = readLine().split(' ').map(Number);

        // Call the findMax method and print the result
        console.log(solution.findMax(n, a, b, k));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    findMax(n, startIndices, endIndices, values) {
        // Prefix sum array initialized with zeros
        let prefixSum = new Array(n + 1).fill(0);

        // Applying range updates using the difference array approach
        for (let i = 0; i < startIndices.length; i++) {
            prefixSum[startIndices[i]] += values[i]; // Increment start index
            prefixSum[endIndices[i] + 1] -= values[i]; // Decrement after end index
        }

        // Calculating the actual values in the array using prefix sum
        for (let i = 1; i < n; i++) {
            prefixSum[i] += prefixSum[i - 1];
        }

        // Finding the maximum value in the final computed array
        let maxValue = prefixSum[0];
        for (let i = 0; i < n; i++) {
            maxValue = Math.max(maxValue, prefixSum[i]);
        }

        return maxValue;
    }
}
