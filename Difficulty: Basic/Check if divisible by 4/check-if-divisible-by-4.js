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
        let N = readLine().trim();
        let obj = new Solution();
        let res = obj.divisibleBy4(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} N
 * @returns {string}
 */

class Solution {
    // Function to check whether N is divisible by 4 or not.
    divisibleBy4(N) {
        // Extract the last two digits of the number as a string.
        let length = N.length;
        let lastTwoDigits = parseInt(N.slice(Math.max(0, length - 2)));

        // Check divisibility by 4 and return "1" for true, "0" for false.
        return (lastTwoDigits % 4 === 0) ? "1" : "0";
    }
}
