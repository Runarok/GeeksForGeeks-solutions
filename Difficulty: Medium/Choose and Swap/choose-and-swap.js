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
        let a = readLine().trim();
        let obj = new Solution();
        let res = obj.chooseandswap(a);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} a
 * @return {string}
 */
class Solution {
    // Function to choose and swap characters to get the lexicographically smallest string
    chooseandswap(str) {
        let n = str.length;
        if (n < 2) return str;

        // Create a map to store the first occurrence of each character
        let idx_dict = {};
        for (let i = 0; i < n; i++) {
            let char = str[i];
            if (!(char in idx_dict)) {
                idx_dict[char] = i;
            }
        }

        let old_char = null;
        let new_char = null;

        // Find the character to swap
        for (let i = 0; i < n; i++) {
            new_char = str[i];
            for (let j = i + 1; j < n; j++) {
                if (str[j] < new_char && idx_dict[str[j]] > i) {
                    old_char = str[i];
                    new_char = str[j];
                }
            }
            if (old_char) break;
        }

        // If no character to swap, return the string as is
        if (!old_char) return str;

        // Swap the characters in the string
        let new_s = "";
        for (let char of str) {
            if (char === new_char) {
                new_s += old_char;
            } else if (char === old_char) {
                new_s += new_char;
            } else {
                new_s += char;
            }
        }

        return new_s;
    }
}
