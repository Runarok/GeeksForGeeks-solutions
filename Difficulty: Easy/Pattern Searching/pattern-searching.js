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
    for (; i < t; i++) {
        let [text, pat] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.search(text, pat);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} text
 * @param {string} pat
 * @return {number}
 */

class Solution {
    // Function to check if the pattern exists in the text
    search(text, pat) {
        // Create a regular expression object for the pattern with global search option
        let regex = new RegExp(pat, "g");
        
        // Check if the pattern exists in the text using the regular expression
        if (regex.test(text)) {
            // If the pattern is found, return 1
            return 1;
        } else {
            // If the pattern is not found, return 0
            return 0;
        }
    }
}
