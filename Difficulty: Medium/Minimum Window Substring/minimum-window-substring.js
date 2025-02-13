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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str1 = readLine();
        let str2 = readLine();
        let obj = new Solution();
        let res = obj.minWindow(str1, str2);
        if (res.length === 0) {
            console.log("\"\"");
        } else {
            console.log(res);
        }

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    /**
     * Function to find the smallest window in string `s1` that contains all characters of string `s2` in sequence.
     * @param {string} s1 - The string in which to search for the subsequence.
     * @param {string} s2 - The string whose characters we need to find in sequence in `s1`.
     * @returns {string} - The smallest subsequence of `s1` that contains all characters of `s2` in order.
     */
    minWindow(s1, s2) {
        let minLen = Infinity; // Variable to store the length of the smallest window
        let start = -1; // Variable to store the starting index of the smallest window

        let i = 0; // Pointer for the start of the window in `s1`
        while (i < s1.length) {
            let j = i; // Pointer for scanning the window in `s1`
            let seq = 0; // Pointer for tracking the characters of `s2` that we are trying to match in sequence

            // Expand the window by moving `j` to find a subsequence matching `s2`
            while (j < s1.length) {
                if (s1[j] === s2[seq]) seq++; // If characters match, move the pointer of `s2`
                if (seq === s2.length) break; // If we have matched all characters in `s2`, break
                j++;
            }

            // If no valid subsequence is found, exit
            if (seq < s2.length) break;

            // Now, try to shrink the window from the left side
            let end = j; // `j` is at the end of the subsequence
            while (i <= end) {
                if (s1[i] === s2[0]) break; // Ensure the first character of `s2` is still in sequence
                i++;
            }

            // If the current window is smaller, update `minLen` and `start`
            if (end - i + 1 < minLen) {
                minLen = end - i + 1;
                start = i;
            }

            // Move `i` to the next position to search for the next potential window
            i++;
        }

        // If no valid window is found, return an empty string
        if (minLen === Infinity) return "";
        return s1.substring(start, start + minLen); // Return the smallest valid window
    }
}
