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
    

    let k = parseInt(readLine());
    let s = readLine();
    let obj = new Solution();

    let res = obj.Reduced_String(k,s);
    console.log(res);

  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */

class Solution {
    Reduced_String(k, s) {
        // Edge case: If k == 1, all characters are removed
        if (k === 1) {
            return "";
        }

        let stack = [];

        // Traverse the string
        for (let char of s) {
            // If the stack is not empty and the current character matches the last one
            if (stack.length && stack[stack.length - 1][0] === char) {
                stack[stack.length - 1][1] += 1;  // Increment the count
                // If the count reaches k, pop the group
                if (stack[stack.length - 1][1] === k) {
                    stack.pop();
                }
            } else {
                // Push the character with count 1
                stack.push([char, 1]);
            }
        }

        // Construct the reduced string from the stack
        let result = "";
        for (let [char, count] of stack) {
            result += char.repeat(count);
        }

        return result;
    }
}
