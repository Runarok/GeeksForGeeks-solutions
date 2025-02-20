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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.reverseDigits(n);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    reverseDigits(n) {
        // Handle negative numbers by converting to positive
        if (n < 0) n = -n;
        
        let reversed = 0;
        
        // Extract digits and reverse the number
        while (n > 0) {
            let digit = n % 10;
            reversed = reversed * 10 + digit;
            n = Math.floor(n / 10);
        }
        
        return reversed;
    }
}
