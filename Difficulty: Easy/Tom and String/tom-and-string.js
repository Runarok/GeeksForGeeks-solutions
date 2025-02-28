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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.hashString(S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {string}
*/

class Solution {
    // Function to hash the given string.
    hashString(S) {
        // Defining a character set including lowercase, digits, and uppercase letters
        const chars = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // Creating a mapping of each character to its index in the character set
        const charIndexMap = {};
        for (let i = 0; i < chars.length; i++) {
            charIndexMap[chars[i]] = i;
        }

        let hashValue = 0;

        // Splitting the input string into words
        const words = S.split(" ");

        // Calculating hash value based on the character positions and indices
        for (const word of words) {
            for (let i = 0; i < word.length; i++) {
                hashValue += i + charIndexMap[word[i]];
            }
        }

        // Final hash value is the number of words multiplied by the accumulated sum
        return words.length * hashValue;
    }
}
