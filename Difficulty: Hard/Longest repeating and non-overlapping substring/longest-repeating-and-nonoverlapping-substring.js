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
        let s = readLine();
        let obj = new Solution();
        let res = obj.longestSubstring(s);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    // Function to determine the length of the longest substring without repeating characters.
    longestSubstring(s) {
        let n = s.length;
        
        // Initializing a DP table to store intermediate results
        let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        let maxLength = 0; // Variable to track the maximum substring length found
        let endIndex = 0; // Stores the ending index of the longest substring

        // Populating the DP table to find repeating characters
        for (let i = 1; i <= n; i++) {
            for (let j = i + 1; j <= n; j++) {
                // If characters at positions (i-1) and (j-1) match and the difference is greater than the previous dp value
                if (s[i - 1] === s[j - 1] && j - i > dp[i - 1][j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1; // Extend the substring length

                    // Update maxLength if a longer substring is found
                    if (dp[i][j] > maxLength) {
                        maxLength = dp[i][j];
                        endIndex = i; // Store the ending index
                    }
                }
            }
        }
        
        // Return the longest repeating substring or -1 if no repeating substring exists
        return maxLength > 0 ? s.slice(endIndex - maxLength, endIndex) : -1;
    }
}
