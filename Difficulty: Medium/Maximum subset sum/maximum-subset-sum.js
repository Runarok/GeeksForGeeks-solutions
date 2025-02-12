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
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) =>parseInt(x));
        let obj = new Solution();
        let res = obj.findMaxSubsetSum(n,arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} A
 * @returns {number}
*/

class Solution {
    // Function to find the maximum sum of a non-empty subarray with no two consecutive elements.
    findMaxSubsetSum(N, A) {
        // Initializing the dp array with 0
        let dp = new Array(N+1);
        for(let i = 0; i <= N; i++) {
            dp[i] = [0, 0];
        }

        dp[0][0] = 0;  // Base case: no elements
        dp[0][1] = 0;  // Base case: no elements
        
        // Looping through the elements
        for(let i = 1; i <= N; i++) {
            
            // Calculating the maximum subset sum with and without including the current element
            dp[i][0] = dp[i-1][1];  // If we don't include the current element
            dp[i][1] = Math.max(dp[i-1][0] + A[i-1], dp[i-1][1] + A[i-1]);  // If we include the current element
        }
        
        // Returning the maximum subset sum
        return Math.max(dp[N][0], dp[N][1]);
    }
}
