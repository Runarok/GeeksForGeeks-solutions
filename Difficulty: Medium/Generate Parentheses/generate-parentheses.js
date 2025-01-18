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
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.AllParenthesis(N);
    res.sort();
    for(let s of res)
      console.log(s);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {string[]}
 */
class Solution {
    AllParenthesis(N) {
        let result = [];
        
        // Helper function for backtracking
        function generate(currentString, openCount, closeCount) {
            // If the current string has reached a valid length, add it to the result
            if (currentString.length === 2 * N) {
                result.push(currentString);
                return;
            }
            
            // If we can still add an opening parenthesis, do it
            if (openCount < N) {
                generate(currentString + '(', openCount + 1, closeCount);
            }
            
            // If we can still add a closing parenthesis, do it
            if (closeCount < openCount) {
                generate(currentString + ')', openCount, closeCount + 1);
            }
        }
        
        // Start the backtracking with an empty string and 0 opening and closing parentheses used
        generate("", 0, 0);
        
        return result;
    }
}
