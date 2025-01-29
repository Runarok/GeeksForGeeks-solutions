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
    let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
  
    let costs = new Array(n);
    for(let j = 0;j < n;j++){
      costs[j] = readLine().trim().split(" ").map((x) => parseInt(x));
    }
 
    let obj = new Solution();
    let res = obj.minCost(costs,n,m);
 
    console.log(res);
  
console.log("~");
}



}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} costs
 * @returns {number}
*/

class Solution {
    // Function to find the minimum cost to paint all walls such that no two adjacent walls have the same color.
    minCost(costs) {
        let N = costs.length;
        if (N === 0) {
            return 0;
        }
        let K = costs[0].length;
        if (K === 1 && N > 1) {
            return -1;
        }
        
        // DP table where dp[i][j] stores the minimum cost to paint the first i+1 walls,
        // where wall i is painted with color j.
        let dp = Array.from({ length: N }, () => Array(K).fill(0));

        // Initialize the dp table for the first wall
        for (let j = 0; j < K; j++) {
            dp[0][j] = costs[0][j];
        }

        // Iterate over the remaining walls
        for (let i = 1; i < N; i++) {
            // Precompute the minimum and second minimum costs from the previous wall
            let minCost = Infinity;
            let secondMinCost = Infinity;
            let minCostIndex = -1;

            // Find the minimum and second minimum cost for the previous row
            for (let j = 0; j < K; j++) {
                if (dp[i - 1][j] < minCost) {
                    secondMinCost = minCost;
                    minCost = dp[i - 1][j];
                    minCostIndex = j;
                } else if (dp[i - 1][j] < secondMinCost) {
                    secondMinCost = dp[i - 1][j];
                }
            }

            // Calculate the dp values for the current wall i
            for (let j = 0; j < K; j++) {
                if (j === minCostIndex) {
                    dp[i][j] = costs[i][j] + secondMinCost;
                } else {
                    dp[i][j] = costs[i][j] + minCost;
                }
            }
        }

        // The answer is the minimum cost of painting all walls
        return Math.min(...dp[N - 1]);
    }
}
