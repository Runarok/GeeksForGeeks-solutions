//{ Driver Code Starts
// Initial Template for javascript

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
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let X = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.search(arr, X));
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The array to search in
 * @param {number} target - The number to find
 * @return {number} - Index of the target if found, otherwise -1
 */
class Solution {
    search(arr, target) {
        // Iterate through the array
        for (let index = 0; index < arr.length; index++) {
            // Check if the current element matches the target
            if (arr[index] === target) {
                return index; // Return the index if found
            }
        }
        
        return -1; // Return -1 if the target is not found in the array
    }
}
