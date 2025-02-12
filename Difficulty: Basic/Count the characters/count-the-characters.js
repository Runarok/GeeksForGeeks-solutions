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
        let [S,N] = readLine().trim().split(" ");
        N = parseInt(N);
        let obj = new Solution();
        let res = obj.getCount(S,N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S
 * @param {number} N
 * @return {number}
*/

class Solution {
    getCount(S, N) {
        let uniqueSequence = "";
        
        // Remove consecutive duplicate characters
        for (let i = 0; i < S.length; i++) {
            if (i === 0 || S[i] !== S[i - 1]) {
                uniqueSequence += S[i];
            }
        }

        // Count occurrences of each unique character
        const frequencyMap = new Map();
        for (let char of uniqueSequence) {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }

        // Count characters that appear exactly N times
        let count = 0;
        for (let frequency of frequencyMap.values()) {
            if (frequency === N) {
                count++;
            }
        }

        return count;
    }
}
