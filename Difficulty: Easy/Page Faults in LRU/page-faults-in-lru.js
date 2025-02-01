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
    let N = parseInt(readLine());
    let pages = readLine()
      .split(" ")
      .map((x) => parseInt(x));
    let C = parseInt(readLine());
    let obj = new Solution();
    let res = obj.pageFaults(N, C, pages);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N - Number of pages
 * @param {number} C - Capacity of the cache
 * @param {number[]} pages - List of pages accessed in order
 * @return {number} - Total number of page faults
 */

class Solution {

    // Function to calculate the number of page faults using the Least Recently Used (LRU) page replacement algorithm
    pageFaults(N, C, pages) {

        let count = 0; // To count page faults
        let cache = new Map(); // Cache to store pages (using Map for quick lookup)

        // Iterate over each page accessed
        for (let page of pages) {

            let val = cache.get(page); // Check if the page is already in cache

            // If page is not found in cache, it's a page fault
            if (!val) {
                ++count;
            }

            // If the cache is full and the page is not found, remove the least recently used page
            if (cache.size == C && !val) {
                let key = cache.keys().next().value; // Get the least recently used page
                cache.delete(key); // Remove it from the cache
            }

            // If the page is already in cache, remove it first to update the position
            if (val) {
                cache.delete(page);
            }

            // Add the current page to the cache
            cache.set(page, page + "");
        }

        return count; // Return the total number of page faults
    }
}
