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
        let N = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countBits(N));
        
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    countBits(N) {
        // If N is 0 or 1, return N as the result directly
        if (N <= 1) {
            return N;
        }

        // Calculate the largest power of 2 less than or equal to N
        let x = Math.floor(Math.log2(N));

        // Compute the result using the formula and recursion
        return (x * (1 << (x - 1))) + (N - (1 << x) + 1) + this.countBits(N - (1 << x));
    }
}
