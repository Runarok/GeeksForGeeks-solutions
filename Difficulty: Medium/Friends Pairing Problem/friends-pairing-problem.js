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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countFriendsPairings(n);
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

    // Function to calculate the number of ways friends can be paired
    countFriendsPairings(n) {
        // Initialize a DP array to store the results for subproblems, filled with -1 initially
        let dp = new Array(n + 1).fill(-1);
        // Call the helper function to compute the result using memoization
        return this.solveMem(n, dp);
    }

    // Helper function to solve the problem using memoization
    solveMem(n, dp) {
        // Base case: if there are 2 or fewer people, return n (since all friends can either be paired or stay alone)
        if (n <= 2) return n;

        // If the result for this subproblem has already been computed, return the cached result
        if (dp[n] !== -1) return dp[n];

        // Otherwise, calculate the number of pairings recursively:
        // The first person can either stay alone or pair up with (n-1) other people.
        return dp[n] = this.solveMem(n - 1, dp) + ((n - 1) * this.solveMem(n - 2, dp));
    }
}
