//{ Driver Code Starts
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
        let X = readLine().trim();
        let Y = readLine().trim();
        let obj = new Solution();
        let res = obj.findSum(X, Y);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} X
 * @param {string} Y
 * @return {string}
 */

class Solution {
    // Function to find the sum of two large numbers represented as strings
    findSum(s1, s2) {
        // Convert the input strings to BigInt for handling large numbers
        let sum = BigInt(s1) + BigInt(s2);
        
        // Return the sum as a string
        return sum.toString();
    }
}
