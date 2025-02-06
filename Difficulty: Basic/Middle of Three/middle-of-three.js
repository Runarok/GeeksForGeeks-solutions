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
        let res = obj.middle(A, B, C);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

class Solution {
    middle(a, b, c) {
        // Check if 'a' is the middle element
        if ((a > b && a < c) || (a < b && a > c)) {
            return a;
        }
        // Check if 'b' is the middle element
        if ((b > a && b < c) || (b < a && b > c)) {
            return b;
        }
        // Otherwise, 'c' must be the middle element
        return c;
    }
}
