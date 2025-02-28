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
        let [n, p, q] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.moves(n, p, q);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to find the number of moves to move from p to q.
     * @param {number} n - The target number.
     * @param {number} p - The first step size.
     * @param {number} q - The second step size.
     * @returns {number} - The minimum number of moves to reach n using steps p and q, or -1 if it's impossible.
     */
    moves(n, p, q) {
        // Initialize the dp array with Infinity to represent unreachable positions.
        // dp[i] will store the minimum moves required to reach position i.
        const dp = new Array(n + 1).fill(Infinity);
        
        // Base case: 0 moves required to reach position 0.
        dp[0] = 0;

        // Loop through all possible positions from 0 to n.
        for (let i = 0; i <= n; i++) {
            // Check if it's possible to reach position i using step size p.
            if (i - p >= 0) {
                dp[i] = Math.min(dp[i], dp[i - p] + 1);  // Update the dp value with the minimum moves.
            }

            // Check if it's possible to reach position i using step size q.
            if (i - q >= 0) {
                dp[i] = Math.min(dp[i], dp[i - q] + 1);  // Update the dp value with the minimum moves.
            }
        }

        // If dp[n] is still Infinity, it means it's not possible to reach position n.
        return dp[n] === Infinity ? -1 : dp[n];
    }
}
