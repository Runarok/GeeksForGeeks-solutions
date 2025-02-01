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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let brr = new Array(n);
        input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            brr[i] = input_ar1[i];
        }
        let obj = new Solution();
        obj.matchPairs(n, arr, brr);
        printList(arr, arr.length);
        printList(brr, brr.length);
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {char[]} nuts - Array of nuts represented as characters
 * @param {char[]} bolts - Array of bolts represented as characters
 * @param {number} n - Number of elements in the arrays
 * @returns {void} - Modifies the input arrays to match corresponding pairs
 */

class Solution {
    matchPairs(n, nuts, bolts) {
        // Define the standard order of nuts and bolts
        const standardOrder = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
        
        // Maps to store the presence of nuts and bolts
        const nutSet = new Map();
        const boltSet = new Map();

        // Store each nut and bolt in their respective maps for quick lookup
        for (let i = 0; i < n; i++) {
            nutSet.set(nuts[i], true);
            boltSet.set(bolts[i], true);
        }

        // Reconstruct the nuts and bolts arrays based on the predefined order
        let nutIndex = 0;
        let boltIndex = 0;
        for (let char of standardOrder) {
            if (nutSet.has(char)) nuts[nutIndex++] = char;
            if (boltSet.has(char)) bolts[boltIndex++] = char;
        }
    }
}
