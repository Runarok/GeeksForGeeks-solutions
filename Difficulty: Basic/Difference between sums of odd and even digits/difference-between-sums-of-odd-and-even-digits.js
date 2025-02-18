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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.oddAndEven(S);
        console.log(res);

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
    // Function to check whether the sum of digits at even and odd indices are equal.
    oddAndEven(S) {
        let oddSum = 0;
        let evenSum = 0;

        // Iterate through the string and sum digits at even and odd indices separately
        for (let i = 0; i < S.length; i++) {
            let digit = parseInt(S[i]);

            if (i % 2 === 0) {
                oddSum += digit;  // Sum for even index positions (0-based index)
            } else {
                evenSum += digit; // Sum for odd index positions (0-based index)
            }
        }

        // Return 1 if sums are equal, otherwise return 0
        return (evenSum === oddSum) ? 1 : 0;
    }
}
