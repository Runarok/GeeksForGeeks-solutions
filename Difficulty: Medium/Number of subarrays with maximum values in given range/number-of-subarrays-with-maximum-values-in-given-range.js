//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [n, L, R] = readLine().trim().split(" ").map((x) => parseInt(x));
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.countSubarrays(a, n, L, R);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} L
 * @param {number} R
 * @returns {number}
 */

class Solution
{
    // Complete the function countSubarrays here
    countSubarrays(a, n, L, R)
    {
        let i = 0, j = 0;
        let ans = 0;
        let prevCount = 0;

        // Helper function to check if the current element is within the valid range [L, R]
        const isValid = (op) => {
            const left = op >= L;
            const right = R >= op;
            return left && right;
        }

        // Traverse through the array using two pointers
        while (j < n) {
            if (a[j] > R) {
                // If the current element is greater than R, skip to the next subarray
                i = j + 1;
                j++;
                prevCount = 0;  // Reset the previous count
                continue;
            }

            if (isValid(a[j])) {
                // If the element is within the range [L, R], count all valid subarrays
                ans += j - i + 1;
                prevCount = j - i + 1;
            }

            if (a[j] < L && prevCount > 0) {
                // If the current element is less than L, add previous valid subarrays
                ans += prevCount;
            }

            j++;  // Move the right pointer
        }

        return ans;  // Return the total count of valid subarrays
    }
}
