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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.trailingZeroes(n);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
    // Function to count the number of trailing zeroes in factorial of n.
    trailingZeroes(n) {
        let zeroCount = 0;  // Initialize count of trailing zeroes.

        // Count factors of 5 in numbers from 1 to n.
        while (n >= 5) {
            zeroCount += Math.floor(n / 5);
            n = Math.floor(n / 5);
        }

        return zeroCount;  // Return total count of trailing zeroes.
    }
}
