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
    let t = parseInt(readLine(), 10); // Read the number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10)); // Read array
        let target = parseInt(readLine(), 10);                     // Read target sum
        let obj = new Solution();
        let res = obj.perfectSum(arr, target);
        console.log(res); // Output the result
        console.log("~"); // Output the result
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

class Solution {
    perfectSum(arr, target) {
        // Initialize the DP array with all zeros
        let dp = Array(target + 1).fill(0);
        
        // There is one way to make a sum of 0 - by selecting no elements (empty subset)
        dp[0] = 1;
        
        // Traverse each number in the array
        for (let num of arr) {
            // Update the dp array from target down to num
            for (let i = target; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }
        
        // The answer is the number of ways to make the target sum
        return dp[target];
    }
}
