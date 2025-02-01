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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nthRowOfPascalTriangle(N);
        printArray(res, res.length);
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n - The row number (1-based index) of Pascal's triangle to generate.
 * @return {number[]} - The nth row of Pascal's triangle.
 */
class Solution {
    nthRowOfPascalTriangle(n) {
        let row = [1];  // Initialize the row with the first element, which is always 1.
        
        // Build the nth row iteratively (n-1 because n is 1-based)
        for (let i = 1; i < n; i++) {
            // Calculate the next element in the row using the formula:
            // next_element = previous_element * (n - i) / i
            let nextElement = row[i - 1] * (n - i) / i;
            row.push(nextElement);  // Append the calculated element to the row
        }
        
        return row;  // Return the nth row of Pascal's triangle
    }
}
