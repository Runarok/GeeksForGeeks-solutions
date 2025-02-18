//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let s1 = input_line[0];
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        let obj = new Solution();
        let ans = obj.concatenatedString(s1, s2);
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    // Function to remove common characters and concatenate two strings.
    concatenatedString(s1, s2) {
        // Create sets to track characters in both strings
        const setA = new Set(s1);
        const setB = new Set(s2);
        
        let unCommon = "";  // String to store non-common characters

        // Iterate over s1 and add characters to unCommon if they are not in s2
        for (let char of s1) {
            if (!setB.has(char)) {
                unCommon += char;
            }
        }

        // Iterate over s2 and add characters to unCommon if they are not in s1
        for (let char of s2) {
            if (!setA.has(char)) {
                unCommon += char;
            }
        }

        // Return the concatenated string or -1 if no non-common characters
        return unCommon ? unCommon : "-1";
    }
}
