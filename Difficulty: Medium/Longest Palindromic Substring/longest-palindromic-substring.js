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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.longestPalindrome(S);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
    
    longestPalindrome(s) {
        // Initialize variables to store the longest palindrome length and result
        let count = 0;
        let res = "";

        // Helper function to check if a substring is a palindrome
        function isPalindrome(i, j) {
            // Expand around the center while characters match
            while(s[i] && s[i] == s[j]) {
                i--;
                j++;
            }
            return [i + 1, j];
        }

        // Function to update the result if a longer palindrome is found
        function calcString(i, j) {
            if((j - i) > count) {
                res = s.substring(i, j); // Update the result with the new palindrome
                count = j - i; // Update the length of the longest palindrome
            }
        }
        
        // Iterate through the string, checking for palindromes around each character
        for(let i = 0; i < s.length; i++) {
            let [x, y] = isPalindrome(i-1, i+1); // Odd-length palindrome
            calcString(x, y);
            let [a, b] = isPalindrome(i, i+1); // Even-length palindrome
            calcString(a, b);
        }

        return res; // Return the longest palindrome found
    }
}
