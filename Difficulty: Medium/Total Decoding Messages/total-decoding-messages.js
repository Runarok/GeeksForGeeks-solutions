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

        let str = readLine();
        let obj = new Solution();
        let res = obj.countWays(str);
        console.log(res);
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} S
 * @return {number}
 */

class Solution {
    countWays(s) {
        // Helper function to calculate the number of ways recursively
        function fun(i) {
            // Base case: if the index exceeds the length of the string, return 1 (successful decoding)
            if (i >= s.length) return 1;

            // If the result for this index has already been computed, return it from the dp array
            if (dp[i] !== -1) return dp[i];

            let a1 = 0, a2 = 0;

            // If the current character is a valid digit (non-zero), recursively calculate ways for the next index
            if (Number(s[i]) > 0) {
                a1 = fun(i + 1);
            }

            // If the next two characters form a valid number between 1 and 26, calculate the ways for two characters
            if (i + 1 < s.length && Number(s.substring(i, i + 2)) <= 26 && Number(s.substring(i, i + 1)) > 0) {
                a2 = fun(i + 2);
            }

            // Store the result in the dp array and return it
            return dp[i] = a1 + a2;
        }

        // Initialize the dp array with -1, representing uncomputed values
        let dp = new Array(s.length + 1).fill(-1);

        // Start the recursive function from the 0th index of the string
        return fun(0);
    }
}
