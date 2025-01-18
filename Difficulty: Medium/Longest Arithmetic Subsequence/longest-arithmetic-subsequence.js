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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.lengthOfLongestAP(arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} Set
 * @param {number} n
 * @return {number}
 */

class Solution {
    lengthOfLongestAP(arr) {
        let n = arr.length;
        if (n <= 1) return n;

        // dp[i][j] will store the length of the longest AP ending with arr[i] and arr[j]
        let dp = Array.from({ length: n }, () => ({}));
        let maxLength = 2; // The minimum length of any AP is 2 (i.e., any two consecutive elements)

        // Traverse all pairs (i, j) with i < j
        for (let j = 1; j < n; j++) {
            for (let i = j - 1; i >= 0; i--) {
                // Calculate the common difference d
                let d = arr[j] - arr[i];

                // If there's a valid previous element arr[k] where arr[k] = arr[i] - d
                // then we can extend the AP sequence.
                if (dp[i][d]) {
                    dp[j][d] = dp[i][d] + 1;
                } else {
                    dp[j][d] = 2; // Base case: any pair of elements forms an AP of length 2
                }

                // Update the maximum length of any AP found so far
                maxLength = Math.max(maxLength, dp[j][d]);
            }
        }

        return maxLength;
    }
}
