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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let obj = new Solution();
        let ans = obj.numTrees(n);
        if (ans == -0) ans = 0;
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to return the total number of possible unique BST.
    numTrees(n) {
        // dp array to store the number of unique BSTs for each number of nodes
        let dp = new Array(n + 1).fill(0);
        
        // Base cases
        dp[0] = 1; // An empty tree is a valid BST.
        dp[1] = 1; // A single node tree is a valid BST.
        
        // Compute the number of unique BSTs for each value from 2 to n
        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }
        
        // The result for n nodes
        return dp[n];
    }
}
