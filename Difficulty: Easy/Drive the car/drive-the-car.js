//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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
    let t = parseInt(readLine(), 10);

    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let d = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.required(arr, d));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The given number to compare with the maximum element in the array.
 * @returns {number} - The difference between the maximum element and k, or -1 if k is greater than or equal to the maximum element.
 */

class Solution {
    // Function to calculate the difference between the maximum element in the array and a given number k
    required(arr, k) {
        // Initialize max to a very small value
        let max = -1;

        // Iterate through the array to find the maximum value
        for (let i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
        }

        // If k is greater than or equal to the maximum value, return -1
        // Otherwise, return the difference between max and k
        return k >= max ? -1 : max - k;
    }
}
