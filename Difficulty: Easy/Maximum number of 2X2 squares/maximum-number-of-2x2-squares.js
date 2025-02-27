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
        let base = BigInt(readLine());
        let obj = new Solution();
        let ans=obj.numberOfSquares(base);
        if(ans==-0n)
        ans=0n;
        console.log(ans.toString());
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {BigInt} base
 * @returns {BigInt}
*/
class Solution {
    
    numberOfSquares(base) {
        // Calculate the number of horizontal lines that can fit (each square needs 2 units of base)
        const numberOfLines = base / 2n;

        // Total number of squares formed is the sum of the first (n-1) numbers: (n * (n-1)) / 2
        return numberOfLines * (numberOfLines - 1n) / 2n;
    }
}
