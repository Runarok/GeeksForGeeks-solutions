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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let obj = new Solution();
        console.log(obj.numOfWays(n, m));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

class Solution {
    // Function to find out the number of ways we can place a black and a
    // white Knight on this chessboard such that they cannot attack each other.
    numOfWays(N, M) {
        const MOD = 1000000007;

        // Calculate the total ways to place two knights on the board
        let totalWays = (N * M) * (N * M - 1) % MOD;

        let attackedWays = 0;

        // Directions where a knight can attack from a given position
        const directions = [
            [-2, -1], [-2, 1], [2, -1], [2, 1],
            [-1, -2], [-1, 2], [1, -2], [1, 2]
        ];

        // Loop through each cell on the chessboard
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < M; c++) {
                let count = 0;

                // Count how many positions the knight can attack from the current cell
                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;
                    // Check if the attack is within bounds of the board
                    if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
                        count++;
                    }
                }

                // Accumulate the attacked ways
                attackedWays += count;
            }
        }

        // Subtract the attacked ways from the total to get the non-attacked configurations
        let result = (totalWays - attackedWays + MOD) % MOD;

        return result;
    }
}
