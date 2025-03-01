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
        let N = parseInt(readLine());
        let obj = new Solution();
        obj.printTriangle(N);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @returns {void}
*/

class Solution {
    //Function to print pattern with N lines using numbers from 1 to N.
    printTriangle(N) {
        // Initialize a variable to track the first letter in the pattern
        const first = N + 64;
        
        // Initialize an empty string to store the current line of the pattern
        let s = "";
        
        // Loop through the alphabet in reverse order starting from 'A' adjusted by N
        for (let i = first; i > 64; i--) {
            // Append the character corresponding to the current ASCII value to the string
            s += String.fromCharCode(i);
            
            // Print the current string formed so far
            console.log(s);
            
            // Add a space after each printed character
            s += " ";
        }
    }
}
