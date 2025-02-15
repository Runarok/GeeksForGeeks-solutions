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
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let n1 = input_line[0];
        let obj = new Solution();
        let ans = obj.getGray(n1);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to get the Gray code of a given number n.
    getGray(n) {
        // Gray code is obtained by XOR-ing n with n right-shifted by 1
        return n ^ (n >> 1);
    }
}
