//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.numOfSubset(arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the number of subsets of the given array.
    numOfSubset(arr) {
        // Initialize result with 1 to count the empty subset
        let res = 1;

        // Sort the array in ascending order
        arr = arr.sort((a, b) => a - b);

        // Iterate through the array to find gaps between consecutive numbers
        for (let i = 0; i < arr.length; i++) {
            // If the next element is not consecutive to the current element, increment the result
            if (i !== arr.length - 1 && arr[i + 1] !== arr[i] + 1) {
                res++;
            }
        }

        // Return the number of subsets
        return res;
    }
}
