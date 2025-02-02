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
    let n = parseInt(readLine());
    let arr = [];
    for(let j = 0;j < n;j++){
      let inputLine = readLine().trim();
      arr.push(inputLine);
    }
    let k  =parseInt(readLine());
    let str = readLine().trim();
    let obj = new Solution();
    let res = obj.klengthpref(arr,n,k,str);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @param {number} k
 * @param {string} str
 * @return {number} 
*/

class Solution {
  // Function to count words starting with the given prefix of length k
  klengthpref(arr, n, k, str) {
      let count = 0;
      // Extract the prefix of length k from the string
      const prefix = str.slice(0, k);
      
      // If the prefix length is smaller than k, return 0
      if (prefix.length < k) return count;
      
      // Iterate through the array of words and count those that start with the prefix
      for (let word of arr) {
          if (word.startsWith(prefix)) count++;
      }
      
      return count; // Return the count of words with the given prefix
  }
}
