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
        let A = parseInt(readLine());
        let B = parseInt(readLine());
        let C = parseInt(readLine());
        let obj = new Solution();
        let res = obj.inSequence(A, B, C);
        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @returns {number}
 */

class Solution {
    inSequence(a, b, c) {
        // code here
        // If the common difference is 0, the sequence only contains the first term 'a'
        if (c === 0) {
            return a === b ? 1 : 0;
        }

        // Check if the difference (b - a) is divisible by c
        // Also check if n (the term number) is greater than or equal to 1
        if ((b - a) % c === 0 && (b - a) / c >= 0) {
            return 1;
        }
        return 0;
    }
}
