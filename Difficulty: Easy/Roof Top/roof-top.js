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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxStep(arr));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of consecutive steps
    // where the altitude increases at each step.
    maxStep(arr) {
        // Variable to keep track of the longest sequence of increasing steps
        let maxConsecutiveSteps = 0;
        // Variable to count the current sequence of consecutive increases
        let currentJump = 0;
        
        // Iterate through the array of altitudes
        for (let i = 0; i < arr.length; i++) {
            // Check if the next step is higher in altitude
            if (arr[i + 1] > arr[i]) {
                // If yes, increment the current jump counter
                currentJump++;
            } else {
                // If the altitude does not increase, update the maxConsecutiveSteps
                // with the higher value between the previous max and the current jump
                maxConsecutiveSteps = Math.max(currentJump, maxConsecutiveSteps);
                // Reset current jump counter for a new sequence
                currentJump = 0;
            }
        }
        
        // Return the maximum number of consecutive increasing steps
        return maxConsecutiveSteps;
    }
}
