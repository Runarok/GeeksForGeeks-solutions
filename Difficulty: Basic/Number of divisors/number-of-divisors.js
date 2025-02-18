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
        let res = obj.countDivisors(N);
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
    // Function to count divisors of N that are divisible by 3
    countDivisors(N) {
        let count = 0;
        
        // Loop through all numbers from 1 to N
        for (let i = 1; i <= N; i++) {
            // Check if 'i' is a divisor of N and also divisible by 3
            if (N % i === 0 && i % 3 === 0) {
                count++; // Increment the count for each divisor
            }
        }
        
        return count; // Return the total count of such divisors
    }
}
