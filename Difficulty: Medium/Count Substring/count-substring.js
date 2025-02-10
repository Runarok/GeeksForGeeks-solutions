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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.countSubstring(str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
     * Function to count substrings containing all three characters ('a', 'b', 'c').
     * @param {string} s - The input string.
     * @returns {number} - The count of valid substrings.
     */
    countSubstring(s) {
        let lastSeen = [-1, -1, -1]; // Stores the last seen index of 'a', 'b', and 'c'
        let count = 0;

        // Iterate through the string
        for (let i = 0; i < s.length; i++) {
            lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i; // Update last seen index of current character

            // If all characters ('a', 'b', 'c') have been seen at least once
            if (!lastSeen.includes(-1)) {
                count += 1 + Math.min(...lastSeen); // Add valid substrings ending at index i
            }
        }

        return count;
    }
}
