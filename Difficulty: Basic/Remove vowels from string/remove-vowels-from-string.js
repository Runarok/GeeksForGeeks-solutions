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
        return string;
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
        let res = obj.removeVowels(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to remove all vowels from a given string.
 * @param {string} s - The input string
 * @return {string} - The string with all vowels removed
 */
class Solution {
    removeVowels(s) {
        // List of all vowels (both uppercase and lowercase)
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        
        // Initialize an empty string to store the result
        let result = '';
        
        // Iterate through each character in the input string
        for (let char of s) {
            // If the character is not a vowel, add it to the result string
            if (!vowels.includes(char)) {
                result += char;
            }
        }
        
        // Return the final string with vowels removed
        return result;
    }
}
