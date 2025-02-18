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
        let res = obj.extractMaximum(S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S
 * @return {number}
 */

class Solution {
    extractMaximum(S) {
        let maxNumber = 0; // Stores the maximum number found in the string
        let currentNumber = 0; // Stores the currently formed number from digits
        let hasNumber = false; // Flag to check if at least one number is present

        for (let i = 0; i < S.length; i++) {
            if (/\d/.test(S[i])) { // If the character is a digit
                currentNumber = currentNumber * 10 + Number(S[i]); // Append to the current number
                hasNumber = true; // Mark that a number has been found
            } else { 
                if (currentNumber > maxNumber) maxNumber = currentNumber; // Update max if needed
                currentNumber = 0; // Reset current number
            }
        }

        if (currentNumber > maxNumber) maxNumber = currentNumber; // Final check for last number in string
        return hasNumber ? maxNumber : -1; // Return max number found, or -1 if no digits were present
    }
}
