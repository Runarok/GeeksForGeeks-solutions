//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countBT(n);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countBT(n) {
        // Initialize dp array to store the number of binary trees for each value of n
        const dp = new Array(n + 1).fill(0);
        
        // Base cases: a tree with 0 or 1 nodes has only 1 structure
        dp[0] = 1;
        dp[1] = 1;
        
        // Calculate the number of binary trees for each n from 2 to n
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] * (2 * dp[i - 2] + dp[i - 1]);  // Formula for number of binary trees
        }
        
        // Return the result for n nodes
        return dp[n];
    }
}
