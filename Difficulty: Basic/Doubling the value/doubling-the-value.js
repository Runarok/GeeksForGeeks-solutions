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
    for(;i<t;i++)
    {
        let [n,b] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.solve(arr,b,n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array
 * @param {number} b - Initial value to be doubled
 * @param {number} n - Size of the array
 * @return {number} - Final value of b
 */

class Solution {
    solve(arr, b, n) {
        // Traverse the array
        for (let i = 0; i < n; i++) {
            // If b is found in the array, double its value
            if (arr[i] === b) {
                b = b * 2;
            }
        }
        // Return the final value of b
        return b;
    }
}
