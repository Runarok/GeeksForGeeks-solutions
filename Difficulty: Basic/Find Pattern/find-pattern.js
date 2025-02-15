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
    for(; i<t; i++) {
        let a = readLine();
        let b = readLine();
        let obj = new Solution();
        console.log(obj.findPattern(a, b));
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    findPattern(s, p) {
        // Loop through the main string up to the point where the pattern can still fit
        for (let i = 0; i <= s.length - p.length; i++) {
            let matchFound = true;

            // Check each character of the pattern against the substring in 's'
            for (let j = 0; j < p.length; j++) {
                if (s[j + i] !== p[j]) {
                    matchFound = false;
                    break;
                }
            }

            // If a match is found, return the starting index
            if (matchFound) {
                return i;
            }
        }
        
        // If no match is found, return -1
        return -1;
    }
}
