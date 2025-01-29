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
    let [N,K] = readLine().trim().split(" ").map((x) => parseInt(x));   
    let obj = new Solution();
    let res = obj.kvowelwords(N,K);
    if(res===-0)
      res = 0;
    console.log(res);
  }

}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number} N - The length of the word
 * @param {number} K - The maximum number of consecutive vowels allowed
 * @return {number} - The total number of valid words
 */

class Solution {
    kvowelwords(N, K) {
        // Define the modulo value to prevent integer overflow
        const mod = 1e9 + 7;

        // Create a 2D DP array with dimensions (N+1) x (K+1)
        // dp[i][j] stores the count of valid words of length 'i' with at most 'j' consecutive vowels
        const dp = Array.from({ length: N + 1 }, () => Array.from({ length: K + 1 }, () => 1));

        // Iterate through lengths from 1 to N
        for (let i = 1; i <= N; i++) {
            for (let j = 0; j <= K; j++) {
                if (j === 0) {
                    // If no consecutive vowels are allowed at this position, we must place a consonant.
                    // There are 21 consonants in the English alphabet.
                    dp[i][j] = (21 * dp[i - 1][K]) % mod;
                } else {
                    // Otherwise, we have two choices:
                    // 1. Place a vowel: There are 5 vowels, so multiply by 5 and use dp[i-1][j-1].
                    // 2. Place a consonant: There are 21 consonants, so multiply by 21 and use dp[i-1][K].
                    dp[i][j] = (5 * dp[i - 1][j - 1] + 21 * dp[i - 1][K]) % mod;
                }
            }
        }

        // Return the result for a word of length N with at most K consecutive vowels.
        return dp[N][K];
    }
}
