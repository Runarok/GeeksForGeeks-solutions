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
        let res = obj.repeatedStringMatch(A, B);
        if (res === -0) res = 0;
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

class Solution {
    repeatedStringMatch(a, b) {
        let repeatCount = Math.ceil(b.length / a.length);
        let repeatedA = a.repeat(repeatCount);
        
        // Check if b is a substring of the repeated string
        if (repeatedA.includes(b)) {
            return repeatCount;
        }

        // If not found, try one more repetition to cover edge case of b spanning across two copies of a
        repeatedA = a.repeat(repeatCount + 1);
        if (repeatedA.includes(b)) {
            return repeatCount + 1;
        }

        // If b is not a substring in any repetition
        return -1;
    }
}
