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
        let input_line = readLine().split(' ').map(x => parseInt(x));
        let n = input_line[0];
        input_line = readLine().split(' ').map(x => parseInt(x));
        let k = input_line[0];
        let obj = new Solution();
        if (obj.checkKthBit(n, k))
            console.log("true"); // If true, print Yes
        else
            console.log("false"); // Else print No
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {Number} n
 * @param {Number} k
 * @returns {boolean}
 */

class Solution {
    // Function to check if the Kth bit is set or not.
    checkKthBit(n, k) {
        // Use bitwise AND to check if the Kth bit is set
        return (n & (1 << k)) !== 0;
    }
}
