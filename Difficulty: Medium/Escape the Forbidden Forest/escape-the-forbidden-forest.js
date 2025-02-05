//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let str1 = input_line[0];
        let str2 = input_line[1];
        let obj = new Solution();
        let ans = obj.buildBridges(str1,str2);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */

class Solution {
  // Function to build bridges by finding the length of the longest common subsequence (LCS)
  buildBridges(str1, str2) {
    let n = str1.length;  // Length of the first string
    let m = str2.length;  // Length of the second string

    // Create a 2D array dp of size (n+1) x (m+1) to store the LCS lengths
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // Fill the dp array using dynamic programming approach
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        // If the characters match, increment the LCS length by 1
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          // Otherwise, take the maximum of excluding the current character from either string
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // The value at dp[n][m] contains the length of the longest common subsequence
    return dp[n][m];
  }
}
