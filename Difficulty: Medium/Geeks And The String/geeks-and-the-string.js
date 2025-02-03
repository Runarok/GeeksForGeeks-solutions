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
    let str = readLine();
    let obj = new Solution();
    let res = obj.removePair(str);
    console.log(res);
  
console.log("~");
}
}

// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/

class Solution {

    // Function to remove pair of duplicates from given string using Stack.
    removePair(s) {
        let stack = [];

        // Iterate through the string
        for (let i = 0; i < s.length; i++) {
            // If the stack is not empty and the top element matches the current character, pop the stack
            if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
                stack.pop();
            } else {
                // Otherwise, push the current character onto the stack
                stack.push(s[i]);
            }
        }

        // If the stack is empty, return '-1' (no characters left)
        if (stack.length > 0) {
            return stack.join('');
        } else {
            return '-1';
        }
    }
}
