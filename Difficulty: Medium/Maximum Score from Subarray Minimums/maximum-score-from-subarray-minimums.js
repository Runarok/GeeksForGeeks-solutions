//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(' ').map(x => parseInt(x));
        let a = input1;
        let obj = new Solution();
        let res = obj.pairWithMaxSum(a);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    pairWithMaxSum(arr) {
        let n = arr.length;
        let maxScore = 0;

        // Iterate through the array and calculate the score for adjacent pairs
        for (let i = 0; i < n - 1; i++) {
            maxScore = Math.max(maxScore, arr[i] + arr[i + 1]);
        }

        return maxScore;
    }
}
