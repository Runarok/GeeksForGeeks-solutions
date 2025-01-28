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
    let input = readLine().split(' ').map(x => parseInt(x));
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(input[i]);
    }
    let obj = new Solution();
    let res = obj.smallestpositive(arr, n);
    console.log(res);
  
console.log("~");
}
}


// } Driver Code Ends

class Solution {
    smallestpositive(arr, n) {
        // Sort the array in ascending order to ensure we check the smallest numbers first
        arr = arr.sort((a, b) => a - b);

        let sum = arr[0];

        // If the smallest element is greater than 1, return 1 as the smallest positive missing number
        if (sum > 1) return 1;

        // Traverse through the sorted array
        for (let i = 1; i < n; i++) {
            // Calculate the difference between the current element and the cumulative sum so far
            let diff = arr[i] - sum;

            // If the difference is greater than 1, return the smallest missing positive number
            // This means there's a gap where a positive number cannot be formed by the sum of previous numbers
            if (diff > 1) {
                return sum + 1;
            }

            // Otherwise, add the current element to the sum to keep track of the sum of numbers seen so far
            sum += arr[i];
        }

        // If no gaps are found, return the next number after the sum of all elements
        return sum + 1;
    }
}
