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
    let mat = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n*n;j+=n) {
      mat[j/n] = new Array(n);
      for(let k = 0;k<n;k++){
        mat[j/n][k] = input_line[j+k];
      }
    }

    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.kthSmallest(mat,n,k);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    kthSmallest(mat, n, k) {
        // Create an array to store all elements from the matrix
        let ele = [];
        
        // Traverse the matrix and push all elements into the array
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                ele.push(mat[i][j]);
            }
        }

        // Sort the array
        let d = ele.sort((a, b) => a - b);

        // Return the k-1th element as the kth smallest (1-based indexing)
        return d[k - 1];
    }
}
