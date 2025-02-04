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
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countWays(n, k);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    countWays(n, k) {
        // Base cases for when there are 0, 1, or 2 posts
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return k;
        }
        if (n === 2) {
            return k * k;
        }

        // Initialize dp array where dp[i] represents the number of ways to paint i posts
        let dp = new Array(n + 1).fill(0);
        dp[0] = 0;
        dp[1] = k;
        dp[2] = k * k;

        // Calculate the number of ways for each number of posts from 3 to n
        for (let i = 3; i <= n; i++) {
            dp[i] = (dp[i - 1] + dp[i - 2]) * (k - 1);
        }

        // Return the result for n posts
        return dp[n];
    }
}
