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
        s += "\n";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.convertToCamelCase(s);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function template for JavaScript

/**
 * @param {string} s - Input string with words separated by spaces
 * @returns {string} - Converted Camel Case string
 */

class Solution {
    // Function to convert the given string to Camel Case
    convertToCamelCase(s) {
        let result = []; // Array to store the modified characters
        let capitalizeNext = false; // Flag to track when to capitalize a letter

        for (let i = 0; i < s.length; i++) {
            if (s[i] === ' ') {
                capitalizeNext = true; // Set flag to capitalize the next character
            } else if (capitalizeNext) {
                result.push(s[i].toUpperCase()); // Convert to uppercase
                capitalizeNext = false; // Reset flag
            } else {
                result.push(s[i]); // Keep character as it is
            }
        }

        return result.join(''); // Convert array back to a string
    }
}
