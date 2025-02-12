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

process.stdin.on('end', (_) => {
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
    for (; i < t; i++) {
        //taking input of string
        let Str = readLine().trim();
        let obj = new Solution();
        let res = obj.getSubstringWithEqual012(Str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    // Function to find the number of substrings with equal numbers of '0', '1', and '2'
    getSubstringWithEqual012(str) {
        let totalSubstrings = 0; // Stores the count of valid substrings
        let count0 = 0, count1 = 0, count2 = 0; // Counters for digits '0', '1', and '2'
        const prefixCounter = {}; // HashMap to store frequency of prefix differences

        for (let char of str) {
            // Update the count of respective digit
            if (char === '0') count0++;
            else if (char === '1') count1++;
            else if (char === '2') count2++;

            // If counts of '0', '1', and '2' are equal from the beginning, increment totalSubstrings
            if (count0 === count1 && count1 === count2) {
                totalSubstrings++;
            }

            // Create a key representing the difference of counts
            const key = `${count0 - count1},${count1 - count2}`;

            // Add the previously encountered substrings with the same difference
            totalSubstrings += prefixCounter[key] || 0;

            // Update the frequency of this difference in prefixCounter
            prefixCounter[key] = (prefixCounter[key] || 0) + 1;
        }

        return totalSubstrings;
    }
}
