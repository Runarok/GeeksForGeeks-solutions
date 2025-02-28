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
    const t = parseInt(readLine(), 10); // Read number of test cases
    for (let i = 0; i < t; i++) {
        const input_ar1 =
            readLine().split(' ').map(x => parseInt(x, 10)); // Parse array of integers
        const obj = new Solution();
        console.log(obj.countSubsets(input_ar1)
                        .toString()); // Convert BigInt to string for proper output
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to count the number of non-empty subsets of even numbers in the array
    countSubsets(arr) {
        let evenNum = new Set(); // Set to store unique even numbers
        
        // Iterate through the array and add even numbers to the set
        for (let num of arr) {
            if (num % 2 === 0) evenNum.add(num);
        }
        
        // Convert the size of the set to a BigInt
        let m = BigInt(evenNum.size);
        
        // If there are no even numbers, return 0
        if (m === 0n) return 0;
        
        // Calculate the number of non-empty subsets using 2^m - 1
        return (1n << m) - 1n;
    }
}
