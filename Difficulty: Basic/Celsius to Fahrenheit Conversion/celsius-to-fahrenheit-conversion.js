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
        let res = obj.celciusToFahrenheit(N);
        console.log(res.toFixed(2));
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} C
 * @returns {number}
 */

class Solution {
    /**
     * Function to convert temperature from degree Celsius to Fahrenheit.
     * @param {number} C - Temperature in Celsius.
     * @returns {number} - The equivalent temperature in Fahrenheit.
     */
    celciusToFahrenheit(C) {
        return (C * 1.8) + 32;
    }
}
