//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let dictionary = [];
    let input_line = readLine().split(" ");
    for(let j = 0;j < n;j++) dictionary.push(input_line[j]);
    let s = readLine();
    let obj = new Solution();
    let res = obj.wordBreak(n, s, dictionary);
    console.log(res);
    
  
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    LongestRepeatingSubsequence(s) {
        const n = s.length;
        
        // Create a DP table to store the length of the longest repeating subsequence
        const dp = Array(n + 1).fill().map(() => Array(n + 1).fill(0));
        
        // Fill the DP table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                // If characters match and indices are different (i != j)
                if (s[i - 1] === s[j - 1] && i !== j) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // The result is in the bottom-right corner of the DP table
        return dp[n][n];
    }
}
