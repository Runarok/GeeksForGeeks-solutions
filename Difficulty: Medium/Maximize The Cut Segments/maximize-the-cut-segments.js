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
        let n = parseInt(readLine());
        let x = parseInt(readLine());
        let y = parseInt(readLine());
        let z = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.maximizeTheCuts(n, x, y, z);
        if (ans == -0) ans = 0;
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of cuts.
    maximizeTheCuts(n, x, y, z) {
        let memo = {};
        
        // Helper function to recursively find the maximum cuts
        const rec = (level) => {
            if (level === 0) {
                return 0;  // Base case: no length remaining to cut
            }
            
            if (level in memo) {
                return memo[level];  // Return the result from memoization if already calculated
            }
            
            let maxCuts = -Infinity;  // Initialize maxCuts to negative infinity
            
            // Try cutting with each possible piece length (x, y, z)
            for (let choice of [x, y, z]) {
                if (level - choice >= 0) {
                    let cuts = rec(level - choice);
                    if (cuts !== -Infinity) {  // If it's a valid cut
                        maxCuts = Math.max(maxCuts, 1 + cuts);
                    }
                }
            }
            
            memo[level] = maxCuts;  // Memoize the result for this level
            return maxCuts;
        };
        
        let res = rec(n);  // Start the recursive calculation
        return res === -Infinity ? 0 : res;  // Return 0 if no valid cuts are possible
    }
}
