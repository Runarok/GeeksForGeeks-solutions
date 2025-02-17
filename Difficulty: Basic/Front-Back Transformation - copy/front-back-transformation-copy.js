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
        let s = readLine();
        let obj = new Solution();
        let res = obj.convert(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/

class Solution {
    // Function to convert string with specific transformation
    convert(s) {
        let str = s.toLowerCase();  // Convert input string to lowercase
        let abcd = "abcdefghijklmnopqrstuvwxyz";  // Alphabet string to map characters
        let len = s.length;  // Get the length of the input string
        let finalStr = "";  // Initialize an empty string to store the final result

        // Iterate through each character in the string
        for (let i = 0; i < len; i++) {
            // Check if the character is an uppercase letter
            if (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) {
                // Map the character based on the reversed alphabet and keep it uppercase
                finalStr += abcd.charAt(122 - str.charCodeAt(i)).toUpperCase();
            } else {
                // For lowercase letters, apply the same transformation
                finalStr += abcd.charAt(122 - str.charCodeAt(i));
            }
        }
        return finalStr;  // Return the transformed string
    }
}
