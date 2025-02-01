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
        let input_line = readLine().split(' ');
        let str1 = input_line[0];
        input_line = readLine().split(' ');
        let str2 = input_line[0];
        let obj = new Solution();
        if (obj.isRotated(str1, str2))
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

class Solution {
    // Function to check if a string can be obtained by rotating
    // another string by exactly 2 places.
    isRotated(s1, s2) {
        // Check if both strings are of the same length
        if (s1.length !== s2.length) {
            return false;
        }

        // Left rotation by 2 places
        let leftRotated = s1.substring(2) + s1.substring(0, 2);
        // Right rotation by 2 places
        let rightRotated = s1.substring(s1.length - 2) + s1.substring(0, s1.length - 2);

        // Check if either rotation matches s2
        return s2 === leftRotated || s2 === rightRotated;
    }
}
