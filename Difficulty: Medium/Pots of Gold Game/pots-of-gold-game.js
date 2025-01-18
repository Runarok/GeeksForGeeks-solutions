//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.maxCoins(A,N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} N
 * @return {number}
*/

class Solution {
    maxCoins(A, N) {
        // Create a DP table to store the maximum coins X can collect
        let dp = Array.from({ length: N }, () => Array(N).fill(0));
        
        // Create a prefix sum array to calculate the sum of any subarray efficiently
        let sum = Array(N).fill(0);
        sum[0] = A[0];
        for (let i = 1; i < N; i++) {
            sum[i] = sum[i - 1] + A[i];
        }
        
        // Base case: when i == j, the only option is to pick the pot at A[i]
        for (let i = 0; i < N; i++) {
            dp[i][i] = A[i];
        }
        
        // Fill the DP table for subarrays of length 2 to N
        for (let len = 2; len <= N; len++) {
            for (let i = 0; i <= N - len; i++) {
                let j = i + len - 1;
                let totalSum = sum[j] - (i > 0 ? sum[i - 1] : 0);
                dp[i][j] = Math.max(
                    A[i] + (totalSum - A[i] - dp[i + 1][j]),
                    A[j] + (totalSum - A[j] - dp[i][j - 1])
                );
            }
        }
        
        // The result is the maximum coins X can collect from the entire array
        return dp[0][N - 1];
    }
}
