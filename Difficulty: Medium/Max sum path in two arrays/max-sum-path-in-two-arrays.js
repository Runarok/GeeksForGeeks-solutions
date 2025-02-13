//{ Driver Code Starts
// Initial Template for javascript

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', function(line) { inputLines.push(line); });

rl.on('close', function() {
    let t = parseInt(inputLines[currentLine++]);
    for (let i = 0; i < t; i++) {
        let arr1 = inputLines[currentLine++].split(' ').map(Number);
        let arr2 = inputLines[currentLine++].split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.maxPathSum(arr1, arr2);
        console.log(ans);
        console.log("~");
    }
});

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number} - Maximum path sum
 */

class Solution {
    maxPathSum(arr1, arr2) {
        // Base case: If either array is empty, return 0
        if (arr1.length === 0 || arr2.length === 0) return 0;

        let result = 0; // Stores the maximum path sum
        let sum1 = 0; // Sum of elements from arr1
        let sum2 = 0; // Sum of elements from arr2
        
        let p1 = 0; // Pointer for arr1
        let p2 = 0; // Pointer for arr2
        
        // Traverse both arrays using two pointers
        while (p1 < arr1.length && p2 < arr2.length) {
            if (arr1[p1] < arr2[p2]) {
                sum1 += arr1[p1]; // Accumulate sum for arr1
                p1++;
            } else if (arr1[p1] > arr2[p2]) {
                sum2 += arr2[p2]; // Accumulate sum for arr2
                p2++;
            } else {
                // When a common element is found, take the maximum sum path
                result += Math.max(sum1, sum2) + arr1[p1];
                sum1 = 0; // Reset sum1
                sum2 = 0; // Reset sum2
                p1++;
                p2++;
            }
        }
        
        // Add remaining elements from arr1, if any
        while (p1 < arr1.length) {
            sum1 += arr1[p1];
            p1++;
        }
        
        // Add remaining elements from arr2, if any
        while (p2 < arr2.length) {
            sum2 += arr2[p2];
            p2++;
        }
        
        // Add the maximum of the remaining sum to result
        result += Math.max(sum1, sum2);
        
        return result;
    }
}
