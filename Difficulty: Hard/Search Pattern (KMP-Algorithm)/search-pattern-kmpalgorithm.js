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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let pat = readLine();
        let obj = new Solution();
        let res = obj.search(pat, s);
        if (res.length == 0)
            console.log("[]");
        else
            printArray(res, res.length);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
 */

class Solution {
    // Function to compute the LPS (Longest Prefix Suffix) array
    computeLPS(pat) {
        let m = pat.length;
        let lps = new Array(m).fill(0);
        let length = 0;  // length of the previous longest prefix suffix
        let i = 1;  // We start from the second character
        
        // Build the LPS array
        while (i < m) {
            if (pat[i] === pat[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];  // Try to find a smaller prefix suffix
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
    
    // Function to search the pattern in the given text
    search(pat, txt) {
        let n = txt.length;
        let m = pat.length;
        let lps = this.computeLPS(pat);
        let indices = [];
        let i = 0;  // index for txt
        let j = 0;  // index for pat
        
        // Perform the search using the LPS array
        while (i < n) {
            if (txt[i] === pat[j]) {
                i++;
                j++;
            }
            
            if (j === m) {
                indices.push(i - j);  // Pattern found, push the start index
                j = lps[j - 1];  // Use LPS to skip unnecessary comparisons
            } else if (i < n && txt[i] !== pat[j]) {
                // Mismatch after j matches
                if (j !== 0) {
                    j = lps[j - 1];  // Use LPS to skip characters in pat
                } else {
                    i++;
                }
            }
        }
        
        return indices;  // Return the list of starting indices
    }
}
