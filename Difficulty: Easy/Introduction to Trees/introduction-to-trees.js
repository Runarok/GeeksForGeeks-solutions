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
        let data = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countNodes(data);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} i
 * @returns {number}
 */

class Solution {
    countNodes(i) {
        // Return the number of nodes in a perfect binary tree at level i
        return Math.pow(2, i - 1);
    }
}
