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
        let m = parseInt(readLine());
        let mat = [];

        for (let j = 0; j < n; j++) {
            let inputLine = readLine().trim().split(" ").map((X) => parseInt(X));
            mat.push(inputLine);
        }
        let obj = new Solution();
        let res = obj.maxGold(mat);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} mat
 * @return {number}
 */

class Solution {
    maxGold(mat) {
        const m = mat.length;
        const n = mat[0].length;

        // Create a DP table initialized with 0
        const dp = new Array(m+1).fill(null).map(() => new Array(n+1).fill(0));

        // Traverse the matrix column by column from the last column to the first
        for (let col = n - 1; col >= 0; col--) {
            for (let row = 0; row < m; row++) {
                // Calculate the value for the current cell based on the possible moves
                
                // Diagonal up (row-1, col+1)
                const dUp = row > 0 ? dp[row - 1][col + 1] : 0;

                // Diagonal down (row+1, col+1)
                const dDown = row < m - 1 ? dp[row + 1][col + 1] : 0;

                // Right (row, col+1)
                const right = col < n - 1 ? dp[row][col + 1] : 0;

                // Current cell value + maximum of the three moves
                dp[row][col] = mat[row][col] + Math.max(dUp, dDown, right);
            }
        }

        // The maximum gold will be the maximum value in the first column of the DP table
        let ans = -Infinity;
        for (let row = 0; row < m; row++) {
            ans = Math.max(ans, dp[row][0]);
        }

        return ans;
    }
}
