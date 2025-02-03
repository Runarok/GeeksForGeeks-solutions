//{ Driver Code Starts
//Initial Template for javascript

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
        let res = obj.reverse(S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} S
 * @return {string}
 */

class Solution {
    
    reverse(S){
        // Splitting the string into an array of characters, reversing it, and joining it back into a string.
        return S.split("").reverse().join("");
    }
}
