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
        let [S1,S2] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.merge(S1, S2);
        console.log(res.toString());
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S1
 * @param {string} S2
 * @returns {string}
 */

class Solution {
    // Function to merge two strings by alternating characters.
    merge(S1, S2) {
        let index1 = 0, index2 = 0;
        let mergedString = "";

        // Merge characters alternately from both strings
        while (index1 < S1.length && index2 < S2.length) {
            mergedString += S1.charAt(index1);
            mergedString += S2.charAt(index2);
            index1++;
            index2++;
        }

        // Append remaining characters from S1, if any
        while (index1 < S1.length) {
            mergedString += S1.charAt(index1);
            index1++;
        }

        // Append remaining characters from S2, if any
        while (index2 < S2.length) {
            mergedString += S2.charAt(index2);
            index2++;
        }

        return mergedString;
    }
}
