//{ Driver Code Starts
// Initial Template for javascript

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
        let input_line = readLine().split(' ').map(x => parseInt(x));
        let n = input_line.length;
        let A = [];
        for (let i = 0; i < n; i++) A.push(input_line[i]);
        let obj = new Solution();
        console.log(obj.alternatingMaxLength(A));
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the maximum length of an alternating subsequence
    alternatingMaxLength(arr) {
        let n = arr.length;
        if (n === 0) return 0; // Edge case: empty array
        
        let increase = 1, decrease = 1; // Initialize lengths of increasing and decreasing subsequences
        
        for (let i = 1; i < n; i++) {
            if (arr[i] > arr[i - 1]) {
                increase = decrease + 1; // Extend increasing sequence
            } else if (arr[i] < arr[i - 1]) {
                decrease = increase + 1; // Extend decreasing sequence
            }
        }
        
        return Math.max(increase, decrease); // Return the maximum length found
    }
}

