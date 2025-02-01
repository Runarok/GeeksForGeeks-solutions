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
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findMin(arr);
        console.log(res);
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - A sorted and rotated array.
 * @returns {number} - The minimum element in the array.
 */
class Solution {
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        let min = +Infinity; // Initialize min to the highest possible value

        // Iterate through the array to find the minimum element
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]; // Update min if a smaller element is found
            }
        }

        return min; // Return the minimum element
    }
}
