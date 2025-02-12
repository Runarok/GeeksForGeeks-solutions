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

        let arr = new Array(n);

        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            arr[i] = new Array(3);
            for (let j = 0; j < 3; j++) {
                arr[i][j] = parseInt(input_line[j]);
            }
        }

        let obj = new Solution();
        let ans = obj.maximumPoints(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the maximum points among all possible choices.
    maximumPoints(arr) {
        let n = arr.length;
        
        // Creating a memoization table initialized with -1
        let dp = Array.from({ length: n }, () => new Array(4).fill(-1));

        return this.helper(arr, n - 1, 3, dp);
    }

    helper(arr, rowIndex, lastSelected, dp) {
        // Base Case: If we are at the first row, find the maximum possible points
        if (rowIndex === 0) {
            let maxPoints = -Infinity;
            for (let i = 0; i < 3; i++) {
                if (i !== lastSelected) {
                    maxPoints = Math.max(maxPoints, arr[rowIndex][i]);
                }
            }
            return maxPoints;
        }

        // If the result is already computed, return it
        if (dp[rowIndex][lastSelected] !== -1) return dp[rowIndex][lastSelected];

        let maxPoints = -Infinity;

        // Iterating through possible choices and ensuring not selecting the last activity
        for (let i = 0; i < 3; i++) {
            if (i !== lastSelected) {
                let points = arr[rowIndex][i] + this.helper(arr, rowIndex - 1, i, dp);
                maxPoints = Math.max(maxPoints, points);
            }
        }

        // Storing the computed result for memoization
        return (dp[rowIndex][lastSelected] = maxPoints);
    }
}
