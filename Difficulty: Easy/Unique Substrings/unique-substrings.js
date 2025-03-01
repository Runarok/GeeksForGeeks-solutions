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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.unique_substring(str);
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
    // Function to calculate the number of unique substrings in the given string.
    unique_substring(s) {
        // Create a Set to store unique substrings.
        let uniqueSubstrings = new Set();
        
        // Outer loop to select the starting character of the substring.
        for (let startIndex = 0; startIndex < s.length; startIndex++) {
            let currentSubstring = "";
            
            // Inner loop to extend the substring from the start index.
            for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
                // Append the current character to form a substring.
                currentSubstring += s[endIndex];
                
                // Add the formed substring to the Set.
                uniqueSubstrings.add(currentSubstring);
            }
        }
        
        // Return the total count of unique substrings.
        return uniqueSubstrings.size;
    }
}
