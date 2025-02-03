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
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countSubstr(S, k);
        if (res == -0) {
            res = 0;
        }
        console.log(res.toString());

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */

class Solution {
    countSubstr(s, k) {
        // Return the number of substrings with exactly k distinct characters
        return countAtMostK(s, k) - countAtMostK(s, k - 1);
    }
}

// Function to count substrings with at most k distinct characters
function countAtMostK(s, k) {
    if (k === 0) return 0; // If k is 0, there are no substrings with 0 distinct characters

    let l = 0, count = 0;
    const map = new Map();

    // Iterate through the string using the right pointer
    for (let r = 0; r < s.length; r++) {
        // Add character at right pointer to map
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        // If the map size exceeds k, move the left pointer to shrink the window
        while (map.size > k) {
            map.set(s[l], map.get(s[l]) - 1);
            if (map.get(s[l]) === 0) {
                map.delete(s[l]);
            }
            l++;  // Move left pointer to the right
        }

        // Add the number of valid substrings (r - l + 1) to the count
        count += (r - l + 1);
    }

    return count;  // Return the total count of substrings
}
