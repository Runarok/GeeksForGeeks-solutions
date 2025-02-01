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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.longestUniqueSubstr(s);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */
class Solution {
    longestUniqueSubstr(s) {
        // Create a map to store the frequency of characters
        let charMap = new Map();
        
        // Variables to track the start and end indices of the window, and the maximum length of the substring
        let start = 0;
        let end = 0;
        let maxLength = 0;

        // Traverse through the string with the 'end' pointer
        while (end < s.length) {
            // If the current character is already in the map, it means we have a duplicate character
            if (charMap.get(s[end])) {
                // Move the 'start' pointer forward until the duplicate character is removed
                while (s[start] !== s[end]) {
                    charMap.delete(s[start]);
                    start++;
                }
                start++;  // Skip the duplicate character at 'start'
            } else {
                // If the character is not in the map, add it
                charMap.set(s[end], 1);
            }
            
            // Update the maximum length of the substring
            maxLength = Math.max(maxLength, end - start + 1);
            
            // Move the 'end' pointer to explore the next character
            end++;
        }
        
        // Return the maximum length of the substring found
        return maxLength;
    }
}
