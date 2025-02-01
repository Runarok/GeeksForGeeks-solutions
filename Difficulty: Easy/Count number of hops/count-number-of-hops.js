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
        let ans = obj.countWays(n);
        if (ans == -0n) ans = 0n;
        console.log(ans.toString());

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {int}
 */

class Solution {
    // Function to count the number of ways in which frog can reach the top.
    countWays(n) {
        // Base cases
        if (n === 1 || n === 2) {
            return n;
        }
        if (n === 3) {
            return 4;
        }

        // Initialize the first three numbers in the series
        let f = 1, s = 2, t = 4;

        // Loop through to calculate the number of ways from 4 to n
        for (let i = 4; i <= n; i++) {
            let temp = f + s + t;  // The sum of previous three terms
            f = s;  // Move f to s
            s = t;  // Move s to t
            t = temp;  // Move t to the new sum
        }

        return t;
    }
}
