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
        let pattern = readLine();
        let str = readLine();
        let obj = new Solution();
        let res = obj.wildCard(str, pattern);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @return {number}
 */

class Solution {
    wildCard(txt, pat) {
        let m = txt.length;
        let n = pat.length;
        
        // Create a DP table with (m+1) rows and (n+1) columns
        let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
        
        // Base case: empty txt and empty pat
        dp[0][0] = true;

        // Fill the DP table for patterns that can match an empty txt
        for (let j = 1; j <= n; j++) {
            if (pat[j - 1] === '*') {
                dp[0][j] = dp[0][j - 1];
            } else {
                break;
            }
        }

        // Fill the DP table for other cases
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (pat[j - 1] === txt[i - 1] || pat[j - 1] === '?') {
                    dp[i][j] = dp[i - 1][j - 1];  // Direct match or match with '?'
                } else if (pat[j - 1] === '*') {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];  // '*' matches empty or one/more characters
                }
            }
        }

        // The result is stored in dp[m][n], where m and n are the lengths of txt and pat
        return dp[m][n];
    }
}
