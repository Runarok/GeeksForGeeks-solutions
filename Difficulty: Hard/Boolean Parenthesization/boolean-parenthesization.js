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
        let s = readLine().trim();
        let obj = new Solution();
        console.log(obj.countWays(s));
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} S
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countWays(S) {
        let n = S.length;
        
        // Initialize DP tables
        let dpTrue = Array(n).fill(null).map(() => Array(n).fill(0));
        let dpFalse = Array(n).fill(null).map(() => Array(n).fill(0));

        // Base case: Single symbols
        for (let i = 0; i < n; i++) {
            if (S[i] === 'T') {
                dpTrue[i][i] = 1;
                dpFalse[i][i] = 0;
            } else if (S[i] === 'F') {
                dpTrue[i][i] = 0;
                dpFalse[i][i] = 1;
            }
        }

        // Fill DP tables for sub-expressions of length > 1
        for (let length = 3; length <= n; length += 2) {
            for (let i = 0; i <= n - length; i++) {
                let j = i + length - 1;

                // Check all possible positions for operators
                for (let k = i + 1; k < j; k += 2) {
                    let leftTrue = dpTrue[i][k - 1];
                    let leftFalse = dpFalse[i][k - 1];
                    let rightTrue = dpTrue[k + 1][j];
                    let rightFalse = dpFalse[k + 1][j];
                    let operator = S[k];

                    if (operator === '&') {
                        dpTrue[i][j] += leftTrue * rightTrue;
                        dpFalse[i][j] += leftTrue * rightFalse + leftFalse * rightTrue + leftFalse * rightFalse;
                    } else if (operator === '|') {
                        dpTrue[i][j] += leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
                        dpFalse[i][j] += leftFalse * rightFalse;
                    } else if (operator === '^') {
                        dpTrue[i][j] += leftTrue * rightFalse + leftFalse * rightTrue;
                        dpFalse[i][j] += leftTrue * rightTrue + leftFalse * rightFalse;
                    }
                }
            }
        }

        return dpTrue[0][n - 1];
    }
}
