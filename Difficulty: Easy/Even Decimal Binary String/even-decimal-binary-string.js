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
        let S = readLine();
        let obj = new Solution();
        let res = obj.evenDecimalSubStr(N, S);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @param {string} S
 * @returns {number}
 */

class Solution {
    // Function to calculate the count of even decimal substrings.
    evenDecimalSubStr(N, S) {
        
        // Initialize count of even substrings
        let count = 0;

        // Loop through each character in the string
        for (let i = 0; i < N; i++) {
            // If the character is '0', it is an even number
            if (S[i] === '0') {
                // All substrings starting from this position are even
                count += N - i;
            }
        }
        
        // Return the total count of even substrings
        return count;
    }
}
