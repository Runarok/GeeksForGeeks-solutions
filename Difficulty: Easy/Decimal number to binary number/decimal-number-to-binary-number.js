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
        let N = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.toBinary(N));

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    /**
     * Function to convert a decimal number to its binary representation.
     * @param {number} n - The input decimal number.
     * @returns {string} - The binary representation of the number.
     */
    toBinary(n) {
        // Convert the number to binary using toString(2)
        // Use ">>>" to ensure handling as unsigned integer
        return (n >>> 0).toString(2);
    }
}
