//{ Driver Code Starts
// Initial Template for javascript

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
    let t = parseInt(readLine());
    while (t-- > 0) {
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let result = obj.countSubarrays(arr, k);

        console.log(result);
        console.log('~');
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    // Function to count the number of subarrays with sum equal to k
    countSubarrays(arr, k) {
        const prefixSumMap = new Map(); // Map to store prefix sum frequencies
        let totalSubarrays = 0; // Count of valid subarrays
        let currentSum = 0; // Running sum of elements

        for (let value of arr) {
            currentSum += value; // Update the running sum
            
            // If the current sum equals k, increment totalSubarrays
            if (currentSum === k) {
                totalSubarrays++;
            }

            // If (currentSum - k) exists in prefixSumMap, add its count to totalSubarrays
            if (prefixSumMap.has(currentSum - k)) {
                totalSubarrays += prefixSumMap.get(currentSum - k);
            }

            // Update prefixSumMap with the new currentSum count
            prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
        }

        return totalSubarrays;
    }
}
