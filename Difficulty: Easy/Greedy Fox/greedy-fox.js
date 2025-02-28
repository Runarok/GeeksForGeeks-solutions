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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ').map(Number);
        let obj = new Solution();
        let ans = obj.largestSum(input_line);
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the largest sum of the longest increasing subarray
    largestSum(arr) {
        let n = arr.length;
        if (n === 0) return 0;
        
        let maxSum = arr[0];  // The maximum sum found
        let currentSum = arr[0];  // The sum of the current increasing subarray
        
        // Traverse the array starting from the second element
        for (let i = 1; i < n; i++) {
            // If the current element is greater than the previous one, continue the increasing subarray
            if (arr[i] > arr[i - 1]) {
                currentSum += arr[i];
            } else {
                // Otherwise, update maxSum and reset currentSum for the new subarray
                maxSum = Math.max(maxSum, currentSum);
                currentSum = arr[i];
            }
        }
        
        // Final check for the last subarray
        maxSum = Math.max(maxSum, currentSum);
        
        return maxSum;
    }
}