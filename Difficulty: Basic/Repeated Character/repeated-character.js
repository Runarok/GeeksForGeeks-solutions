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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.firstRep(s);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * Function to find the first repeated character in a string
 * @param {string} s - The input string
 * @return {string} - The first repeated character or -1 if no repetition is found
 */

class Solution {
    firstRep(s) {
        // Initialize a boolean array to track the occurrence of characters (256 for ASCII characters)
        let vis = new Array(256).fill(false);
        
        // Variable to store the index of the first repeated character
        let res = -1;

        // Traverse the string from right to left
        for (let i = s.length - 1; i >= 0; i--) {
            // Calculate the index of the character in the ASCII table (for lowercase letters)
            let ind = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

            // If the character has already been visited, it is repeated
            if (vis[ind]) {
                res = i;  // Update result with the index of the repeated character
            } else {
                vis[ind] = true;  // Mark the character as visited
            }
        }

        // Return the first repeated character or -1 if no repeated character is found
        return res == -1 ? res : s[res];
    }
}
