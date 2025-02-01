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
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.arrangeTiles(N);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the number of ways to arrange 1x4 tiles to cover a 1xN floor.
     * @param {number} N - The length of the floor.
     * @return {number} - The number of ways to arrange the tiles.
     */
    arrangeTiles(N) {
        // Initialize a DP array to store results for subproblems
        const dp = new Array(N + 1).fill(0);
        
        // Base cases: For N = 1, 2, 3, only one way to arrange (all vertical)
        for (let i = 1; i < 4; i++) {
            dp[i] = 1;
        }
        
        // For N = 4, two ways: all vertical or one horizontal row
        dp[4] = 2;
        
        // Compute the number of ways for N > 4 using the recurrence relation
        for (let i = 5; i <= N; i++) {
            dp[i] = dp[i - 1] + dp[i - 4]; // Adding last tile vertically or filling a row horizontally
        }
        
        return dp[N];
    }
}
