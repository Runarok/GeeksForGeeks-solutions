//{ Driver Code Starts
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
    for (let i = 0; i < t; i++) {
        let arr =
            readLine().split(" ").map(Number); // Convert input to an array of integers
        let obj = new Solution();
        let res = obj.findLargest(arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number[]} arr
 * @returns {String}
 */
class Solution {
    findLargest(arr) {
        // If all elements are zero, return '0'
        if (arr.every(a => a === 0)) return "0";
        
        // Sort the array by comparing concatenated strings
        arr.sort((a, b) => {
            // Concatenate a+b and b+a and compare them as strings to determine order
            if ((a + '' + b) - (b + '' + a) < 0) {
                return 0; // No swap needed
            } else {
                return -1; // Swap needed
            }
        });

        // Concatenate the sorted numbers into a single string
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }

        return result;
    }
}
