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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.numberOfHeads(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
     * Function to find the number of heads.
     * @param {number} N - The number of coins.
     * @returns {number} - The number of heads after N tosses.
     */
    numberOfHeads(N) {
        // The number of heads is the integer part of the square root of N.
        return Math.floor(Math.sqrt(N));
    }
}
