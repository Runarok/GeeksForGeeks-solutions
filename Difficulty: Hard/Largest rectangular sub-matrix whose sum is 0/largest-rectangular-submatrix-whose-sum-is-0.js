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
    let i = 0;
    for (; i < t; i++) {
        let R = parseInt(readLine());
        let C = parseInt(readLine());
        let matrix = new Array(R);
        for (let j = 0; j < R; j++) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));
            matrix[j] = new Array(C);
            for (let y = 0; y < C; y++) {
                matrix[j][y] = row[y];
            }
        }
        let obj = new Solution();
        let res = obj.zeroSumSubmat(matrix);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Main function to find the largest rectangular sub-matrix with a sum of 0.
    zeroSumSubmat(mat) {
        const rows = mat.length;
        const cols = mat[0].length;
        let maxArea = 0;

        // Iterate over all possible starting rows
        for (let i = 0; i < rows; i++) {
            const temp = Array(cols).fill(0); // Temporary array to store column sums
            
            // Expand downwards to consider all possible ending rows
            for (let j = i; j < rows; j++) {
                // Accumulate column-wise sums
                for (let k = 0; k < cols; k++) {
                    temp[k] += mat[j][k];
                }

                // Find the widest subarray with a sum of 0
                const len = this.maxZeroSumSubarray(temp);
                
                // Calculate the area and update maxArea if it's the largest so far
                maxArea = Math.max(maxArea, (j - i + 1) * len);
            }
        }
        return maxArea;
    }

    // Helper function to find the longest contiguous subarray with a sum of 0
    maxZeroSumSubarray(arr) {
        let prefSum = 0; // Tracks prefix sum
        let maxLength = 0; // Stores the maximum length found
        const mp = new Map(); // Hash map to store first occurrences of prefix sums

        for (let i = 0; i < arr.length; i++) {
            prefSum += arr[i]; // Compute prefix sum
            
            // If the sum is 0, update maxLength to include the entire subarray
            if (prefSum === 0) {
                maxLength = i + 1;
            }
            
            // If the prefix sum has been seen before, a zero-sum subarray exists
            if (mp.has(prefSum)) {
                maxLength = Math.max(maxLength, i - mp.get(prefSum));
            } else {
                // Store the first occurrence of this prefix sum
                mp.set(prefSum, i);
            }
        }
        return maxLength;
    }
}
