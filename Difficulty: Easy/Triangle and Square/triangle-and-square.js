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
        let b = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countShare(b));
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} B
 * @returns {number}
*/

class Solution {
    // Function to count the number of shares.
    countShare(B) {
        // If B is less than 2, no valid shares can exist
        if (B < 2) return 0;

        // Calculate how many complete pairs can be formed
        let numberOfPairs = Math.floor(B / 2);

        // If less than 2 pairs can be formed, no valid sharing possible
        if (numberOfPairs < 2) return 0;

        // Calculate total combinations of choosing 2 pairs out of the total pairs
        return (numberOfPairs - 1) * numberOfPairs / 2;
    }
}
