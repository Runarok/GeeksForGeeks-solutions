//{ Driver Code Starts
// Initial Template for javascript

// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input = readLine().split(" ").map((x) => parseInt(x));
        let n = input.length;
        let arr = new Array(n);
        for (let j = 0; j < n; j++) arr[j] = input[j];
        let obj = new Solution();
        let res = obj.dupLastIndex(arr);
        printArray(res, res.length);
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array of numbers
 * @returns {number[]} - Array containing index and value of the last duplicate or [-1, -1] if no duplicate exists
 */

class Solution {
    // Function to find the last duplicate element and its index
    dupLastIndex(arr) {
        let output = [];

        // Traverse the array from the end to find the last duplicate
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] === arr[i - 1]) {
                output.push(i, arr[i]); // Store the index and value of the duplicate
                return output;
            }
        }

        // If no duplicate is found, return [-1, -1]
        output.push(-1, -1);
        return output;
    }
}
