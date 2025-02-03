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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Array input
        let k = parseInt(readLine());

        let obj = new Solution();
        console.log(obj.minRemovals(arr, k));
        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} targetSum
     * @return {number}
     */
    minRemovals(nums, targetSum) {
        // Compute the total sum of the array elements
        let totalSum = nums.reduce((sum, num) => sum + num, 0);

        // If the total sum is less than the target sum, return -1 (impossible case)
        if (totalSum < targetSum) return -1;

        // Calculate the desired sum that needs to be achieved
        const requiredSum = totalSum - targetSum;

        let currentSum = 0;
        let maxLength = -1;
        let leftPointer = 0;

        // Traverse the array to find the longest subarray with sum equal to requiredSum
        for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
            currentSum += nums[rightPointer];

            // Shrink the window from the left if the current sum exceeds requiredSum
            while (currentSum > requiredSum) {
                currentSum -= nums[leftPointer];
                leftPointer++;
            }

            // If the current sum matches the required sum, update the maximum subarray length
            if (currentSum === requiredSum) {
                maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
            }
        }

        // If no valid subarray is found, return -1, otherwise return the number of removals
        return maxLength === -1 ? -1 : nums.length - maxLength;
    }
}
