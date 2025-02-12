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
        let n = parseInt(readLine());
        let s = readLine();
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.kSubstrConcat(n, s, k);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */

class Solution {
    // Function to find the kth string
    kSubstrConcat(n, s, k) {
        // Check if the length of the string is divisible by k, if not return 0
        if (n % k !== 0) {
            return 0;
        }

        let i = 0;
        const mp = new Map();  // Map to store substring frequencies

        // Loop through the string and process substrings of length k
        while (i <= n - k) {
            const temp = s.substring(i, i + k);  // Get the current substring of length k
            mp.set(temp, (mp.get(temp) || 0) + 1);  // Update frequency in the map

            // If more than two unique substrings are found, return 0
            if (mp.size > 2) {
                return 0;
            }
            i = i + k;  // Move to the next substring
        }

        let count = 0;
        // Count how many substrings appear more than once
        for (let value of mp.values()) {
            if (value > 1) {
                count++;
            }
        }

        // If at most one substring appears more than once, return 1; otherwise, return 0
        return count <= 1 ? 1 : 0;
    }
}
