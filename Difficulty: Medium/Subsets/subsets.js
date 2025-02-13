//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n").map((string) => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr) { console.log(arr.join(" ")); }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr =
            readLine().split(" ").map(Number); // Parsing input as array of integers
        let obj = new Solution();
        let ans = obj.subsets(arr);

        // Print each subset in the result array
        for (let subset of ans) {
            if (subset.length === 0) {
                console.log("[]");
            } else {
                for (const num of subset) {
                    process.stdout.write(num + " ");
                }
                console.log();
            }
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr  // Input array
 * @returns {number[][]}  // Returns a 2D array containing all subsets of arr
 */
class Solution {
    subsets(arr) {
        let result = [];

        /**
         * Recursive function to generate subsets
         * @param {number[]} input - Original input array
         * @param {number[]} currentSubset - Current subset being built
         * @param {number} index - Current index in the input array
         */
        function generateSubsets(input, currentSubset, index) {
            if (index === input.length) {
                result.push(currentSubset);
                return;
            }

            // Include the current element in the subset
            generateSubsets(input, [...currentSubset, input[index]], index + 1);

            // Exclude the current element from the subset
            generateSubsets(input, currentSubset, index + 1);
        }

        // Start the recursive subset generation
        generateSubsets(arr, [], 0);

        // Sort subsets in lexicographical order
        return result.sort((a, b) => {
            let i = 0;
            while (i < a.length && i < b.length) {
                if (a[i] !== b[i]) return a[i] - b[i];
                i++;
            }
            return a.length - b.length;
        });
    }
}
