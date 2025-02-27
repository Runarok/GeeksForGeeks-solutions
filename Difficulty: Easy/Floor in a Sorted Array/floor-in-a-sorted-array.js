//{ Driver Code Starts
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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findFloor(arr, k);

        console.log(res); // Print the array as a space-separated string
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    findFloor(arr, k) {
        let left = 0; // Starting index of the search range
        let right = arr.length - 1; // Ending index of the search range
        let floorIndex = -1; // To store the index of the floor element (largest element <= k)

        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // Calculate the middle index

            if (arr[mid] <= k) {
                floorIndex = mid; // Update floor index as we found a valid candidate
                left = mid + 1; // Move right to search for a possibly larger floor element
            } else {
                right = mid - 1; // Move left to search in the lower half
            }
        }
        return floorIndex; // Return the final floor index (or -1 if no floor exists)
    }
}
