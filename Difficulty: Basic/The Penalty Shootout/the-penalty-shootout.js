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
        let res = obj.penaltyScore(S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S - The input string to be processed
 * @return {number} - The number of occurrences of "21" in the string
 */

class Solution {
    // Function to calculate the penalty score based on occurrences of "21" in the string
    penaltyScore(S) {
        let count = 0;
        
        // Loop through the string to check for consecutive "21" patterns
        for (let i = 0; i < S.length; i++) {
            // Check if the current and next character form "21"
            if (i < S.length - 1 && S[i] === '2' && S[i + 1] === '1') {
                count++;  // Increment the count if "21" is found
            }
        }
        
        // Return the total count of "21" occurrences
        return count;
    }
}
