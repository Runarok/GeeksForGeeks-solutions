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
        let K = parseInt(readLine());
        let obj = new Solution();
        let res = obj.mindGame(K);
        console.log(res);
    
console.log("~");
}
}

// User function Template for javascript

/**
 * @param {number} K - The input number to be halved
 * @return {number} - The result after halving the number and flooring it
 */

class Solution {
    mindGame(K){
       // Halve the number K and round it down to the nearest integer
       return Math.floor(K / 2);
    }
}
