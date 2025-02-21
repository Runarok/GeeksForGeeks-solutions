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
        let res = obj.Sandwiched_Vowel(s);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    // Function to remove vowels that are sandwiched between consonants
    Sandwiched_Vowel(s) {
       // Create a set for vowels for easy checking
       const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
       let result = ''; // Variable to store the final result string
       
       const n = s.length; // Get the length of the string
       
       // Loop through each character in the string
       for (let i = 0; i < n; i++) {
           // Check if the current character is a vowel
           if (vowels.has(s[i])) {
               // Check if the vowel is sandwiched between consonants
               if (i > 0 && i < n - 1 && !vowels.has(s[i - 1]) && !vowels.has(s[i + 1])) {
                   continue; // Skip adding this vowel to the result
               }
           }
           // Add the current character to the result
           result += s[i];
       }
       
       // Return the processed string after removing the sandwiched vowels
       return result;
    }
}
