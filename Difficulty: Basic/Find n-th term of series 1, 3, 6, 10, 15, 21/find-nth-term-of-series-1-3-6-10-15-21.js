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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findNthTerm(N);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The nth term to be found in the sequence
 * @return {number} - The nth term of the sequence
 */
class Solution {
    findNthTerm(n) {
        // Initialize an array to store the sequence values, starting with the first term
        let a = [1];
        
        // Loop through to calculate each term in the sequence
        for (let i = 1; i <= n; i++) {
            // Update the current term based on the previous term and the index
            a[i] = a[i - 1] + (1 + i);
        }
        
        // Return the nth term (adjusted for zero-based index)
        return a[n - 1];
    }
}
