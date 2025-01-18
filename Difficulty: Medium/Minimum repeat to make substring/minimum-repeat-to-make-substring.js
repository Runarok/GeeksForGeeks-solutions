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
        let A = readLine().trim();
        let B = readLine().trim();
        let obj = new Solution();
        let res = obj.minRepeats(A, B);
        console.log(res);
    }
}
// } Driver Code Ends


class Solution {
    // Function to find the minimum number of repeats of s1 to make s2 a substring
    minRepeats(s1, s2) {
        // Initial variables
        let repeatCount = Math.ceil(s2.length / s1.length); // Minimum repeats needed to cover length of s2
        
        // Create a repeated string of s1
        let repeatedString = s1.repeat(repeatCount);
        
        // Check if s2 is a substring of the repeated string
        if (repeatedString.includes(s2)) {
            return repeatCount;
        }
        
        // If not, check after adding one more repetition
        repeatedString = s1.repeat(repeatCount + 1);
        if (repeatedString.includes(s2)) {
            return repeatCount + 1;
        }
        
        // If no valid repeat is found, return -1
        return -1;
    }
}
