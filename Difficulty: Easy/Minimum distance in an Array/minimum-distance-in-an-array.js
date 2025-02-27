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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let x = parseInt(readLine());
        let y = parseInt(readLine());
        let ans = obj.minDist(arr, x, y);
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * Function to find the minimum distance between two numbers x and y in the array
 * @param {number[]} arr - Input array of numbers
 * @param {number} x - First number to find
 * @param {number} y - Second number to find
 * @returns {number} - Minimum distance between x and y, or -1 if either is not present
 */
class Solution {
    minDist(arr, x, y) {
        // To store the latest index of x and y when found
        let lastIndexX = -1;
        let lastIndexY = -1;

        // Initialize minimum distance as Infinity (no valid distance found yet)
        let minDistance = Infinity;

        // Loop through each element in the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                lastIndexX = i; // Update last seen index of x
            }
            if (arr[i] === y) {
                lastIndexY = i; // Update last seen index of y
            }

            // If both x and y have been found at least once, calculate the distance
            if (lastIndexX !== -1 && lastIndexY !== -1) {
                minDistance = Math.min(minDistance, Math.abs(lastIndexX - lastIndexY));
            }
        }

        // If no valid distance was found (either x or y was not present), return -1
        return minDistance === Infinity ? -1 : minDistance;
    }
}
