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
        let input_ar1 = readLine().split(' ');
        let X = input_ar1[0];
        let Y = input_ar1[1];
        let costX = parseInt(input_ar1[2]);
        let costY = parseInt(input_ar1[3]);
        let obj = new Solution();
        let res = obj.findMinCost(X, Y, costX, costY);
        console.log(res);
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} X
 * @param {string} Y
 * @param {number} costX
 * @param {number} costY
 * @returns {number}
 */

class Solution {
    findMinCost(x, y, costX, costY) {
        // Code here
        const n = x.length;
        const m = y.length;

        // Initialize a 2D array dp where dp[i][j] represents the longest common subsequence (LCS) of substrings x[0..i-1] and y[0..j-1]
        const dp = new Array(n + 1);
        for (let i = 0; i <= n; i++) {
            dp[i] = new Array(m + 1);
            dp[i][0] = 0;  // Initialize first column as 0
        }
        for (let i = 0; i <= m; i++) {
            dp[0][i] = 0;  // Initialize first row as 0
        }

        // Fill the dp array to compute the length of the LCS
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (x[i - 1] === y[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];  // If characters match, increment LCS length
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);  // If not, take the max of the previous row or column
                }
            }
        }

        // The number of characters to be deleted from x and y is calculated by subtracting LCS length from their original lengths
        const lcsLength = dp[n][m];
        return costX * (n - lcsLength) + costY * (m - lcsLength);  // Cost for deleting unmatched characters from both strings
    }
}
