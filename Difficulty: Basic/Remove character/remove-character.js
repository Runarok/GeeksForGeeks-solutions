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
        let s1 = readLine();
        let s2 = readLine();
        let obj = new Solution();
        let res = obj.removeChars(s1, s2);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s1 - The main string from which characters will be removed
 * @param {string} s2 - The string containing characters to be removed from s1
 * @returns {string} - The modified string after removing characters found in s2
 */
class Solution {
    removeChars(string1, string2) {
        // Create a Set from string2 to store the characters to be removed
        const charsToRemove = new Set(string2);

        // Initialize an array to store the characters of string1 that are not in string2
        const result = [];

        // Loop through each character of string1
        for (const char of string1) {
            // If the character is not in string2, add it to the result
            if (!charsToRemove.has(char)) {
                result.push(char);
            }
        }

        // Join the array of characters into a string and return the result
        return result.join('');
    }
}
