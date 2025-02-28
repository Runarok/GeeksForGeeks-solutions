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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countNumbers(n);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n - The upper limit number up to which we need to check.
 * @returns {number} - The count of numbers that contain only the digits 1, 2, 3, 4, and 5.
 */

class Solution {
    // Function to count the numbers satisfying the given condition.
    countNumbers(n) {
        let set = new Set([1, 2, 3, 4, 5]); // Set containing the allowed digits
        let count = 0; // Initialize the count to 0

        // Iterate through all numbers from 1 to n
        for (let i = 1; i <= n; i++) {
            // Convert the number to a string and split it into individual digits
            let nums = i.toString().split(""); 
            let valid = true; // Assume the number is valid initially

            // Check each digit of the current number
            for (let j = 0; j < nums.length; j++) {
                // If any digit is not in the allowed set, mark it as invalid
                if (!set.has(parseInt(nums[j]))) {
                    valid = false;
                }
            }

            // If the number is valid, increment the count
            if(valid) count++;
        }

        // Return the final count of valid numbers
        return count;
    }
}
