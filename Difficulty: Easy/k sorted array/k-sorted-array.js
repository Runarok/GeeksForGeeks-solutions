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
function printArray(arr) {
  let s = "";
  for (let i of arr) {
    s = s + i + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.isKSortedArray(arr, n, k);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

class Solution {
    isKSortedArray(arr, n, k) {
        // Create a sorted copy of the array
        const sortedArr = [...arr].sort((a, b) => a - b);
        
        // Iterate over the array to check if each element is within the k-sorted range
        for (let i = 0; i < n; i++) {
            // If the element is not in the correct sorted position, check if it can be placed within the k distance
            if (arr[i] !== sortedArr[i]) {
                // Define the range to search for the element
                let low = (i - k) >= 0 ? i - k : 0; 
                let high = (i + k) < n ? i + k : n - 1;
                let found = false;

                // Perform binary search within the range to find the element
                while (low <= high) {
                    let mid = (low + high) >> 1;
                    
                    // If the element matches, mark it as found
                    if (sortedArr[mid] === arr[i]) {
                        found = true;
                        break;
                    } else if (sortedArr[mid] < arr[i]) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }

                // If the element was not found within the allowed range, return "No"
                if (!found) return "No";
            }
        }

        // If all elements are within the k-sorted range, return "Yes"
        return "Yes";
    }
}
