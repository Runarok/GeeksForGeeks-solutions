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
    let [n, m] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));

    let A = [];

    for (let j = 0; j < n * m; j += m) {
      let row = readLine()
        .trim()
        .split(" ")
        .map((x) => parseInt(x));
      A.push(row);
    }
    let [x, y] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.shortestDistance(n, m, A, x, y);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} A
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */

class Solution {
  shortestDistance(N, M, A, X, Y) {
    // If the start point is blocked, return -1
    if (A[0][0] === 0) {
      return -1;
    }

    // Directions for moving up, down, left, and right
    const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];

    // Queue for BFS, stores tuples (x, y, steps)
    const queue = [[0, 0, 0]];  // Starting point (0,0) with 0 steps
    const visited = Array.from({ length: N }, () => Array(M).fill(false));  // Visited cells grid
    visited[0][0] = true;

    // Perform BFS
    while (queue.length > 0) {
      const [x, y, steps] = queue.shift();

      // If we reach the destination (X, Y), return the number of steps
      if (x === X && y === Y) {
        return steps;
      }

      // Check all possible directions
      for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        // Check if the new position is within bounds, not visited, and not blocked
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny] && A[nx][ny] === 1) {
          visited[nx][ny] = true;  // Mark as visited
          queue.push([nx, ny, steps + 1]);  // Add new position with incremented steps
        }
      }
    }

    // If we can't reach the destination, return -1
    return -1;
  }
}
