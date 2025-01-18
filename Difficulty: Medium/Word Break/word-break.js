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


//User function Template for javascript

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @returns {number}
*/

class Solution {
  wordBreak(n, s, dictionary) {
    // Convert dictionary to a Set for efficient lookup
    const dictSet = new Set(dictionary);
    
    let dp = Array(s.length + 1).fill(false); // DP array initialized to false
    dp[0] = true; // Base case: empty string can always be segmented
    
    // Iterate over all positions in the string
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        // If the substring s[j..i-1] is in dictionary and dp[j] is true, set dp[i] to true
        if (dp[j] && dictSet.has(s.slice(j, i))) {
          dp[i] = true;
          break;
        }
      }
    }
    
    // The answer is whether the entire string can be segmented
    return dp[s.length] ? 1 : 0;
  }
}
