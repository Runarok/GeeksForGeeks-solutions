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
        let S = readLine();
        let obj = new Solution();
        let res = obj.encryptString(S);
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
    //Function to encrypt the given string.
    encryptString(S) {
        let encryptedResult = [];
        let currentIndex = 0;

        // Traverse the string to group consecutive characters
        while (currentIndex < S.length) {
            let consecutiveCount = 1;

            // Count consecutive occurrences of the same character
            while (currentIndex + 1 < S.length && S[currentIndex] === S[currentIndex + 1]) {
                consecutiveCount++;
                currentIndex++;
            }

            // Append the character and its count in hexadecimal format
            encryptedResult.push(S[currentIndex]);
            encryptedResult.push(consecutiveCount.toString(16).toLowerCase());

            // Move to the next character
            currentIndex++;
        }

        // Reverse the result array and join to get final encrypted string
        return encryptedResult.reverse().join("");
    }
}
