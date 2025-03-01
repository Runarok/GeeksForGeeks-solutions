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
        let arr = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let ans = obj.countWays(arr[0]);
        console.log(ans);
    }
}
// } Driver Code Ends

class Solution {
    // Function to count the number of possible ways.
    countWays(n) {
        // Initialize the dp array with 0
        let dp = new Array(n + 1).fill(0);
        
        // Base cases
        dp[0] = 1; // 1 way to represent 0 (empty sum)
        if (n >= 1) dp[1] = 1; // 1 way to represent 1
        if (n >= 2) dp[2] = 1; // 1 way to represent 2 (1 + 1)
        if (n >= 3) dp[3] = 2; // 2 ways to represent 3 (1 + 1 + 1, 3)
        if (n >= 4) dp[4] = 4; // 4 ways to represent 4 (1+1+1+1, 1+3, 3+1, 4)

        // Fill the dp array for all values from 5 to n
        for (let i = 5; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4];
        }

        // The answer is the number of ways to represent n
        return dp[n];
    }
}
