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

function printList(res, n) {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += res[i];
    s += " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = readLine();
    let obj = new Solution();
    let res = obj.TotalCount(n);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    TotalCount(s) {
        const n = s.length; // Get the length of the string
        const maxl = 100; // Set the maximum length for the dp array
        const dp = Array.from({ length: maxl }, () => Array(9 * maxl + 1).fill(-1)); // Initialize dp array with -1

        // Define a recursive helper function
        const helper = (p, psum) => {
            if (p === n) { // If we have reached the end of the string
                return 1; // Return 1 to indicate a valid combination
            }
            if (dp[p][psum] !== -1) { // If the value is already evaluated
                return dp[p][psum]; // Return the stored value
            }

            let ans = 0;
            let sumd = 0;
            dp[p][psum] = 0;

            // Iterate over the string starting from position p
            for (let i = p; i < n; i++) {
                sumd += parseInt(s[i]); // Calculate the sum of digits from position p to i
                if (sumd >= psum) { // If the sum is greater than or equal to psum
                    ans += helper(i + 1, sumd); // Recursively call the helper function
                }
            }

            dp[p][psum] = ans; // Store the result in dp array
            return dp[p][psum]; // Return the result
        };

        return helper(0, 0); // Call the helper function to get the final answer
    }
}
