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
        let input_line = readLine().split();
        let str = input_line[0];
        input_line = readLine().split();
        let patt = input_line[0];
        let obj = new Solution();
        let ans = obj.minIndexChar(str, patt);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
class Solution {
    minIndexChar(s1, s2) {
        // Create a set of characters from s2 for fast lookup
        let s2Set = new Set(s2);

        // Iterate over characters in s1
        for (let i = 0; i < s1.length; i++) {
            // If the character is present in s2, return the index
            if (s2Set.has(s1[i])) {
                return i;
            }
        }

        // If no character from s1 is found in s2, return -1
        return -1;
    }
}
