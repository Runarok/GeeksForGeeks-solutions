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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));

        // let n = input_ar1[0]; // The first element is n (size of the full
        // permutation)
        let arr = input_ar1; // The remaining elements are the array of n-1 numbers

        let obj = new Solution();
        console.log(obj.lis(arr));
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to find the length of the longest increasing subsequence (LIS).
    lis(nums) {
        if (nums.length === 0) return 0;

        // DP table (nums.length+1) initialized with 1
        let prevDp = new Array(nums.length + 1).fill(1);
        let curr = new Array(nums.length + 1).fill(1);

        // Initialize the first row of the DP table with 0
        for (let i = 0; i <= nums.length; i++) {
            prevDp[i] = 0;
        }

        // Iterate through the array elements
        for (let ind = 1; ind <= nums.length; ind++) {
            curr[0] = 0; // The first column always remains 0

            for (let prev = 1; prev < ind; prev++) {
                // Copy the previous row's value into the current row
                curr[prev] = prevDp[prev];

                // If a valid increasing subsequence is found, update the value
                if (nums[prev - 1] < nums[ind - 1]) {
                    curr[ind] = Math.max(curr[ind], curr[prev] + 1);
                }
            }
            // Update prevDp to the current row for the next iteration
            prevDp = [...curr];
        }

        // Return the maximum value found in the DP array
        return Math.max(...prevDp);
    }
}
