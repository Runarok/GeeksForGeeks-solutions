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
        let str = readLine();
        let obj = new Solution();
        let ans = obj.stringMirror(str);
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} str
 * @returns {string}
 */

class Solution {
    // Function to find a stringMirror.
    stringMirror(str) {
        // Initialize the prefix with the first character of the string
        let prefix = str[0];
        
        // Traverse the string to build the prefix
        for (let i = 1; i < str.length; i++) {
            // If the current character is smaller than the previous character, 
            // or if it's equal to the previous character but different from the first character
            if (str[i] < str[i - 1] || (str[i] === str[i - 1] && str[i] !== str[0])) {
                prefix += str[i];
            } else {
                // Stop if the condition breaks
                break;
            }
        }
        
        // Form the mirrored string by appending the reverse of the prefix
        return prefix + prefix.split("").reverse().join("");
    }
}
