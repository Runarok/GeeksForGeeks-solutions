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
    let S = readLine().trim();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.countOfSubstrings(S,k);
    if(res==-0){
      res = 0;
    }
    console.log(res.toString());
  
console.log("~");
}

}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * Helper function to check if a substring contains exactly (k - 1) distinct characters.
 * @param {Object} charFrequencyMap - Map storing character frequencies.
 * @param {number} k - Target substring length.
 * @returns {boolean} - True if the substring contains exactly (k - 1) distinct characters.
 */
function hasKMinusOneDistinctChars(charFrequencyMap, k) {
    return Object.keys(charFrequencyMap).length === k - 1;
}

class Solution {
    /**
     * Counts the number of substrings of length `k` that contain exactly `k-1` distinct characters.
     * @param {string} S - Input string.
     * @param {number} k - Length of the substrings to check.
     * @returns {number} - Count of valid substrings.
     */
    countOfSubstrings(S, k) {
        let charFrequencyMap = {}; // Stores frequency of characters in the current window
        let validSubstringCount = 0;

        // Edge case: If string length is less than 2 or k is 0, return 0.
        if (S.length < 2 || k === 0) {
            return validSubstringCount;
        }

        // Initialize the first window of size `k`
        for (let i = 0; i < k; i++) {
            charFrequencyMap[S[i]] = (charFrequencyMap[S[i]] || 0) + 1;
        }

        // Check if the first window satisfies the condition
        if (hasKMinusOneDistinctChars(charFrequencyMap, k)) {
            validSubstringCount++;
        }

        // Slide the window across the string
        for (let i = k; i < S.length; i++) {
            // Add the new character to the window
            charFrequencyMap[S[i]] = (charFrequencyMap[S[i]] || 0) + 1;

            // Remove the character that moves out of the window
            let removedChar = S[i - k];
            if (charFrequencyMap[removedChar] > 1) {
                charFrequencyMap[removedChar]--;
            } else {
                delete charFrequencyMap[removedChar];
            }

            // Check if the current window satisfies the condition
            if (hasKMinusOneDistinctChars(charFrequencyMap, k)) {
                validSubstringCount++;
            }
        }

        return validSubstringCount;
    }
}
