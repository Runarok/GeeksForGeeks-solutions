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
        let res = obj.checkYear(n);
        if (obj.checkYear(n))
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    /**
     * @param {number} n
     * @returns {boolean}
     */
    checkYear(n) {
        // Check if the year is divisible by 400
        if (n % 400 == 0) {
            return true;
        }
        // Check if the year is divisible by 4 but not divisible by 100
        else if (n % 4 == 0 && n % 100 != 0) {
            return true;
        }
        // Return false if the year does not meet leap year criteria
        return false;
    }
}
