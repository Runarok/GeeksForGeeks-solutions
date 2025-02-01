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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.isDivisible(s);
        if (res === -0) res = 0;
        console.log(res ? "true" : "false");

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    // Function to check if the binary string is divisible by 3
    isDivisible(s) {
        let oddCount = 0;  // Count of 1's at odd positions
        let evenCount = 0; // Count of 1's at even positions

        // Loop through each character in the binary string
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '1') {
                if (i % 2 === 0) evenCount++; // Even position
                else oddCount++; // Odd position
            }
        }

        // Return true if the difference between evenCount and oddCount is divisible by 3
        return (Math.abs(evenCount - oddCount) % 3 === 0);
    }
}
