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
        let s = readLine();
        let obj = new Solution();
        console.log(obj.minChar(s));

        console.log("~");
    }
}
// } Driver Code Ends

// User function template for JavaScript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of characters required
    // to be added at the beginning to make the string a palindrome.
    minChar(s) {
        let n = s.length;
        let rev = s.split("").reverse().join(""); // Reverse the input string

        // Create a new string by concatenating the original string,
        // a special separator character, and its reversed version.
        s = s + "$" + rev;

        // Compute the LPS (Longest Prefix Suffix) array of the concatenated string
        let lps = computeLPSArray(s);

        // The result is determined by subtracting the last value of
        // the LPS array from the original string length
        return n - lps[lps.length - 1];
    }
}

// Helper function to compute the Longest Prefix Suffix (LPS) array
function computeLPSArray(pat) {
    let n = pat.length;
    let lps = new Array(n).fill(0); // Initialize LPS array with zeros

    let len = 0; // Length of the previous longest prefix suffix
    let i = 1; // Start checking from the second character

    // Compute LPS array values for each character in the pattern
    while (i < n) {
        // If characters match, increase the length and set lps[i]
        if (pat[i] === pat[len]) {
            len++;
            lps[i] = len;
            i++;
        }
        // If there is a mismatch
        else {
            // If len is not zero, update len to the last known prefix length
            if (len !== 0) {
                len = lps[len - 1];
            }
            // If no prefix match exists, set lps[i] to 0 and move forward
            else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps; // Return the computed LPS array
}
