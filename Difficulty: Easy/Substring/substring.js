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
        let str = readLine();
        let inputLine = readLine().split(' ');
        let l = parseInt(inputLine[0]);  // Convert to integer
        let r = parseInt(inputLine[1]);  // Convert to integer
        let obj = new Solution();
        console.log(obj.substring(str, l, r));
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    /**
     * Function to extract a substring from given string.
     * @param {string} str - The original string.
     * @param {number} l - Starting index (inclusive).
     * @param {number} r - Ending index (inclusive).
     * @returns {string} - Extracted substring.
     */
    substring(str, l, r) {
        // Using substring method to extract characters from index 'l' to 'r' (inclusive).
        const subString = str.substring(l, r + 1);
        return subString;
    }
}
