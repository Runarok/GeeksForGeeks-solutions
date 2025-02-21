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
        let s = readLine();
        let obj = new Solution();
        console.log(obj.equalPairs(s));
        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to count the number of equal pairs of characters in the string.
 * @param {string} s - The input string
 * @returns {number} - The count of equal pairs
 */
class Solution {
    // Function to count the number of equal pairs in a string
    equalPairs(s) {
        // Hash table (array of size 256) to store the frequency of each character
        let cnt = new Array(256).fill(0);

        // Traverse the string and count the occurrences of each character
        for (let i = 0; i < s.length; i++) {
            cnt[s.charCodeAt(i) - 97] += 1;  // Update the count for the character
        }

        // Stores the result (the count of equal pairs)
        let ans = 0;

        // Traverse the frequency array and calculate the number of equal pairs
        for (let i = 0; i < 256; i++) {
            ans += cnt[i] * cnt[i];  // Add the square of the frequency to the answer
        }

        // Return the final count of equal pairs
        return ans;
    }
}
