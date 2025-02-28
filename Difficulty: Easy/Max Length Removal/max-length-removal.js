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
        let s = String(readLine());
        let obj = new Solution();
        console.log(obj.longestNull(s));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} S
 * @returns {number}
 */

class Solution {
    // Function to find the length of the longest subsequence of zeros
    longestNull(S) {
        let arr = [];
  
        // Store {'@', -1} in arr as a base index
        arr.push(['@', -1]); 
  
        let maxlen = 0; // Initialize result 
  
        // Iterate over characters of the string
        for (let i = 0; i < S.length; i++) {
            // Add the current character and its index to arr
            arr.push([S[i], i]); 
  
            // Check if the last three elements of arr form "100"
            while (arr.length >= 3 &&
                arr[arr.length - 3][0] == '1' &&
                arr[arr.length - 2][0] == '0' &&
                arr[arr.length - 1][0] == '0') {
  
                // If so, remove the "100" subsequence
                arr.pop();
                arr.pop();
                arr.pop();
            }
  
            // Get the index of the current last element in arr
            let tmp = arr[arr.length - 1];
            // Calculate the length of the current subsequence of zeros
            // by subtracting the index of the last valid element
            maxlen = Math.max(maxlen, i - tmp[1]);
        }
  
        return maxlen;
    }
}
