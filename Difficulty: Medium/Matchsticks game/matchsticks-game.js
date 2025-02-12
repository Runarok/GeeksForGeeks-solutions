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
        let n = BigInt(readLine());
        let obj = new Solution();
        let res = obj.matchGame(n);
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to determine the optimal move in the "Match Game" based on the given number N.
     * 
     * @param {BigInt} N - The current number in the game
     * @returns {number} - The optimal move (1, 2, 3, or 4) or -1 if N is a losing position
     */
    matchGame(N) {
        // Ensure N is treated as BigInt
        N = BigInt(N);

        // Check if N is a losing position
        if (N % 5n === 0n) {
            return -1;  // N is a losing position, so no optimal move
        }

        // Iterate through possible moves (1, 2, 3, or 4)
        for (let x = 1n; x <= 4n; x++) {
            // Check if subtracting x leads to a losing position
            if ((N - x) % 5n === 0n) {
                return Number(x); // Convert BigInt to regular number for the output
            }
        }

        return -1; // Default fallback, though this should never happen
    }
}
