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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.oppositeFaceOfDice(N);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} N
 * @return {number}
 */
class Solution {
    // Function to find the opposite face of a dice
    oppositeFaceOfDice(N) {
        return 7 - N; // The sum of opposite faces on a standard dice is always 7
    }
}
