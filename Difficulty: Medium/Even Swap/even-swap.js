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
    if (!arr[i]) arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let a = readLine().trim().split(" ");
    let obj = new Solution();
    let res = obj.lexicographicallyLargest(a,n);
    printArray(res,res.length);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string[]} a
 * @param {number} n
 * @returns {string}
*/

class Solution {
    lexicographicallyLargest(a, n) {
        // Create a copy of the array
        let result = [...a];
        
        let i = 0;
        while (i < n) {
            let start = i;
            
            // Find the segment of elements that can be swapped (both even or both odd)
            while (i + 1 < n && (a[i] % 2 === a[i + 1] % 2)) {
                i++;
            }
            
            // Extract the segment and sort it in reverse order (largest lexicographically)
            let segment = result.slice(start, i + 1);
            segment.sort((x, y) => y - x);
            
            // Place the sorted segment back into the result array
            for (let j = 0; j < segment.length; j++) {
                result[start + j] = segment[j];
            }
            
            i++;
        }
        
        return result;
    }
}
