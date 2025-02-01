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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countStrings(n);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to count the number of valid strings of length n
    countStrings(n) {
        // Initialize the base cases
        let result = [2, 3]; // F(1) = 2, F(2) = 3
        
        // Calculate the Fibonacci values for each subsequent n
        for (let i = 2; i < n; i++) {
            result[i] = result[i - 1] + result[i - 2]; // Each term is the sum of the two previous terms
        }
        
        // Return the n-th Fibonacci value (for strings of length n)
        return result[n - 1]; 
    }
}
