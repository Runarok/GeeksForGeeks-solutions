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
    let tc = parseInt(readLine());
    while (tc > 0) {
        // Read the first array from the first line of input
        let arr1 = readLine().split(' ').map(Number);

        // Read the second array from the second line of input
        let arr2 = readLine().split(' ').map(Number);

        // Create an instance of Solution and call the function
        let obj = new Solution();
        let result = obj.findExtra(arr1, arr2);

        // Print the result
        console.log(result);

        tc--;
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @returns {Number}
 */
class Solution {
    findExtra(arr1, arr2) {
        // Initialize pointers for both arrays
        let i = 0, j = 0;

        // Compare elements until the end of the shorter array
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] !== arr2[j]) {
                // Return index where elements differ
                return i;
            }
            i++;
            j++;
        }

        // If no difference found so far, the extra element is at the end of arr1
        return i;
    }
}
