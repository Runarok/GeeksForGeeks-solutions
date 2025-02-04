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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let K = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.maxSumPairWithDifferenceLessThanK(arr, n, K));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */

class Solution
{
    // Function to return the maximum sum of pairs with the absolute difference less than K.
    maxSumPairWithDifferenceLessThanK(arr, N, K)
    {
        // Initialize the sum variable to store the result
        let sum = 0;
        
        // Sort the array in ascending order to facilitate pairing
        arr.sort((a, b) => a - b);
        
        // Traverse the array from the largest element to the smallest
        for (let i = N - 1; i >= 1; i--) {
            // If the difference between the current element and the previous one is less than K
            if (arr[i] - arr[i - 1] < K) {
                // Add the pair sum to the total sum
                sum += arr[i] + arr[i - 1];
                // Skip the previous element as it has already been paired
                i--;
            }
        }
        
        // Return the calculated sum of pairs
        return sum;
    }
}
