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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = readLine();
        let p = readLine();
        let obj = new Solution();
        let res = obj.LastIndex(s, p);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s - The string in which we need to find the last index of character p.
 * @param {char} p - The character whose last occurrence index we need to find.
 * @returns {number} - The index of the last occurrence of character p in string s, or -1 if not found.
 */

class Solution {
    LastIndex(s, p) {
        // Initialize ans as -1, which will be returned if the character is not found.
        let ans = -1;

        // Loop through the string to check each character
        for (let i = 0; i < s.length; i++) {
            // If the current character matches p, update ans to the current index
            if (p == s[i]) {
                ans = i;
            }
        }

        // Return the last index of the character p, or -1 if p was not found
        return ans;
    }
}
