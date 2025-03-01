//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);

        let arr = new Array(N);

        input_line = readLine().split(' ');
        for (let i = 0; i < N; i++) {
            arr[i] = parseInt(input_line[i]);
        }

        input_line = readLine().split(' ');
        let sum = input_line[0];

        let obj = new Solution();
        let ans = obj.sumExists(arr, N, sum);
        if (ans === -0) ans = 0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Array of numbers
 * @param {number} N - Length of the array
 * @param {number} sum - Target sum to check for
 * @returns {number} - Returns 1 if a pair with the given sum exists, otherwise 0
 */
class Solution {
    // Function to check if there exists a pair of numbers in the array
    // whose sum equals the given target sum.
    sumExists(arr, N, sum) {
        // Map to store required complements to achieve the target sum
        let requiredComplements = new Map();

        for (let i = 0; i < N; i++) {
            // If current number is already in the map, a valid pair exists
            if (requiredComplements.has(arr[i])) {
                return 1; // Pair found
            }
            // Store the complement required to form the sum with current number
            requiredComplements.set(sum - arr[i], arr[i]);
        }

        return 0; // No valid pair found
    }
}
