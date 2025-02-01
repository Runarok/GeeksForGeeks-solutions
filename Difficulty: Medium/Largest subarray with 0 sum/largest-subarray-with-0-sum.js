//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Read input array

        let obj = new Solution();
        console.log(obj.maxLen(arr));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    // Function to find the length of the largest subarray with sum 0.
    maxLen(arr) {
        const n = arr.length;  // Length of the input array
        let sum = 0;           // Variable to store the cumulative sum as we iterate
        let maxLen = 0;        // Variable to store the maximum length of the subarray with sum 0
        const map = new Map(); // Map to store the first occurrence index of each cumulative sum
        
        // Iterate through the array
        for (let i = 0; i < n; i++) {
            sum += arr[i];  // Update the cumulative sum with the current element
            
            // If the cumulative sum is 0, we found a subarray from index 0 to i with sum 0
            if (sum === 0) {
                maxLen = Math.max(maxLen, i + 1);  // Update maxLen if we found a longer subarray
            } 
            // If the cumulative sum has been seen before, we found a subarray with sum 0
            else if (map.has(sum)) {
                const len = i - map.get(sum);  // Calculate the length of the subarray
                maxLen = Math.max(maxLen, len);  // Update maxLen if we found a longer subarray
            } else {
                // Store the index of the first occurrence of the cumulative sum
                map.set(sum, i);
            }
        }
        
        return maxLen;  // Return the maximum length of the subarray with sum 0
    }
}
