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
        let ch = readLine().trim();
        let count = parseInt(readLine());
        let obj = new Solution();
        let res = obj.printString(S, ch, count);
        console.log(res)

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} S
 * @param {string} ch
 * @param {number} count
 * @return {string}
 */

class Solution {
    printString(s, ch, count) {
        let index = 0;      // Pointer to traverse the string
        let occurrence = 0;  // Counter to track how many times 'ch' has been seen

        // Traverse until we find 'ch' exactly 'count' times
        while (index < s.length && occurrence < count) {
            if (s[index] === ch) {
                occurrence++;
            }
            index++;
        }

        // Return the substring after the required occurrence
        return s.slice(index);
    }
}
