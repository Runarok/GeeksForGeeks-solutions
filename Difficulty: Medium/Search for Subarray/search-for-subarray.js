//{ Driver Code Starts
const readline = require("readline");
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let t;
let testCases = [];

rl.on("line", (line) => {
      if (typeof t === "undefined") {
          t = parseInt(line);
      } else {
          testCases.push(line);
          if (testCases.length === t * 2) {
              rl.close();
          }
      }
  }).on("close", () => {
    let solution = new Solution();
    for (let i = 0; i < testCases.length; i += 2) {
        let a = testCases[i].trim().split(" ").map(Number);
        let b = testCases[i + 1].trim().split(" ").map(Number);
        let indices = solution.search(a, b);
        if (indices.length === 0) {
            console.log("[]");
        } else {
            console.log("[" + indices.join(", ") + "]");
        }
        console.log("~");
    }
});
// } Driver Code Ends

class Solution {

    // Function to calculate the Longest Prefix Suffix (LPS) Array for the given pattern
    calculateLPS_Array(pattern) {
        let n = pattern.length;

        // Corner cases for empty or single-character pattern
        if (n === 0) return [];  // return empty array if pattern is empty
        if (n === 1) return [0]; // return [0] if pattern has only one character

        let lps = Array(n).fill(0); // initialize the lps[] array with 0
        let len = 0;  // length of the previous longest prefix suffix
        let i = 1;    // start iterating from the second character

        // Loop through the pattern to compute the LPS array
        while (i < n) {
            // If there's a match, increment len and store in lps
            if (pattern[len] === pattern[i]) {
                len++;
                lps[i] = len;
                i++;  // move to the next character
            } else {
                // If no match and len is 0, just move to the next character
                if (len === 0) {
                    lps[i] = 0;
                    i++;
                } else {
                    // If mismatch, update len to the previous lps value to avoid redundant comparisons
                    len = lps[len - 1];
                }
            }
        }

        return lps;  // return the calculated LPS array
    }

    // Function to search for the pattern in the given text using the KMP algorithm
    search(txt, pat) {
        let pat_len = pat.length;
        let txt_len = txt.length;

        // If the text is smaller than the pattern, return an empty array
        if (txt_len < pat_len) return [];

        let i = 0;  // pointer for the text
        let j = 0;  // pointer for the pattern
        let ans = [];  // stores the indices where pattern matches the text

        let lps = this.calculateLPS_Array(pat);  // compute the LPS array for the pattern

        // Loop through the text to search for the pattern
        while (i < txt_len) {
            // If there's a match, move both pointers forward
            if (txt[i] === pat[j]) {
                i++;
                j++;

                // If the entire pattern has been matched, store the starting index of the match
                if (j === pat_len) {
                    ans.push(i - j);  // store the index where the pattern starts in the text

                    // Use the LPS value to skip redundant comparisons
                    j = lps[j - 1];
                }
            } 
            // If there's a mismatch
            else {
                // If j is 0, just move the text pointer
                if (j === 0) i++;
                else j = lps[j - 1];  // move the pattern pointer using the LPS array
            }
        }

        return ans;  // return all the matching indices
    }
}
