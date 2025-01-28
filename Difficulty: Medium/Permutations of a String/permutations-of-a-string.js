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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let S = readLine();
        let obj = new Solution();
        let res = obj.findPermutation(S);
        res.sort()
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {string[]}
 */

class Solution {
    findPermutation(s) {
        let result = [];
        let freqMap = new Map();

        // Create a frequency map for characters
        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        const backtrack = (path) => {
            // If the path length equals the original string length, we have a valid permutation
            if (path.length === s.length) {
                result.push(path.join(''));
                return;
            }

            // Try each character
            for (let [char, count] of freqMap) {
                if (count > 0) {
                    // Choose this character and reduce its count
                    path.push(char);
                    freqMap.set(char, count - 1);

                    // Recurse
                    backtrack(path);

                    // Backtrack
                    path.pop();
                    freqMap.set(char, count); // Restore the character count
                }
            }
        };

        backtrack([]); // Start with an empty path
        return result;
    }
}
