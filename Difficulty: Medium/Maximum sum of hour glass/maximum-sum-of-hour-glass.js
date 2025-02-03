//{ Driver Code Starts
//Initial Template for javascript


"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
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
        let input1 = readLine().split(" ").map((x) => parseInt(x));
        let n = input1[0];
        let m = input1[1];
        let a = [];
        for(let j = 0;j < n;j++){
            let row = readLine().split(" ").map((x) => parseInt(x));
            a.push(row);
        }
        let obj = new Solution();
        let res = obj.findMaxSum(n,m,a);
        console.log(res);
    
console.log("~");
}

}

// } Driver Code Ends


//User function Template for javascript
/**
* @param {number} n
* @param {number} m
* @param {number[][]} mat
* @returns {number}
*/

class Solution {
    /**
    * @param {number} n
    * @param {number} m
    * @param {number[][]} mat
    * @returns {number}
    */
    findMaxSum(n, m, mat) {
        let maxSum = -Infinity;

        // Iterate over each potential center of an hourglass
        for (let i = 1; i < n - 1; i++) {
            for (let j = 1; j < m - 1; j++) {
                // Calculate sum of the hourglass shape
                const top = mat[i - 1][j - 1] + mat[i - 1][j] + mat[i - 1][j + 1];
                const middle = mat[i][j];
                const bottom = mat[i + 1][j - 1] + mat[i + 1][j] + mat[i + 1][j + 1];

                const hourglassSum = top + middle + bottom;

                // Update maxSum if a larger hourglass sum is found
                maxSum = Math.max(maxSum, hourglassSum);
            }
        }

        // If maxSum is unchanged, no valid hourglass found
        return maxSum === -Infinity ? -1 : maxSum;
    }
}
