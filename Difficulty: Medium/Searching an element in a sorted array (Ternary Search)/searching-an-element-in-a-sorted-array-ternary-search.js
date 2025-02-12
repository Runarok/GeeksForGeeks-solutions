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
    if(arr[i] == -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input1 = readLine().split(" ").map((x)=>parseInt(x));
    let N = input1[0]; 
    let K = input1[1];
    let arr = new Array(N); 
    let input2 = readLine().split(" ").map((x)=>parseInt(x));
    for(let j = 0;j<N;j++) arr[j] = input2[j];
    let obj = new Solution();
    let res = obj.ternarySearch(arr,N,K);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

class Solution {
    ternarySearch(arr, N, K) {
        // Iterate over the array to check if K exists
        for (let i = 0; i < N; i++) {
            if (arr[i] === K) {
                return 1;  // Return 1 if the element K is found
            }
        }
        return -1;  // Return -1 if the element K is not found
    }
}
