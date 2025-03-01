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
        let obj = new Solution();
        let res = obj.maxSum(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    // Function to find the maximum sum based on the given conditions
    maxSum(n) {
        // Initialize the dp array with some base values
        let dp = [0, 1, 2, 3, 4];
        
        // Iterate from 5 to n to fill the dp array
        for (let i = 5; i <= n; i++) {
            // Calculate the values based on divisions by 2, 3, and 4
            let n1 = parseInt(i / 2);
            let n2 = parseInt(i / 3);
            let n3 = parseInt(i / 4);
            
            // Update dp[i] with the maximum value between sum of dp[n1], dp[n2], dp[n3] and i itself
            dp[i] = Math.max(dp[n1] + dp[n2] + dp[n3], i);
        }
        
        // Return the result for dp[n]
        return dp[n];
    }
}
