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
    let [N,M] = readLine().trim().split(" ").map((X) => parseInt(X));
    let Matrix = [];
    for(let j = 0;j < N;j++){
      let inputLine = readLine().trim().split(" ").map((X) => parseInt(X));
      Matrix.push(inputLine);
    }
    let obj = new Solution();
    let res = obj.repeatedRows(Matrix,M,N);
    let s = "";
    for(let j = 0;j<res.length;j++)
      s=s+res[j] + " ";
    console.log(s);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} Matrix
 * @param {number} M
 * @param {number} N
 * @return {number[]} 
*/

class Solution {
  repeatedRows(Matrix, M, N){
    // Initialize an empty map to store row occurrences
    let i = 0;
    let map = {};
    let arr = [];

    // Traverse each row in the matrix
    for(i = 0; i < N; i++){
        // Convert the row to a string to easily compare it
        let s = Matrix[i].join('');

        // If the row is not seen before, store it in the map
        if(map[s] === undefined){
            map[s] = 1;
        } else {
            // If the row has been seen before, increment its count and add the row index to the result
            map[s]++;
            arr.push(i);
        }
    }

    // Return the list of row indices that have repeated occurrences
    return arr;
  }
}
