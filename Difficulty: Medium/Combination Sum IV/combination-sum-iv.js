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
        let input_line = readLine().split(' ');
        let Array_Length = input_line.length;
        let array = new Array(Array_Length);
        for (let i = 0; i < Array_Length; i++) {
            array[i] = parseInt(input_line[i]);
        }
        let key = parseInt(readLine())
        let obj = new Solution();
        let result = obj.combinationSum4(array, key);
        console.log(result);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} key
 * @returns {number}
 */

class Solution {
    // Function to find the number of combinations that sum up to the target 'key'
    combinationSum4(arr, key) {
        // Create a dp array where dp[i] will store the number of combinations to sum up to 'i'
        const dp = Array(key + 1).fill(0);

        // Base case: There's one way to make the sum 0, which is by choosing no elements
        dp[0] = 1;

        // Iterate over all sums from 1 to 'key'
        for (let i = 1; i <= key; i++) {
            // For each number in the input array, check if it can contribute to the current sum 'i'
            for (let num of arr) {
                if (i >= num) {
                    // If the number can be part of the sum, add the number of ways to make (i - num)
                    dp[i] += dp[i - num];
                }
            }
        }

        // The result will be the number of ways to make 'key'
        return dp[key];
    }
}
