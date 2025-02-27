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
    let n = parseInt(readLine());
    let list = readLine().trim().split(" ");
    let obj = new Solution();
    let res = obj.countWords(list, n);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string[]} list
 * @param {number} n
 * @return {number}
 */
class Solution {
    countWords(list, n) {
        // Map to store the frequency of each word
        const wordFrequencyMap = new Map();

        // Loop through the list to populate the map
        for (const word of list) {
            wordFrequencyMap.set(word, (wordFrequencyMap.get(word) || 0) + 1);
        }

        // Counter to track how many words appear exactly twice
        let exactlyTwiceCount = 0;

        // Loop through the frequency values to count words appearing exactly twice
        for (const frequency of wordFrequencyMap.values()) {
            if (frequency === 2) {
                exactlyTwiceCount++;
            }
        }

        // Return the final count
        return exactlyTwiceCount;
    }
}
