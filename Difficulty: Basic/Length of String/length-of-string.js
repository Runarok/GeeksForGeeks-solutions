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
        let obj = new Solution();
        console.log(obj.lengthString(str));
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to return the length of the given string
    lengthString(inputString) {
        // Returning the length of the input string
        return inputString.length;
    }
}
