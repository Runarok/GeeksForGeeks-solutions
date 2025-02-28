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
        let str = readLine().trim();
        let pat = readLine().trim();
        let obj = new Solution();
        let res = obj.searchPattern(str, pat);
        if (res)
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} txt - The text in which to search for the pattern
 * @param {string} pat - The pattern to search for
 * @return {boolean} - Returns true if the pattern exists in the text, else false
 */
class Solution {
    searchPattern(txt, pat) {
        // Rabin-Karp Algorithm: Efficient string matching using hashing
        // Hash formula: t(i+1) = d * (t(i) - txt(i) * d^(m-1)) + txt(i+m)
        
        let d = 256; // Number of characters in the input alphabet (ASCII set)
        let q = 101; // A prime number for hash modulus to reduce collision risk
        let m = pat.length; // Length of pattern
        let n = txt.length; // Length of text
        let h = 1; // Multiplier for highest digit in window
        let p = 0; // Hash value for pattern
        let t = 0; // Hash value for text window

        // Precompute the value of "h" as d^(m-1) % q
        for (let i = 0; i < m - 1; i++) {
            h = (h * d) % q;
        }

        // Compute the hash value for the pattern and the first window of the text
        for (let i = 0; i < m; i++) {
            p = (d * p + pat.charCodeAt(i)) % q;
            t = (d * t + txt.charCodeAt(i)) % q;
        }

        // Slide the pattern over the text one character at a time
        for (let i = 0; i <= n - m; i++) {
            // Check the hash values of the current window and pattern
            if (p === t) {
                // Hashes match, so do a character-by-character check
                let j;
                for (j = 0; j < m; j++) {
                    if (pat[j] !== txt[i + j]) break;
                }

                if (j === m) return true; // Full match found
            }

            // Compute the hash for the next window using the hash formula
            if (i < n - m) {
                t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + m)) % q;

                // Convert negative hash value to positive by adding modulus q
                if (t < 0) {
                    t = t + q;
                }
            }
        }

        return false; // Pattern not found
    }
}
