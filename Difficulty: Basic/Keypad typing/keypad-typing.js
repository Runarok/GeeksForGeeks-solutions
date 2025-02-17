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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let n = s.length;
        let obj = new Solution();
        console.log(obj.printNumber(s,n));
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s - The input string containing characters.
 * @param {number} n - The length of the input string (not used directly in this function).
 * @returns {string} - The corresponding numeric keypad representation of the string.
 */
class Solution {
    // Function to find the matching decimal representation of 
    // a string as on the keypad.
    printNumber(s, n) {
        // Initialize an empty string to store the result
        let temp = "";

        // Iterate over each character in the input string
        for (let i = 0; i < s.length; i++) {
            // Check the character and append the corresponding keypad number
            if (s[i] === 'a' || s[i] === 'b' || s[i] === 'c') {
                temp += 2;
            } else if (s[i] === 'd' || s[i] === 'e' || s[i] === 'f') {
                temp += 3;
            } else if (s[i] === 'g' || s[i] === 'h' || s[i] === 'i') {
                temp += 4;
            } else if (s[i] === 'j' || s[i] === 'k' || s[i] === 'l') {
                temp += 5;
            } else if (s[i] === 'm' || s[i] === 'n' || s[i] === 'o') {
                temp += 6;
            } else if (s[i] === 'p' || s[i] === 'q' || s[i] === 'r' || s[i] === 's') {
                temp += 7;
            } else if (s[i] === 't' || s[i] === 'u' || s[i] === 'v') {
                temp += 8;
            } else {
                temp += 9;
            }
        }
        
        // Return the final numeric string
        return temp;
    }
}
