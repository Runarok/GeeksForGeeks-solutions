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
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.dataTypeSize(str);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    // Function to find the size of different data types.
    dataTypeSize(str) {
        // Check each data type and return its size in bytes
        if (str === "Character") {
            return 1;  // 1 byte for character in this case (e.g., ASCII or UTF-8)
        } else if (str === "Integer") {
            return 4;  // 4 bytes for int
        } else if (str === "Long") {
            return 8;  // 8 bytes for long
        } else if (str === "Float") {
            return 4;  // 4 bytes for float
        } else if (str === "Double") {
            return 8;  // 8 bytes for double
        } else {
            return -1; // Invalid data type
        }
    }
}

