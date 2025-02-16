//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let num1 = input_ar1[0];
        let num2 = input_ar1[1];
        let obj = new Solution();
        let res = obj.findRemainder(num1, num2);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} num1 - The dividend
 * @param {number} num2 - The divisor
 * @returns {number} - The remainder when num1 is divided by num2
 */

class Solution {
    findRemainder(num1, num2) {
        return num1 % num2; // Returning the remainder of the division
    }
}
