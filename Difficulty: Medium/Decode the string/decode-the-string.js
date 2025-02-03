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
    let res = obj.decodedString(S);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string}
 */

class Solution {
    decodedString(s) {
        let stack = [];
        let n = s.length;

        // Traverse the string
        for (let i = 0; i < n; i++) {
            if (s[i] !== ']') {
                stack.push(s[i]);
            } else {
                let substring = "";
                
                // Extract the substring inside the brackets
                while (stack[stack.length - 1] !== '[') {
                    substring = stack.pop() + substring;
                }
                stack.pop();  // Remove the '['

                // Extract the multiplier for the substring
                let k = "";
                while (stack.length && !isNaN(stack[stack.length - 1])) {
                    k = stack.pop() + k;
                }

                // Multiply the substring and push it back to the stack
                stack.push(substring.repeat(parseInt(k)));
            }
        }

        return stack.join('');
    }
}
