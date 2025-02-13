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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minIncrements(arr);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of increments/decrements required.
    minIncrements(arr) {
        // Sort the array to make it easier to adjust numbers sequentially
        arr.sort((a,b) => a - b);
        let count = 0; // Initialize count to keep track of the total increments

        // Traverse the sorted array
        for (let i = 1; i < arr.length; i++) {
            // If the current element is less than or equal to the previous one
            if (arr[i] <= arr[i-1]) {
                // Calculate the necessary increment to make it greater than the previous element
                count += arr[i-1] + 1 - arr[i];
                // Update the current element to be the required incremented value
                arr[i] = arr[i-1] + 1;
            }
        }
        return count; // Return the total count of increments required
    }
}
