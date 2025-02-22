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
        let n = parseInt(readLine());
        let s = readLine();
        let obj = new Solution();
        let res = obj.isReversible(s,n);
        if(res === true){
            console.log(1);
        }
        else
            console.log(0);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to check whether a string is reversible (palindrome) or not.
 * @param {string} str - The input string to check.
 * @param {number} n - The length of the string.
 * @returns {boolean} - Returns true if the string is reversible (palindrome), false otherwise.
*/

class Solution {
    // Function to check if the string is a palindrome (reversible)
    isReversible(str, n) {
        let i = 0; // Pointer to the start of the string
        let j = n - 1; // Pointer to the end of the string
        
        // Loop to compare characters from both ends of the string
        while (i < j) {
            // If characters at both pointers are not the same, return false
            if (str.charAt(i) !== str.charAt(j)) {
                return false;
            }
            i++; // Move the start pointer forward
            j--; // Move the end pointer backward
        }
        
        // If all characters match, the string is reversible (palindrome)
        return true;
    }
}
