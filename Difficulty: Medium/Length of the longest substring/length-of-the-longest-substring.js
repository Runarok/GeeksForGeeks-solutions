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
        let str = readLine();
        let obj = new Solution();
        let res = obj.longestUniqueSubstring(str);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    longestUniqueSubstring(s) {
        let start = 0; // start pointer of the window
        let max_len = 0; // variable to store the length of the longest unique substring
        let charSet = new Set(); // set to store characters in the current window
        
        for (let end = 0; end < s.length; end++) {
            // If character is already in the set, move the start pointer
            while (charSet.has(s[end])) {
                charSet.delete(s[start]);
                start++;
            }
            
            // Add the current character to the set
            charSet.add(s[end]);
            
            // Update the max_len with the size of the current window
            max_len = Math.max(max_len, end - start + 1);
        }
        
        return max_len;
    }
}
