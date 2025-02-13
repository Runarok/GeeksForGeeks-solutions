//{ Driver Code Starts
// Initial Template for JavaScript

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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputArray = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.minRemoval(inputArray));
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to find the minimum number of elements to be removed.
     * 
     * @param {Number[]} arr - The input array of numbers.
     * @returns {Number} - The minimum number of elements that need to be removed.
     */
    minRemoval(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        let n = arr.length;  // Get the length of the array
        let j = 0;  // Initialize the pointer for the second element

        let mini = n;  // Set the initial minimum removal count to the total array length

        // Loop through each element of the sorted array
        for (let i = 0; i < n; i++) {
            // Move the second pointer while the condition holds (arr[i] * 2 >= arr[j])
            while (j < n && 2 * arr[i] >= arr[j]) {
                j++;
            }

            // Calculate the number of elements that would be removed and update the minimum
            mini = Math.min(mini, n - (j - i));
        }

        return mini;  // Return the final minimum number of elements to be removed
    }
}
