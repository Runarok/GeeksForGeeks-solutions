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

    while (t-- > 0) {
        // Read the array of integers
        let inputLine = readLine();
        let arr = inputLine.split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        console.log(obj.missingNumber(arr));

        // Print the "~" symbol to match the original output
        // console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the smallest missing positive number.
    missingNumber(arr) {
        // Sort the array in ascending order.
        arr.sort((a, b) => a - b);

        let smallestMissing = 1; // Initialize the smallest missing positive number.

        // Iterate through the array to find the missing number.
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                // If current element matches the expected number, increment expected number.
                if (arr[i] === smallestMissing) {
                    smallestMissing++;
                } 
                // If we find a gap, return the smallest missing number.
                else if (arr[i] > smallestMissing) {
                    return smallestMissing;
                }
            }
        }
        
        // If no missing number is found in the loop, return the next expected positive number.
        return smallestMissing;
    }
}
