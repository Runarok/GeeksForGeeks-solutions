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
    let s = readLine().trim();
    let obj = new Solution();
    let res = obj.printMinNumberForPattern(s);
    console.log(res);
  
console.log("~");
}

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {string} 
*/

class Solution {
    printMinNumberForPattern(s) {
        const n = s.length;
        const result = [];
        const stack = [];
        
        // Push digits 1 to n+1 to stack
        let num = 1;
        
        // Traverse the pattern string
        for (let i = 0; i <= n; i++) {
            stack.push(num++);
            
            // If we are at the end of the string or the current pattern is 'I', we pop from the stack
            if (i === n || s[i] === 'I') {
                // Pop elements from the stack and add to the result
                while (stack.length > 0) {
                    result.push(stack.pop());
                }
            }
        }
        
        // Convert result array to a string and return it
        return result.join('');
    }
}
