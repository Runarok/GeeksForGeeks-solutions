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
        let ip = readLine().split(' ');
        let s = ip[0];
        let k = parseInt(ip[1]);
        let obj = new Solution();
        let res = obj.iskPalindrome(s, k);
        if (res === true) {
            console.log(1);
        } else {
            console.log(0);
        }

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s - The input string
 * @param {number} k - Maximum allowed number of character deletions
 * @returns {boolean} - Whether the string can be converted into a palindrome with at most k deletions
*/

class Solution {
    iskPalindrome(s, k) {
        const n = s.length;
        
        // Create a DP table where dp[i][j] stores the length of the longest palindromic subsequence
        // within the substring s[i] to s[j].
        const dp = Array.from({ length: n }, () => Array(n).fill(0));

        // Every single character is a palindrome of length 1
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }

        // Fill the DP table for substrings of length 2 and above
        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;

                // If characters at both ends are the same, they can be part of the palindromic subsequence
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } 
                // Otherwise, the length is the maximum palindromic subsequence we can get by either
                // removing the character at the start or the character at the end
                else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        // The length of the longest palindromic subsequence in the entire string
        const longestPalindromicSubsequenceLength = dp[0][n - 1];
        
        // To make the string a palindrome, we would need to remove (n - longestPalindromicSubsequenceLength) characters
        // If this number is <= k, we can achieve the desired palindrome with at most k deletions
        return (n - longestPalindromicSubsequenceLength) <= k;
    }
}
