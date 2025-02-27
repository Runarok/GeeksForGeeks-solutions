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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());
        let m = parseInt(readLine());
        let th = parseInt(readLine());

        let obj = new Solution();
        let res = obj.minDiff(arr, k, m, th);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    minDiff(arr, k, m, t) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        let countGreaterThanOrEqualT = 0; // Count of elements >= t in the current window
        let minDifference = Infinity; // Minimum difference between max and min in valid window
        let currentWindow = []; // Current sliding window of size k

        // Initialize the first window of size k
        for (let i = 0; i < k; i++) {
            currentWindow.push(arr[i]);
            if (arr[i] >= t) {
                countGreaterThanOrEqualT++;
            }
        }

        // Check if initial window is valid and update minDifference if needed
        if (countGreaterThanOrEqualT >= m) {
            minDifference = Math.min(minDifference, Math.abs(currentWindow[0] - currentWindow[k - 1]));
        }

        // Slide the window across the array
        for (let i = k; i < arr.length; i++) {
            // Remove element going out of window and update count if needed
            if (currentWindow[0] >= t) {
                countGreaterThanOrEqualT--;
            }
            currentWindow.shift();

            // Add new element to window and update count if needed
            currentWindow.push(arr[i]);
            if (arr[i] >= t) {
                countGreaterThanOrEqualT++;
            }

            // Check if current window is valid and update minDifference if needed
            if (countGreaterThanOrEqualT >= m) {
                minDifference = Math.min(minDifference, Math.abs(currentWindow[0] - currentWindow[k - 1]));
            }
        }

        // Return the minimum difference found, or -1 if no valid window exists
        return minDifference === Infinity ? -1 : minDifference;
    }
}
