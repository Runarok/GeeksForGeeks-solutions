//{ Driver Code Starts
// Initial Template for javascript

// Initial Template for javascript

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
        let s = readLine();
        let obj = new Solution();
        let res = obj.convert(s);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    convert(s) {
        // Split the string into an array of words
        const words = s.split(" ");

        // Iterate through each word and capitalize the first letter
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        // Join the modified words back into a single string
        return words.join(' ');
    }
}
