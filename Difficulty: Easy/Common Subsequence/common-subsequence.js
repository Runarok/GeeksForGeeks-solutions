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
    for(let i=0;i<t;i++)
    {
        let inputLine = readLine().split(' ');
        let a = inputLine[0];
        let b = inputLine[1];
        
        let obj = new Solution();
        if(obj.commonSubseq(a, b))
        {
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
*/

class Solution {
    // Function to find if there exists at least one common subsequence (single character) between two strings.
    commonSubseq(a, b) {
        let hasCommonCharacter = false; // Flag to check for common character.
        
        const charSetA = new Set(a); // Create a set containing all characters of string 'a'.
        
        // Iterate through each character in string 'b' and check if it exists in 'a'.
        for (let char of b) {
            if (charSetA.has(char)) {
                return 1; // Common character found, so return 1.
            }
        }
        
        return 0; // No common character found, so return 0.
    }
}
