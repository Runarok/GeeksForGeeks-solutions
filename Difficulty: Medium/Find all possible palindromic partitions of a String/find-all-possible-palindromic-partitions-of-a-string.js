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
    let res = obj.allPalindromicPerms(S);
    for(let row of res)
      printArray(row,row.length);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} S
 * @return {string[][]}
 */

class Solution {
    // Function to find all palindromic permutations of a given string S
    allPalindromicPerms(S) {
        
        // Helper function to check if a substring is a palindrome
        const isPalindrome = (str, low, high) => {
            // Compare characters from both ends moving towards the center
            while(low < high){
                if(str[low] !== str[high]) 
                    return false;  // If characters don't match, it's not a palindrome
                low++;
                high--;
            }
            return true;  // If loop completes, it's a palindrome
        }

        // Helper function to find all possible palindromic partitions
        const allPalPartUtil = (allPart, currPart, start, n, str) => {
            // If we've reached the end of the string, add the current partition to the result
            if(start >= n){
                allPart.push([...currPart]);  // Add a copy of the current partition
                return;
            }

            // Try every possible substring starting from index 'start'
            for(let i = start; i < n; i++) {
                // Check if the current substring is a palindrome
                if(isPalindrome(str, start, i)) {
                    // If palindrome, add it to the current partition
                    currPart.push(str.substring(start, i + 1));
                    // Recursively find the rest of the palindrome partitions
                    allPalPartUtil(allPart, currPart, i + 1, n, str);
                    // Backtrack: remove the last substring to try a different partition
                    currPart.pop();
                }
            }
        };

        const n = S.length;
        // Arrays to store all partitions and the current partition in progress
        const allPart = [], currPart = [];
        
        // Call the helper function to start finding partitions
        allPalPartUtil(allPart, currPart, 0, n, S);
        
        // Return the list of all palindromic partitions
        return allPart;
    }
}
