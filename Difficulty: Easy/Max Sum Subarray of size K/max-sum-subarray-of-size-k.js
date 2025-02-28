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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.maximumSumSubarray(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} k
 * @param {number[]} arr
 */

class Solution {
    // Function to find the maximum sum of a subarray of size k
    maximumSumSubarray(arr, k) {
        // Initialize result as a very small number
        let result = -Infinity;

        // Initialize windowSum to keep track of the sum of the current window
        let windowSum = 0;

        // Initialize windowStart to represent the start of the window
        let windowStart = 0;

        // Loop through the array to process the window
        for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd];  // Add the current element to windowSum

            // If we've reached a window of size k
            if (windowEnd >= k - 1) {
                // Update the result if the current window's sum is larger
                if (windowSum > result) {
                    result = windowSum;
                }

                // Slide the window by subtracting the element at windowStart
                windowSum -= arr[windowStart];
                windowStart++;  // Move the windowStart to the right
            }
        }

        // Return the maximum sum found
        return result;
    }
}
