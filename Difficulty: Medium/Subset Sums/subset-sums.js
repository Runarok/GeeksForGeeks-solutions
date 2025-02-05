//{ Driver Code Starts
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
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Input array
        let obj = new Solution();
        const result = obj.subsetSums(arr);
        result.sort((a, b) => a - b);

        // Print the result as a space-separated string
        console.log(result.join(' '));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    // Function to calculate the subset sums of the given array
    subsetSums(arr) {
        // Initialize the array with 0 to include the sum of the empty subset
        let s = [0];
        
        // Iterate through each element of the input array
        for (let i = 0; i < arr.length; i++) {
            let v = s.length;  // Store the current length of the subset sum array
            // For each existing sum in the array, add the current element to form new subset sums
            for (let t = 0; t < v; t++) {
                s.push(s[t] + arr[i]);
            }
        }

        // Return the array containing all subset sums
        return s;
    }
}
