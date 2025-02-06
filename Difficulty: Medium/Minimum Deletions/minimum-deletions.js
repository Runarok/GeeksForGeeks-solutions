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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.minimumNumberOfDeletions(S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function template for JavaScript
/**
 * @param {string} S - Input string.
 * @returns {number} - Minimum number of deletions required to make the string a palindrome.
 */

class Solution {
    // Function to find the minimum number of deletions to make a string palindrome.
    minimumNumberOfDeletions(S) {
        // Reverse the string to compare with the original
        let reversedString = S.split("").reverse().join("");
        
        let length = S.length;
        
        // Create a 2D array to store the longest common subsequence (LCS) values
        let lcsTable = [];
        for (let i = 0; i <= length; i++) {
            lcsTable[i] = [];
            for (let j = 0; j <= length; j++) {
                if (i === 0 || j === 0) {
                    lcsTable[i][j] = 0; // Initialize the first row and column to zero
                }
            }
        }
        
        // Compute the LCS of the original and reversed string
        for (let i = 1; i <= length; i++) {
            for (let j = 1; j <= length; j++) {
                if (S[i - 1] === reversedString[j - 1]) {
                    lcsTable[i][j] = 1 + lcsTable[i - 1][j - 1];
                } else {
                    lcsTable[i][j] = Math.max(lcsTable[i - 1][j], lcsTable[i][j - 1]);
                }
            }
        }
        
        // The minimum deletions required is the difference between string length and LCS length
        return length - lcsTable[length][length];
    }
}
