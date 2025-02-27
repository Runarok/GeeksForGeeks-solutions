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
        let n = parseInt(readLine());
        let k = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.josephus(n, k));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
class Solution {

    // Iterative approach to solve the Josephus problem
    josephus(n, k) {
        let startPosition = 0;  // Position starts from 0 (0-based indexing)
        
        // Loop to calculate safe position for each group size from 2 to n
        for (let currentSize = 2; currentSize <= n; currentSize++) {
            startPosition = (startPosition + k) % currentSize;
        }
        
        return startPosition + 1;  // Convert to 1-based indexing
    }
}
