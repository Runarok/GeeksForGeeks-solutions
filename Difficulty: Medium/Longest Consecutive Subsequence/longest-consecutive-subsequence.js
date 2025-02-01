//{ Driver Code Starts
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

// Read all input lines
rl.on('line', (input) => { inputLines.push(input); });

// After reading all lines, process them
rl.on('close', () => {
    let t = parseInt(inputLines[currentLine++]);

    while (t-- > 0) {
        // Read first array
        let input = inputLines[currentLine++];
        let arr = input.split(' ').map(Number);

        let solution = new Solution();
        let res = solution.longestConsecutive(arr);

        console.log(res);
        console.log("~");
    }
});

// } Driver Code Ends


/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to return the length of the longest subsequence of consecutive integers.
    longestConsecutive(arr) {
        // If the array is empty, return 0 (no subsequence exists)
        if (arr.length === 0) return 0;

        // Use a Set to store unique elements from the array for O(1) lookups
        const numSet = new Set(arr);
        let longest = 0; // Variable to track the length of the longest consecutive subsequence

        // Iterate through each unique number in the set
        for (const num of numSet) {
            // If the previous number (num - 1) does not exist, it might be the start of a subsequence
            if (!numSet.has(num - 1)) {
                let currentNum = num; // Start with the current number
                let count = 1; // Start the count for the consecutive sequence

                // Check for the next consecutive numbers
                while (numSet.has(currentNum + 1)) {
                    currentNum++; // Increment to the next number
                    count++; // Increase the count for the sequence length
                }

                // Update the longest subsequence length found
                longest = Math.max(longest, count);
            }
        }

        // Return the length of the longest subsequence found
        return longest;
    }
}
