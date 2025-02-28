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
    let t = parseInt(readLine(), 10); // Read number of test cases
    for (let i = 0; i < t; i++) {
        // Read the array of integers
        let arr = readLine().split(' ').map(x => parseInt(x, 10));

        // Read the value of k
        let k = parseInt(readLine(), 10);

        // Create an instance of Solution class and invoke maxSum
        let obj = new Solution();
        let res = obj.maxSum(arr, k);

        console.log(res.join(" "));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

class Solution {
    maxSum(arr, k) {
        // Initialize left and right pointers
        let left = 0;
        let right = arr.length - 1;
        let tempMax = 0;  // Store the maximum sum found so far
        let res = [-1, -1];  // Initialize the result array to return the pair with the maximum sum

        // Sort the array to efficiently find pairs
        arr.sort((a, b) => a - b); // Sorting in ascending order
    
        // Use two-pointer technique to find pairs
        while (left < right) {
            let sum = arr[left] + arr[right]; // Calculate the sum of the current pair
            
            if (sum < k) {
                // If the sum is less than k, this could be a valid pair
                if (sum > tempMax) {
                    tempMax = sum; // Update the max sum if the current sum is greater
                    res = [arr[left], arr[right]]; // Update the result pair
                } else if (sum === tempMax) {
                    // If the sum is equal to the current max, check for the pair with the largest difference
                    if (Math.abs(arr[left] - arr[right]) > Math.abs(res[0] - res[1])) {
                        res = [arr[left], arr[right]]; // Update the result if the new pair has a larger difference
                    }
                }
                left++; // Move the left pointer to the right to increase the sum
            } else {
                // If the sum is greater than or equal to k, move the right pointer to the left to decrease the sum
                right--;
            }
        }
    
        return res; // Return the pair with the maximum sum less than k
    }
}
