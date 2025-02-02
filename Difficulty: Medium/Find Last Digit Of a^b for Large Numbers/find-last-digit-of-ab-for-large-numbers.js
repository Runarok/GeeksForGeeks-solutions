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
    for (; i < t; i++) {

        let [a, b] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.getLastDigit(a, b);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
class Solution {
    getLastDigit(a, b) {
        // If exponent is "0", any number raised to 0 is 1.
        if (b === "0") return 1;

        // Extract the last digit of base 'a'.
        const lastDigitBase = parseInt(a[a.length - 1]);

        // The power cycles of last digits repeat every 4.
        const cycleLength = 4;

        // Get the last two digits of exponent 'b' to determine effective exponent.
        const effectiveExponent = parseInt(b.slice(-2)) % cycleLength || cycleLength;

        // Calculate and return the last digit of a^b.
        return Math.pow(lastDigitBase, effectiveExponent) % 10;
    }
}
