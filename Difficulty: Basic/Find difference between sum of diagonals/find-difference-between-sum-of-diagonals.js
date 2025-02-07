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
        let n = parseInt(readLine());
        let grid = [];
        for (let j = 0; j < n; j++) {
            let row = readLine().trim().split(" ").map((x) => parseInt(x));

            grid.push(row);
        }
        let obj = new Solution();
        let res = obj.diagonalSumDifference(grid, n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} grid
 * @param {number} n
 * @return {number}
 */

class Solution {
    diagonalSumDifference(Grid, N) {
        let primaryDiagonalSum = 0; // Sum of the main diagonal
        let secondaryDiagonalSum = 0; // Sum of the secondary diagonal
        let n = Grid.length;

        for (let i = 0; i < n; i++) {
            primaryDiagonalSum += Grid[i][i]; // Summing elements from the main diagonal
            secondaryDiagonalSum += Grid[i][n - 1 - i]; // Summing elements from the secondary diagonal
        }

        return Math.abs(primaryDiagonalSum - secondaryDiagonalSum); // Return absolute difference
    }
}
