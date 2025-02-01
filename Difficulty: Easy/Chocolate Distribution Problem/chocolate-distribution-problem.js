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

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        let m = parseInt(readLine());
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findMinDiff(arr, m);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of integers
 * @param {number} m - The number of students (size of subset)
 * @returns {number} - The minimum difference between maximum and minimum chocolates
 */

class Solution {
    findMinDiff(arr, m) {
        // Sort the array to arrange chocolate packets in ascending order
        arr.sort((a, b) => a - b);

        let minDiff = Infinity; // Initialize min difference to a large value

        // Iterate through possible windows of size 'm'
        for (let i = 0; i + m - 1 < arr.length; i++) {
            let diff = arr[i + m - 1] - arr[i]; // Compute difference between max & min in the window
            minDiff = Math.min(minDiff, diff); // Update minDiff if the current difference is smaller
        }

        return minDiff; // Return the minimum difference found
    }
}
