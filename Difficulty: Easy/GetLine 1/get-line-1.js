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
        let obj = new Solution();
        console.log(obj.getLine());
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to read a line of input and return it as a string
    getLine() {
        let str = readLine(); // Read a line of input from the user
        return str; // Return the input string
    }
}
