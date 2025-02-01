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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr=readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.findMaxSum(arr,n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array of integers
 * @param {number} n - Length of the array
 * @returns {number} - Maximum sum of a contiguous subarray
 */

class Solution {
    // Function to find the sum of the contiguous subarray with the maximum sum.
    findMaxSum(arr, n) {
        // If there is only one element, return it as the max sum
        if (n == 1)
            return arr[0];
        
        // If there are two elements, return the larger of the two
        if (n == 2)
            return arr[0] > arr[1] ? arr[0] : arr[1];
        
        // Array to store the possible maximum sums at each index
        var maxSums = [0, arr[0], arr[1]];
        
        // Iterate through the array starting from index 2
        for (var i = 2; i < n; i++) {
            // Compute two possible sums:
            // 1. Including the previous element in the sum
            var sumWithPrev = arr[i] + maxSums[i - 1];

            // 2. Skipping one element and adding the one before that
            var sumSkippingOne = arr[i] + maxSums[i - 2];

            // Store the maximum of the two computed sums
            maxSums.push(sumWithPrev > sumSkippingOne ? sumWithPrev : sumSkippingOne);
        }
        
        // Return the larger of the last two computed sums
        return maxSums[n] > maxSums[n - 1] ? maxSums[n] : maxSums[n - 1];
    }
}
