//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

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
        let words = readLine().split(" ");

        let obj = new Solution();
        let res = obj.longestStringChain(words);
        console.log(res);
        console.log("~")
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[]} words
 * @return {int}
 */
 class Solution {
    longestStringChain(words) {
        // Step 1: Sort words by length
        words.sort((a, b) => a.length - b.length);

        let dp = new Map(); // Store longest chain ending at each word
        let maxLength = 1;

        // Step 2: Process each word
        for (let word of words) {
            let longest = 1; // Minimum chain length is 1 (word itself)

            // Step 3: Try removing one character at a time
            for (let i = 0; i < word.length; i++) {
                let predecessor = word.slice(0, i) + word.slice(i + 1); // Remove character at index i
                
                if (dp.has(predecessor)) {
                    longest = Math.max(longest, dp.get(predecessor) + 1);
                }
            }

            dp.set(word, longest);
            maxLength = Math.max(maxLength, longest);
        }

        return maxLength;
    }
}
