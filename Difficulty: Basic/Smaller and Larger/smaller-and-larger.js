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
        let arr = readLine().split(' ').map(Number);
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getMoreAndLess(arr, x);
        console.log(res[0] + " " + res[1]);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to get the count of elements in the array that are strictly 
 * less than and strictly greater than a given target value.
 * @param {number[]} arr - The array of numbers
 * @param {number} target - The target value to compare against
 * @returns {number[]} - An array with two values: 
 * the count of elements less than or equal to target, and 
 * the count of elements greater than or equal to target
 */
class Solution {
    getMoreAndLess(arr, target) {
        // Initialize counters for elements less than, greater than, and equal to the target
        let lessThan = 0;
        let greaterThan = 0;
        let equalTo = 0;

        // Iterate through the array and update counters based on comparison with the target
        for (let element of arr) {
            if (element < target) {
                lessThan += 1;  // Increment for values less than target
            } else if (element > target) {
                greaterThan += 1;  // Increment for values greater than target
            } else if (element === target) {
                equalTo += 1;  // Increment for values equal to target
            }
        }
        
        // Return an array: first element is count of less than or equal to target, 
        // second element is count of greater than or equal to target
        return [lessThan + equalTo, greaterThan + equalTo];
    }
}
