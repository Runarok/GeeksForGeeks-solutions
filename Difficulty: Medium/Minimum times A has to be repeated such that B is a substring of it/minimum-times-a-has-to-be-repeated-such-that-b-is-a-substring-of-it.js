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
        let A = readLine();
        let B = readLine();
        let obj = new Solution();
        let res = obj.minRepeats(A, B);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} A
 * @param {number} B
 * @returns {number}
*/

class Solution {
    // Function to find minimum number of times string A has to be repeated such that B is a substring of it.
    minRepeats(A, B) {
        // Variable to hold the repeated string
        let repeatedString = "";
        // Variable to count the number of times A is repeated
        let repeatCount = 0;
        
        // Loop until the repeated string is large enough to contain B
        while (repeatedString.length < B.length * 2) {
            repeatCount++;
            repeatedString += A;  // Add one more repetition of A
            
            // Check if B is a substring of the repeated string
            if (repeatedString.includes(B)) {
                return repeatCount;
            }
        }
        
        // If B never becomes a substring, return -1
        return -1;
    }
}
